import React from 'react';

const ProgressBar = ({ bgcolor, progress, height = 8 }) => {
  return (
    <div className="progress-container">
      <div 
        className="progress-bar"
        style={{
          height: `${height}px`,
          '--progress-width': `${progress}%`,
          '--progress-color': bgcolor
        }}
      >
        <div className="progress-fill"></div>
      </div>
    </div>
  )
}

export default ProgressBar;
