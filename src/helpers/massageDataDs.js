import { isSameDay, isAfter } from 'date-fns';
import { iconsDs } from './icons';
import {  getAverage,
  getSum,
  isAwakeTime,
  isCenterOfDayTime,
  roundAndValidate,
  isObjectEmpty,
  sevenDaysFromToday,
  findMostFrequentIcon } from './misc';

const massageDataDs = (data) => {
  console.log(data.hourly);
  const lat = localStorage.getItem('lat') || '59.3293'; // Stockholm as default.
  const lon = localStorage.getItem('lon') || '18.0686'; // Stockholm as default.

  const massagedData = sevenDaysFromToday.map(currentDate => {

    // TODO lyft ut till misc typ? samma finns ju i massageDataSmhi.
    //const { sunrise, sunset } = SunCalc.getTimes(addHours(currentDate, 1), lat, lon);
      
      // ********** HOUR DATA **********
      const hours = data.hourly.time.map(date => {

        console.log(date);
        // TODO  FORTSÄTT HÄR: filtrera ut de som har varit. filter innan mapen!

        return {
          hour: date,
          icon: 'night',
          temp: 0,
          rainfall: 0,
          windspeed: 0
        }
      });

    // ********** TEMPERATURE **********
    const temps = data.hourly.temperature_2m.filter((_, index) => isSameDay(currentDate, data.hourly.time[index]));
    const tempMin = Math.min(...temps);
    const tempMax = Math.max(...temps);

    // ********** RAINFALL **********
    const rainfalls = data.hourly.precipitation.filter((_, index) => isSameDay(currentDate, data.hourly.time[index]));

    // ********** WINDSPEED **********
    const windspeeds = data.hourly.windspeed_10m.filter((_, index) => isSameDay(currentDate, data.hourly.time[index]));
      
    return {
      date: currentDate,
      icon: "snow",
      tempMin: roundAndValidate(tempMin),
      tempMax: roundAndValidate(tempMax),
      rainfall: getSum(rainfalls),
      windspeed: getAverage(windspeeds),
      hours,
    };
  });

  return massagedData;
}



export default massageDataDs;
