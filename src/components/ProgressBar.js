import { useLocation } from 'react-router-dom';

const ProgressBar = () => {
  const location = useLocation();
  const steps = ['/step1', '/step2', '/step3'];
  const currentIdx = steps.indexOf(location.pathname);
  
  const safeIndex = currentIdx === -1 ? 0 : currentIdx;
  const progress = ((safeIndex + 1) / steps.length) * 100;

  return (
    <div className="progress-container" style={{ marginBottom: '20px' }}>
      <div className="progress-bg">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p style={{ fontSize: '12px', color: '#aaa', marginTop: '8px' }}>
        Step {safeIndex + 1} of {steps.length}
      </p>
    </div>
  );
};

export default ProgressBar;