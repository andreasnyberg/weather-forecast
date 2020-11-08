import SunCalc from 'suncalc';
import { isSameDay, isBefore, isAfter } from 'date-fns';
import { iconsSmhi } from './icons';
import {
  getAverage,
  getSum,
  isAwakeTime,
  isCenterOfDayTime,
  roundAndValidate,
  sevenDaysFromToday,
  findMostFrequentIcon
} from './misc';

const massageDataSmhi = (data) => {
  const lat = localStorage.getItem('lat') || '59.3293'; // Stockholm as default.
  const lon = localStorage.getItem('lon') || '18.0686'; // Stockholm as default.

  return (
    sevenDaysFromToday.map(currentDate => {
      const todayData = data.timeSeries.filter(item => isSameDay(currentDate, item.validTime));
      const { sunrise, sunset } = SunCalc.getTimes(currentDate, lat, lon);
      
      // ********** HOUR DATA **********
      const hours = todayData.map(currentHour => {
        const temp = currentHour.parameters.find(item => item.name === 't').values[0];
        const icon = currentHour.parameters.find(item => item.name === 'Wsymb2').values[0];
        const rainfall = currentHour.parameters.find(item => item.name === 'pmedian').values[0];
        const windspeed = currentHour.parameters.find(item => item.name === 'ws').values[0];
        const isSunUp = isBefore(new Date(currentHour.validTime), sunset) &&
                        isAfter(new Date(currentHour.validTime), sunrise);

        return {
          hour: currentHour.validTime,
          icon: isSunUp ? iconsSmhi[icon] : 'night',
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
}

export default massageDataSmhi;
