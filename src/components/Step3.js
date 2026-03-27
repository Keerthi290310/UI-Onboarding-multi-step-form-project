import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Step3({ data, onReset }) {
  const navigate = useNavigate();
  const isAdmin = data.role === 'Admin';

  const handleRestart = () => {
    onReset();
    navigate('/step1');
  };

  return (
    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="step-card">
      <div style={{ textAlign: 'center', fontSize: '40px' }}>🎉</div>
      <h2>{isAdmin ? 'Admin Access Granted' : 'User Setup Complete'}</h2>
      
      <div className="status-box">
        <p><strong>User:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Role:</strong> {data.role}</p>
      </div>

      <p style={{ fontSize: '14px', marginBottom: '20px' }}>
        {isAdmin 
          ? 'You can now manage the team and view system logs.' 
          : 'Welcome to your personalized dashboard.'}
      </p>

      <button onClick={handleRestart} aria-label="Start a new user registration">Start New Registration</button>
    </motion.div>
  );
}