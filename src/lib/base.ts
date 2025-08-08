interface FetchWithAuthParams {
  url: string;
  options?: RequestInit;
}

const fetchWithAuth = ({ url, options = {} }: FetchWithAuthParams): Promise<Response> => {
  const access_token = localStorage.getItem("access_token");

  if (access_token) {
    options.headers = {
      ...(options.headers || {}),
      "Authorization": `Bearer ${access_token}`,
    };
  }

  return fetch(url, options);
};