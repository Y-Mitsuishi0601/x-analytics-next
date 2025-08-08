interface FetchWithAuthParams {
  url: string;
  options?: RequestInit;
}

export const fetchWithAuth = ({
  url,
  options = {},
}: FetchWithAuthParams): Promise<Response> => {
  const access_token = localStorage.getItem('access_token');

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  if (access_token) {
    options.headers = {
      ...defaultHeaders,
      ...(options.headers || {}),
      Authorization: `Bearer ${access_token}`,
    };
  } else {
    options.headers = {
      ...defaultHeaders,
      ...(options.headers || {}),
    };
  }

  options.credentials = 'include';

  return fetch(url, options);
};
