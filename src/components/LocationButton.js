import React from 'react';

const LocationButton = ({ onGetLocation }) => {
  return (
    <div className="location-button-container">
      <button
        onClick={onGetLocation}
        className="button button--location">
        <span />
      </button>
    </div>
  );
};

export default LocationButton;