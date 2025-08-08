/**
 * CSRF Token Management Utilities
 */

import { config } from './config';

const CSRF_TOKEN_KEY = 'csrf_token';

/**
 * Get stored CSRF token from localStorage
 */
export const getCSRFToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CSRF_TOKEN_KEY);
};

/**
 * Store CSRF token in localStorage
 */
export const setCSRFToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CSRF_TOKEN_KEY, token);
};

/**
 * Remove CSRF token from localStorage
 */
export const removeCSRFToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CSRF_TOKEN_KEY);
};

/**
 * Initialize CSRF token by fetching from server
 */
export const initCSRF = async (): Promise<string | null> => {
  try {
    const response = await fetch(`${config.apiUrl}/auth/csrf-token`, {
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      if (data.csrf_token) {
        setCSRFToken(data.csrf_token);
        return data.csrf_token;
      }
    }
  } catch (error) {
    console.error('Failed to initialize CSRF token:', error);
  }
  return null;
};

/**
 * Check if a request method requires CSRF protection
 */
export const requiresCSRF = (method?: string): boolean => {
  if (!method) return false;
  return ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method.toUpperCase());
};
