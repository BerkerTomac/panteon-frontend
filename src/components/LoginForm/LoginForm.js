import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaUser, FaLock } from 'react-icons/fa';

const LoginForm = ({ setActiveTab }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password })).then((result) => {
      if (loginUser.fulfilled.match(result)) {
        navigate('/configuration');
      }
    });
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      {error && (
        <div className="error">
          {Array.isArray(error) ? (
            error.map((err, index) => <p key={index}>{err.description}</p>)
          ) : (
            <p>{error}</p>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-icon">
            <FaUser />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-icon">
            <FaLock />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <span className="toggle-password" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button type="submit" className="btn-login" disabled={status === 'loading'}>
          {status === 'loading' ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="create-account">
        Don't have an account?{' '}
        <span className="create-account-link" onClick={() => setActiveTab('register')}>
          Create an account
        </span>
      </p>
    </>
  );
};

export default LoginForm;
