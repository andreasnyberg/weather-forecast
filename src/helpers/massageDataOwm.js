import { isSameDay } from 'date-fns';
import { iconsOwm } from './icons';
import {
  getAverage,
  getSum,
  isAwakeTime,
  isCenterOfDayTime,
  roundAndValidate,
  isObjectEmpty,
  sevenDaysFromToday,
  findMostFrequentIcon
} from './misc';

const massageDataOwm = (data) => (
  sevenDaysFromToday.map(currentDate => {
    const todayData = data.list.filter(item => isSameDay(currentDate, new Date(item.dt * 1000)));

    if (!todayData.length) { return { date: currentDate }}

    // ********** HOUR DATA **********
    const hours = todayData.map(currentHour => {
      const temp = currentHour.main.temp;
      const icon = currentHour.weather[0].icon;
      const rainfall = currentHour.rain == null || isObjectEmpty(currentHour.rain) ? 0 : currentHour.rain['3h'];
      const windspeed = currentHour.wind.speed;

      return {
        hour: new Date(currentHour.dt * 1000),
        icon: iconsOwm[icon],
        temp: roundAndValidate(temp),
        rainfall,
        windspeed: Math.round(windspeed)
      }
    });

    // ********** ICON **********
    const icons = hours
                    .filter(item => isCenterOfDayTime(item.hour))
                    .map(item => item.icon);

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

    // ********** WINDSPEED **********
    const windspeeds = todayData.map(item => item.wind.speed);

    return {
      date: currentDate,
      icon: findMostFrequentIcon(icons),
      tempMin: roundAndValidate(tempMin),
      tempMax: roundAndValidate(tempMax),
      rainfall: getSum(rainfalls),
      windspeed: getAverage(windspeeds),
      hours
    };
  })
)

export default massageDataOwm;
