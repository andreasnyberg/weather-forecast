import React from 'react';

const Windspeed = ({ amount }) => (
  <React.Fragment>
    {amount} <span className="smaller">m/s</span>
  </React.Fragment>
);

export default Windspeed;
