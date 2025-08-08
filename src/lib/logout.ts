const Logout = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': localStorage.getItem('csrf_token') || '',
        },
        credentials: 'include', // Include cookies
      }
    );

    if (!response.ok && response.status !== 401) {
      // 401 is acceptable during logout
      throw new Error('Logout failed');
    }
  } catch (error) {
    console.error('Logout error:', error);
    // Continue with cleanup even if request fails
  } finally {
    // Always clean up local storage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('csrf_token');
    }
  }
};

export { Logout };
