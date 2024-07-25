import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import { clearErrors } from '../../features/auth/slices/authSlice'; // Add this import
import './AuthForm.css';
import logo from '../../assets/panteonlogo.jpg';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const dispatch = useDispatch(); 

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
        {activeTab === 'login' && <LoginForm />}
        {activeTab === 'register' && <RegisterForm onRegisterSuccess={handleRegistrationSuccess} />}
      </div>
    </div>
  );
};

export default AuthForm;
