import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthForm from './components/AuthForm/AuthForm';
import ConfigurationPage from './pages/ConfigurationPage';
import './App.css';

function App() {
  return (
    <Router basename='/panteon-frontend'>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm />} />
          <Route path="/configuration" element={<ConfigurationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
