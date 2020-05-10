import { isSameDay } from 'date-fns';
import { iconsDs } from './icons';
import { roundAndValidate, isObjectEmpty, sevenDaysFromToday } from './misc';

const massageDataDs = (data) => (
  sevenDaysFromToday.map(currentDate => {
    const todayData = data.daily.data.find(item => isSameDay(currentDate, new Date(item.time * 1000)));

    if (todayData == null || isObjectEmpty(todayData)) { return { date: currentDate }}

    // ********** HOUR DATA **********
    const hours = data.hourly.data
      .filter(item => isSameDay(currentDate, new Date(item.time * 1000)))
      .map(currentHour => {
        const icon = currentHour.icon;
        const temp = currentHour.temperature;
        const rainfall = currentHour.precipIntensity;
        const windspeed = currentHour.windSpeed;

        return {
          hour: new Date(currentHour.time * 1000),
          icon: iconsDs[icon],
          temp: roundAndValidate(temp),
          rainfall,
          windspeed: Math.round(windspeed)
        }
    });

    // ********** TEMPERATURE **********
    const tempMin = todayData.apparentTemperatureLow;
    const tempMax = todayData.apparentTemperatureHigh;

    // ********** RAINFALL **********
    const rainfall = todayData.precipIntensity;

    // ********** WINDSPEED **********
    const windspeed = todayData.windSpeed;

    return {
      date: currentDate,
      icon: iconsDs[todayData.icon],
      tempMin: roundAndValidate(tempMin),
      tempMax: roundAndValidate(tempMax),
      rainfall,
      windspeed: Math.round(windspeed),
      hours
    };
  })
)

export default massageDataDs;
