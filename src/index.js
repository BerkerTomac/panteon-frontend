import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import {Helmet} from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Helmet><meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta></Helmet>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
