import React from 'react';

const LocationButton = ({ onClick }) => {
  return (
    <div className="location-button-container">
      <button
        onClick={onClick}
        className="button button--location">
        <span />
      </button>
    </div>
  );
};

export default LocationButton;