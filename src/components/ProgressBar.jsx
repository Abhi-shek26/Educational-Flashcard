import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${progress}%` }}
      ></div>
      <p>
        Card {current} of {total}
      </p>
    </div>
  );
};

export default ProgressBar;