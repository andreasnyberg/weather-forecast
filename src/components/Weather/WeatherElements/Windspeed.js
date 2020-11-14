import React from 'react';

const Windspeed = ({ amount }) => (
  <React.Fragment>
    <span className="windspeed-amount">{amount}</span>
    <span className="smaller">m/s</span>
  </React.Fragment>
);

export default Windspeed;
