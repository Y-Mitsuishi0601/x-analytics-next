import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

const Login = async (values: LoginFormValues) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify(values),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || 'Login failed');
    }

    const data = await response.json();

    // Store CSRF token (no longer storing access tokens in localStorage)
    if (data.csrf_token && typeof window !== 'undefined') {
      localStorage.setItem('csrf_token', data.csrf_token);
    }

    return data.user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export { Login };
