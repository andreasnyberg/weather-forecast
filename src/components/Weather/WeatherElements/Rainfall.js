import React from 'react';
import { getRainfallCode, getRoundedRainfallAmount } from '../../../helpers/misc';

const Rainfall = ({ amount }) => {
  const rainfallCode = getRainfallCode(amount);

  const renderRainfallText = (code) => {
    if (code === 0) {
      return '';
    } 
    
    let roundedAmount = getRoundedRainfallAmount(code);
    let arrow = null;
    if (code === 2) arrow = '<';
    if (code === 5) arrow = '>';
    
    return (
      <React.Fragment>
        <span className="smaller">
          { arrow }
        </span>

        <span className="row-baseline">
          <span className="rainfall-text--amount">{roundedAmount}</span>
          <span className="smaller">mm</span>
        </span>
      </React.Fragment>
    );
  }

  return (
    <div className="rainfall-text">
      { renderRainfallText(rainfallCode) }
    </div>
  );
};

export default Rainfall;