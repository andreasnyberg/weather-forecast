import { eachDay, addDays, isSameDay, getHours, format } from 'date-fns';
import { getAverage } from './calculate.js';

const massageDataSmhi = (data) => {
  const today = new Date();
  const tenDaysFromToday = eachDay(today, addDays(today, 10));

  const myMassagedData = tenDaysFromToday.map(currentDay => {
    const todayData = data.timeSeries.filter(item => isSameDay(currentDay, item.validTime));
    // console.log(todayData);

    const windspeeds = todayData.map(item => (
      item.parameters.find(item => item.name === 'ws').values[0]
    ));

    const rainfalls = todayData.map(item => (
      item.parameters.find(item => item.name === 'pmedian').values[0]
    ));

    // TODO create a getSum in calculate.js
    console.log(rainfalls);



    // TODO tempLowest/tempHighest borde endast ta hänsyn till klockslag mellan 7-23.

    return {
      day: format(currentDay, 'dddd'),
      windspeed: getAverage(windspeeds)
    };
  });

  console.log(myMassagedData);


  return ['hello']
}

export default massageDataSmhi;
