import { renderRainfallString } from '../../../helpers/misc';

const Rainfall = ({ amount }) => {
  const rainfallString = renderRainfallString(amount);
  
  return rainfallString;
};

export default Rainfall;