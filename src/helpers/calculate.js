export const getAverage = (values) => {
  const sum = values.reduce((total, currentValue) => (
    total + currentValue
  ), 0);

  return Math.round(sum / values.length);
}

export const getSum = (values) => {
  // return sum of array
}
