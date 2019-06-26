import { isSameDay } from 'date-fns';
import { iconsSmhi } from './icons';
import {
  getAverage,
  getSum,
  isAwakeTime,
  roundAndValidate,
  sevenDaysFromToday,
  findMostFrequentIcon
} from './misc';

const massageDataSmhi = (data) => (
  sevenDaysFromToday.map(currentDate => {
    const todayData = data.timeSeries.filter(item => isSameDay(currentDate, item.validTime));

    // ********** TEMPERATURE **********
    const temps = todayData
                    .filter(item => isAwakeTime(item.validTime))
                    .map(item => item.parameters.find(item => item.name === 't').values[0]);
    const tempMin = Math.min(...temps);
    const tempMax = Math.max(...temps);

    // ********** RAINFALL **********
    const rainfalls = todayData.map(item => (
      item.parameters.find(item => item.name === 'pmedian').values[0]
    ));

    // ********** WINDSPEED **********
    const windspeeds = todayData.map(item => (
      item.parameters.find(item => item.name === 'ws').values[0]
    ));

    // ********** HOUR DATA **********
    const hours = todayData.map(currentHour => {
      const temp = currentHour.parameters.find(item => item.name === 't').values[0];
      const icon = currentHour.parameters.find(item => item.name === 'Wsymb2').values[0];
      const rainfall = currentHour.parameters.find(item => item.name === 'pmedian').values[0];
      const windspeed = currentHour.parameters.find(item => item.name === 'ws').values[0];

      return {
        hour: currentHour.validTime,
        icon: iconsSmhi[icon],
        temp: roundAndValidate(temp),
        rainfall,
        windspeed: Math.round(windspeed)
      }
    });

    return {
      date: currentDate,
      icon: findMostFrequentIcon(hours),
      tempMin: roundAndValidate(tempMin),
      tempMax: roundAndValidate(tempMax),
      rainfall: getSum(rainfalls),
      windspeed: getAverage(windspeeds),
      hours
    };
  })
)

export default massageDataSmhi;
