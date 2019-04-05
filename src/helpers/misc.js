import { getHours } from 'date-fns';

const reducer = (total, currentValue) => total + currentValue;
const isMinusZero = (value) => 1/value === -Infinity;

export const roundAndValidate = (value) => {
  const valueRounded = Math.round(value);

  return isMinusZero(valueRounded) ? 0 : valueRounded;
}

export const getAverage = (values) => {
  const sum = values.reduce(reducer);

  return Math.round(sum / values.length);
}

export const getSum = (values) => {
  const sum = values.reduce(reducer);

  return Math.round(sum * 10) / 10;
}

export const isAwakeTime = (date) => (
  getHours(date) >= 7 && getHours(date) <= 23
);


