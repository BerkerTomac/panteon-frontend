// components/NotFound.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate(lastPath, { replace: true });
  }, [navigate]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting...</p>
    </div>
  );
};

export default NotFound;
