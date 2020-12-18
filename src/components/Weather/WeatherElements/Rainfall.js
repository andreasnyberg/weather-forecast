import React from 'react';
import { getRainfallCode, getRoundedRainfallAmount } from '../../../helpers/misc';

const Rainfall = ({ amount }) => {
  if (amount == null) return null;
  const code = getRainfallCode(amount);
  const roundedAmounts = getRoundedRainfallAmount(code);
  let arrow = null;
  if (code === 2) arrow = '<';
  if (code === 5) arrow = '>';
  
  return (
    <React.Fragment>
      <span className="rainfall-text--arrow">{arrow}</span>
      <span className="rainfall-text--amount">
        {
          roundedAmounts.map((amount, index) => (
            <span className="rainfall-text--amount-item" key={index}>
              {index !== 0 &&
                <span className="separator">-</span>
              }
              {amount}
            </span>
          ))
        }
      </span>
      <span className="smaller smaller--rainfall">mm</span>
    </React.Fragment>
  );
};

export default Rainfall;