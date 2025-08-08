/**
 * Authentication Context with HTTP-only cookies and CSRF protection
 */

'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { authenticatedFetch } from '@/lib/auth-fetch';
import { initCSRF, setCSRFToken, removeCSRFToken } from '@/lib/csrf';
import { config } from '@/lib/config';

// User type definition
export interface User {
  id: string;
  username: string;
  email: string;
  is_active: boolean;
}

// Authentication context type
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  loading: boolean;
  isAuthenticated: boolean;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Authentication Provider Props
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Authentication Provider Component
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize authentication state on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Initialize CSRF token
        await initCSRF();

        // Check if user is already authenticated
        const response = await authenticatedFetch('/auth/me', {
          requireAuth: false, // Don't redirect on 401 during initialization
        });

        if (response.ok) {
          const userData: User = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error('Auth initialization failed:', error);
        // Silently fail during initialization
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  /**
   * Login function
   */
  const login = async (email: string, password: string): Promise<User> => {
    try {
      const response = await fetch(`${config.apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Login failed');
      }

      const data = await response.json();

      // Store CSRF token
      if (data.csrf_token) {
        setCSRFToken(data.csrf_token);
      }

      // Set user state
      if (data.user) {
        setUser(data.user);
        return data.user;
      }

      throw new Error('Invalid response format');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  /**
   * Logout function
   */
  const logout = async (): Promise<void> => {
    try {
      await authenticatedFetch('/auth/logout', {
        method: 'POST',
        requireAuth: false, // Don't redirect on logout
      });
    } catch (error) {
      console.error('Logout error:', error);
      // Continue with logout even if server request fails
    } finally {
      // Always clear local state
      removeCSRFToken();
      setUser(null);
    }
  };

  // Context value
  const value: AuthContextType = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Hook to use authentication context
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
