import { isSameDay } from 'date-fns';
import {
  getAverage,
  getSum,
  isAwakeTime,
  roundAndValidate,
  isObjectEmpty,
  sevenDaysFromToday
} from './misc';

const massageDataOwm = (data) => (
  sevenDaysFromToday.map(currentDate => {
    const todayData = data.list.filter(item => isSameDay(currentDate, new Date(item.dt * 1000)));

    if (!todayData.length) { return { date: currentDate }}

    // ********** TEMPERATURE **********
    const temps = todayData
                    .filter(item => isAwakeTime(new Date(item.dt * 1000)))
                    .map(item => item.main.temp);
    const tempMin = Math.min(...temps);
    const tempMax = Math.max(...temps);

    // ********** RAINFALL **********
    const rainfalls = todayData.map(item => (
      item.rain == null || isObjectEmpty(item.rain) ? 0 : item.rain['3h']
    ));

    // // ********** WINDSPEED **********
    const windspeeds = todayData.map(item => item.wind.speed);

    // ********** HOUR DATA **********
    const hours = todayData.map(currentHour => {
      const temp = currentHour.main.temp;
      const rainfall = currentHour.rain == null || isObjectEmpty(currentHour.rain) ? 0 : currentHour.rain['3h'];
      const windspeed = currentHour.wind.speed;

      return {
        hour: new Date(currentHour.dt * 1000),
        temp: roundAndValidate(temp),
        rainfall,
        windspeed: Math.round(windspeed)
      }
    });

    return {
      date: currentDate,
      tempMin: roundAndValidate(tempMin),
      tempMax: roundAndValidate(tempMax),
      rainfall: getSum(rainfalls),
      windspeed: getAverage(windspeeds),
      hours
    };
  })
)

export default massageDataOwm;
