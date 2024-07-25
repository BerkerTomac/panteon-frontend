import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const lastPath = location.state?.from || window.location.pathname + window.location.search;
    navigate(lastPath, { replace: true });
  }, [navigate, location]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting...</p>
    </div>
  );
};

export default NotFound;
