import React from 'react';

const UpdateButtons = ({ onGetLocation, onRefresh }) => (
  <div className="button-container">
    <button
      onClick={onGetLocation}
      className="button button--round button--location">
      <span />
    </button>
    
    <button
      onClick={onRefresh}
      className="button button--round button--refresh">
      <span />
    </button>      
  </div>
);

export default UpdateButtons;