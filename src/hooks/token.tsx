import { useState } from 'react';

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    return tokenString ? tokenString : null;
  };

  const [authToken, setAuthToken] = useState(getToken());

  const saveToken = (token: string | null) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    setAuthToken(token);
  };

  return {
    authToken,
    setAuthToken: saveToken,
  };
};

export default useToken;
