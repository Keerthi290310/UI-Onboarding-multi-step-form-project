import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import './App.css';

function App() {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem('formData');
      return saved ? JSON.parse(saved) : { name: '', email: '', role: '' };
    } catch (error) {
      console.warn('Failed to load form data from localStorage:', error);
      return { name: '', email: '', role: '' };
    }
  });

  const updateData = (newData) => {
    setFormData(prev => {
      const updated = { ...prev, ...newData };
      try {
        localStorage.setItem('formData', JSON.stringify(updated));
      } catch (error) {
        console.warn('Failed to save form data to localStorage:', error);
      }
      return updated;
    });
  };

  const resetForm = () => {
    try {
      localStorage.removeItem('formData');
    } catch (error) {
      console.warn('Failed to remove form data from localStorage:', error);
    }
    setFormData({ name: '', email: '', role: '' });
  };

  return (
    <Router>
      <div className="container">
        <div className="app-container">
          <ProgressBar />
          <Routes>
            <Route path="/" element={<Navigate to="/step1" />} />
            
            <Route path="/step1" element={
              <Step1 data={formData} update={updateData} />
            } />

            <Route path="/step2" element={
              formData.name && formData.email ? (
                <Step2 data={formData} update={updateData} />
              ) : (
                <Navigate to="/step1" />
              )
            } />

            <Route path="/step3" element={
              formData.role ? (
                <Step3 data={formData} onReset={resetForm} />
              ) : (
                <Navigate to="/step1" />
              )
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;