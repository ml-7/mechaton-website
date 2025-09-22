import React from 'react';

const SplineComponent = ({ sceneUrl, width = "100%", height = "400px", className }) => {
  return (
    <div className={className} style={{ width, height }}>
      <iframe
        src={sceneUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: '8px' }}
      />
    </div>
  );
};

export default SplineComponent;