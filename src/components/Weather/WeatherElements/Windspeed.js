import React from 'react';

const Windspeed = ({ amount }) => {
  if (amount == null) return null;

  return (
    <React.Fragment>
      <span className="windspeed-amount">{amount}</span>
      <span className="smaller">m/s</span>
    </React.Fragment>
  )
};

export default Windspeed;
