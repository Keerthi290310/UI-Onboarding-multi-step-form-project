import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Step1 = ({ data, update }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!data.name?.trim()) tempErrors.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) tempErrors.email = "Please enter a valid email address";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) navigate('/step2');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="step-card">
      <h2>Welcome!</h2>
      <p>Please enter your details to start.</p>

      <input
        type="text"
        placeholder="Your Name"
        className={errors.name ? 'input-error' : ''}
        value={data.name || ''}
        onChange={(e) => update({ name: e.target.value })}
        aria-label="Full name"
        aria-describedby={errors.name ? "name-error" : undefined}
        aria-invalid={!!errors.name}
      />
      {errors.name && <span id="name-error" className="error-text" role="alert">{errors.name}</span>}

      <input
        type="email"
        placeholder="you@example.com"
        className={errors.email ? 'input-error' : ''}
        value={data.email || ''}
        onChange={(e) => update({ email: e.target.value })}
        aria-label="Email address"
        aria-describedby={errors.email ? "email-error" : undefined}
        aria-invalid={!!errors.email}
      />
      {errors.email && <span id="email-error" className="error-text" role="alert">{errors.email}</span>}

      <button onClick={handleNext} style={{ marginTop: '10px' }} aria-label="Proceed to next step">Next</button>
    </motion.div>
  );
};

export default Step1;