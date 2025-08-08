/**
 * @deprecated Use authenticatedFetch from @/lib/auth-fetch instead
 * This is kept for backward compatibility during migration
 */

import { authenticatedFetch } from './auth-fetch';

interface FetchWithAuthParams {
  url: string;
  options?: RequestInit;
}

export const fetchWithAuth = ({
  url,
  options = {},
}: FetchWithAuthParams): Promise<Response> => {
  // Delegate to new authenticated fetch utility
  return authenticatedFetch(url, options);
};
