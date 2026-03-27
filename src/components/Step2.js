import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Step2 = ({ data, update }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const roleDescriptions = {
    Admin: "Full access to manage teams, view logs, and configure settings.",
    User: "Standard access to your personalized dashboard and basic features."
  };

  const handleNext = async () => {
    setLoading(true);
    // Mimic the async behavior you had
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    navigate('/step3');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="step-content"
    >
      <h2>Select Your Role</h2>
      <p>Please choose your account type to finish.</p>

      <select 
        value={data.role || ''} 
        onChange={(e) => update({ role: e.target.value })}
        aria-label="Select your role"
        aria-describedby={data.role ? "role-description" : undefined}
      >
        <option value="" disabled>Choose...</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>

      {data.role && (
        <p id="role-description" style={{ fontSize: '14px', color: '#ccc', marginTop: '10px' }}>
          {roleDescriptions[data.role]}
        </p>
      )}

      <div className="button-group">
        <button className="secondary" onClick={() => navigate('/step1')}>
          Back
        </button>
        <button 
          disabled={!data.role || loading} 
          onClick={handleNext}
        >
          {loading ? "Processing..." : "Finish"}
        </button>
      </div>
    </motion.div>
  );
};

export default Step2;