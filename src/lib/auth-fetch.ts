/**
 * Authenticated fetch utility with HTTP-only cookies and CSRF protection
 */

import { config } from './config';
import { getCSRFToken, setCSRFToken, initCSRF, requiresCSRF } from './csrf';

interface AuthenticatedFetchOptions extends RequestInit {
  requireAuth?: boolean;
}

/**
 * Make authenticated requests with automatic CSRF handling and token refresh
 */
export const authenticatedFetch = async (
  url: string,
  options: AuthenticatedFetchOptions = {}
): Promise<Response> => {
  const { requireAuth = true, ...fetchOptions } = options;

  // Ensure URL is absolute
  const fullUrl = url.startsWith('http') ? url : `${config.apiUrl}${url}`;

  // Set up default headers
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  // Add CSRF token for state-changing requests
  if (requiresCSRF(fetchOptions.method)) {
    const csrfToken = getCSRFToken();
    if (csrfToken) {
      (defaultHeaders as Record<string, string>)['X-CSRF-Token'] = csrfToken;
    }
  }

  // Set up request options
  const requestOptions: RequestInit = {
    credentials: 'include', // Always send cookies
    ...fetchOptions,
    headers: defaultHeaders,
  };

  try {
    let response = await fetch(fullUrl, requestOptions);

    // Handle 401 (token expired) - try to refresh
    if (response.status === 401 && requireAuth) {
      try {
        const refreshResponse = await fetch(`${config.apiUrl}/auth/refresh`, {
          method: 'POST',
          credentials: 'include',
        });

        if (refreshResponse.ok) {
          // Retry original request after successful refresh
          response = await fetch(fullUrl, requestOptions);
        } else {
          // Refresh failed, redirect to login
          if (typeof window !== 'undefined') {
            window.location.href = '/login';
          }
          throw new Error('Authentication failed');
        }
      } catch (refreshError) {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        throw refreshError;
      }
    }

    // Handle 403 CSRF errors
    if (
      response.status === 403 &&
      response.headers.get('x-error-type') === 'CSRF'
    ) {
      try {
        // Get new CSRF token and retry
        const newToken = await initCSRF();
        if (newToken && requiresCSRF(fetchOptions.method)) {
          (requestOptions.headers as Record<string, string>)['X-CSRF-Token'] =
            newToken;
          response = await fetch(fullUrl, requestOptions);
        }
      } catch (csrfError) {
        console.error('CSRF token refresh failed:', csrfError);
      }
    }

    return response;
  } catch (error) {
    console.error('Authenticated fetch failed:', error);
    throw error;
  }
};

/**
 * Convenience method for GET requests
 */
export const authenticatedGet = (
  url: string,
  options?: AuthenticatedFetchOptions
) => authenticatedFetch(url, { ...options, method: 'GET' });

/**
 * Convenience method for POST requests
 */
export const authenticatedPost = (
  url: string,
  data?: any,
  options?: AuthenticatedFetchOptions
) =>
  authenticatedFetch(url, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });

/**
 * Convenience method for PUT requests
 */
export const authenticatedPut = (
  url: string,
  data?: any,
  options?: AuthenticatedFetchOptions
) =>
  authenticatedFetch(url, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });

/**
 * Convenience method for DELETE requests
 */
export const authenticatedDelete = (
  url: string,
  options?: AuthenticatedFetchOptions
) => authenticatedFetch(url, { ...options, method: 'DELETE' });
