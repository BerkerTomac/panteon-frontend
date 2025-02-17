import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import { clearErrors } from '../../features/auth/slices/authSlice';
import './AuthForm.css';
import logo from '../../assets/panteonlogo.jpg';
import { useLocation } from 'react-router-dom';


const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const dispatch = useDispatch();
  const location = useLocation();

    useEffect(() => {
    localStorage.setItem('lastPath', location.pathname);
  }, [location]);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    dispatch(clearErrors());
  };

  const handleRegistrationSuccess = () => {
    setActiveTab('login');
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <img src={logo} alt="Panteon Logo" className="logo" />
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabClick('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => handleTabClick('register')}
          >
            Register
          </button>
        </div>
        {activeTab === 'login' && <LoginForm setActiveTab={setActiveTab} />}
        {activeTab === 'register' && <RegisterForm onRegisterSuccess={handleRegistrationSuccess} />}
      </div>
    </div>
  );
};

export default AuthForm;
