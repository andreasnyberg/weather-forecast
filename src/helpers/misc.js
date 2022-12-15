import { getHours, eachDay, addDays, addHours } from 'date-fns';
import SunCalc from 'suncalc';
import { SourceStatuses } from '..//actions/types';

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

// TODO döp om till isMiddleHoursOfDay
export const isMiddleHoursOfDay = (date) => (
  getHours(date) >= 10 && getHours(date) <= 19
);

export const isObjectEmpty = (obj) => {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}

export const getRainfallCode = (value) => {
  if (value == null) {
    return 0;
  } else if (value === 0 || value < 0.01) {
    return 1;
  } else if (value < 0.2) {
    return 2;
  } else if (value >= 0.2 && value < 1) {
    return 3;
  } else if (value >= 1 && value <= 2) {
    return 4;
  } else {
    return 5;
  }
}

export const getRoundedRainfallAmount = (code) => {
  if (code === 1) return ['0'];
  if (code === 2) return ['0,2'];
  if (code === 3) return ['0,2', '1'];
  if (code === 4) return ['1', '2'];
  if (code === 5) return ['2'];
}

const today = new Date();
// TODO döp om till sixdaysfrom...
export const sevenDaysFromToday = eachDay(today, addDays(today, 6));

export const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

export const findMostFrequentIcon = (array) => {
  const counts = {};
  let compare = -1;
  let mostFrequent;

  for (let i = 0, len = array.length; i < len; i++) {
    const word = array[i];

    if (counts[word] === undefined) {
      counts[word] = 1;
    } else {
      counts[word] = counts[word] + 1;
    }

    if (counts[word] > compare) {
      compare = counts[word];
      mostFrequent = array[i];
    }
  }

  return mostFrequent;
}

export const isDone = item => item.status === SourceStatuses.DONE;

export const getSunriseSunset = (date) => {
  const lat = localStorage.getItem('lat') || '59.3293'; // Stockholm as default.
  const lon = localStorage.getItem('lon') || '18.0686'; // Stockholm as default.
  const { sunrise, sunset } = SunCalc.getTimes(addHours(date, 1), lat, lon);
  return { sunrise, sunset };
}
