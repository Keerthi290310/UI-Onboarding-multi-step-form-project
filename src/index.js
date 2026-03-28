import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Add this import
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. Wrap App with BrowserRouter and add the basename */}
    <BrowserRouter basename="/UI-Onboarding-multi-step-form-project">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
