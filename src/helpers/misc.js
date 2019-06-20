import { getHours, eachDay, addDays } from 'date-fns';

const reducer = (total, currentValue) => total + currentValue;
const isMinusZero = (value) => 1/value === -Infinity;

export const roundAndValidate = (value) => {
  const valueRounded = Math.round(value);

  return isMinusZero(valueRounded) ? 0 : valueRounded;
}

export const roundToOneDecimal = (value) => (
  Math.round(value * 10) / 10
);

export const getAverage = (values, roundDefault = true) => {
  const valuesFilterered = values.filter(value => typeof value !== 'undefined');
  const sum = valuesFilterered.reduce(reducer);
  const average = sum / valuesFilterered.length;

  return roundDefault ? Math.round(average) : roundToOneDecimal(average);
}

export const getAverageNoRound = (values) => {
  const sum = values.reduce(reducer);
  const average = sum / values.length;

  return average;
}

export const getSum = (values) => {
  const sum = values.reduce(reducer);

  return roundToOneDecimal(sum);
}

export const isAwakeTime = (date) => (
  getHours(date) >= 7 && getHours(date) <= 23
);

export const isObjectEmpty = (obj) => {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}

export const renderRainfallString = (value) => {
  if (value == null) {
    return '-';
  } else if (value === 0 || value < 0.01) {
    return 'Uppehåll';
  } else if (value < 0.2) {
    return '< 0,2 mm';
  } else if (value >= 0.2 && value < 1) {
    return '0,2 - 1 mm';
  } else if (value >= 1 && value <= 2) {
    return '1 - 2 mm';
  } else {
    return '> 2 mm';
  }
}

const today = new Date();
export const sevenDaysFromToday = eachDay(today, addDays(today, 7));

export const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
