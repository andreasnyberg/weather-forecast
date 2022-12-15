import { isSameDay, isSameHour, isPast, isBefore, isAfter } from 'date-fns';
import { iconsOM } from './icons';
import { 
  getAverage,
  getSum,
  isAwakeTime,
  isMiddleHoursOfDay,
  roundAndValidate,
  sevenDaysFromToday,
  findMostFrequentIcon,
  getSunriseSunset } from './misc';

const massageDataOm = (data) => {
  console.log(data.hourly.temperature_2m);

  return (
    sevenDaysFromToday.map(currentDate => {
      const { sunrise, sunset } = getSunriseSunset(currentDate);
        
      // ********** HOUR DATA **********
      const hours = data.hourly.time
        .filter(date => isSameDay(currentDate, date))
        .filter(date => !isPast(date, currentDate))
        .map(date => {
          const findCurrentHour = (index) => isSameDay(date, data.hourly.time[index]) && isSameHour(date, data.hourly.time[index]);
          const weathercode = data.hourly.weathercode.find((_, index) => findCurrentHour(index));
          const temp = data.hourly.temperature_2m.find((_, index) => findCurrentHour(index));
          const rainfall = data.hourly.precipitation.find((_, index) => findCurrentHour(index));
          const windspeed = data.hourly.windspeed_10m.find((_, index) => findCurrentHour(index));
          const isSunUp = isBefore(date, sunset) && isAfter(date, sunrise);

          return {
            hour: date,
            icon: isSunUp ? iconsOM[weathercode] : 'night',
            temp: roundAndValidate(temp),
            rainfall,
            windspeed: Math.round(windspeed)
          }
      });

      // ********** ICON **********
      const iconsMiddleHours = hours
        .filter(item => isMiddleHoursOfDay(item.hour))
        .map(item => item.icon);
      
      const hasOtherThanNightIcons = iconsMiddleHours.some(icon => icon !== 'night');
      const icons = hasOtherThanNightIcons ? iconsMiddleHours.filter(icon => icon !== 'night') : iconsMiddleHours;

      // ********** TEMPERATURE **********
      const temps = data.hourly.temperature_2m
        .filter((_, index) => isSameDay(currentDate, data.hourly.time[index]))
        .filter((_, index) => isAwakeTime(data.hourly.time[index]));
      const tempMin = Math.min(...temps);
      const tempMax = Math.max(...temps);

      // ********** RAINFALL **********
      const rainfalls = data.hourly.precipitation.filter((_, index) => isSameDay(currentDate, data.hourly.time[index]));

      // ********** WINDSPEED **********
      const windspeeds = data.hourly.windspeed_10m.filter((_, index) => isSameDay(currentDate, data.hourly.time[index]));
        
      return {
        date: currentDate,
        icon: findMostFrequentIcon(icons),
        tempMin: roundAndValidate(tempMin),
        tempMax: roundAndValidate(tempMax),
        rainfall: getSum(rainfalls),
        windspeed: getAverage(windspeeds),
        hours,
      };
    })
  );
}



export default massageDataOm;
