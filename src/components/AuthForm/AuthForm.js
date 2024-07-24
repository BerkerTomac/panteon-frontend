import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

import './AuthForm.css';
import logo from '../../assets/panteonlogo.jpg';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');

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
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
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
