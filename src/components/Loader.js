import React from 'react';
import '../App.css'; // Assumendo che App.css si trovi in src
import iconE from './img/grafica.png'

const FullScreenImageWithLoader = () => {
  return (
    <div className="fullscreen-container">
      <img src={iconE} alt="fullscreen" className="fullscreen-image" />
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default FullScreenImageWithLoader;
