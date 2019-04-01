import { eachDay, addDays, isSameDay, getHours, format } from 'date-fns';

const massageDataSmhi = (data) => {
  console.log(data);
  console.log('-------------------');

  const today = new Date();
  const tenDaysFromToday = eachDay(today, addDays(today, 10));

  const myEpicData = tenDaysFromToday.map(currentDay => {
    const todayData = data.timeSeries.filter(item => isSameDay(currentDay, item.validTime));
    console.log(todayData);

    // TODO tempLowest/tempHighest borde endast ta hänsyn till klockslag mellan 7-23.


    return todayData;
  });

  return ['hello']
}

export default massageDataSmhi;
