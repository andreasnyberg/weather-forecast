import React from 'react';
import { getRainfallCode, getRoundedRainfallAmount } from '../../../helpers/misc';

const Rainfall = ({ amount }) => {
  if (amount == null) return null;
  const code = getRainfallCode(amount);
  const roundedAmount = getRoundedRainfallAmount(code);
  let arrow = null;
  if (code === 2) arrow = '<';
  if (code === 5) arrow = '>';
  
  return (
    <React.Fragment>
      <span className="rainfall-text--arrow">{arrow}</span>
      <span className="rainfall-text--amount">{roundedAmount}</span>
      <span className="smaller">mm</span>
    </React.Fragment>
  );
};

export default Rainfall;