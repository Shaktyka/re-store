import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">Упс!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent letter to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
