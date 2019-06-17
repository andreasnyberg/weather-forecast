import { eachDay, addDays, isSameDay } from 'date-fns';
import { getAverage, getSum, isAwakeTime, roundAndValidate, isObjectEmpty } from './misc';

const massageDataDs = (data) => {
  const today = new Date();
  const sevenDaysFromToday = eachDay(today, addDays(today, 7));

  const massagedData = sevenDaysFromToday.map(currentDate => {
    const todayData = data.daily.data.find(item => isSameDay(currentDate, new Date(item.time * 1000)));

    if (todayData == null || isObjectEmpty(todayData)) { return { date: currentDate }}

    // ********** TEMPERATURE **********
    const tempMin = todayData.apparentTemperatureLow;
    const tempMax = todayData.apparentTemperatureHigh;

    // ********** RAINFALL **********
    const rainfall = todayData.precipIntensity;

    // ********** WINDSPEED **********
    const windspeed = todayData.windSpeed;

    // ********** HOUR DATA **********
    const hours = data.hourly.data
      .filter(item => isSameDay(currentDate, new Date(item.time * 1000)))
      .map(currentHour => {
        const temp = currentHour.temperature;
        const rainfall = currentHour.precipIntensity;
        const windspeed = currentHour.windSpeed;

        return {
          hour: new Date(currentHour.time * 1000),
          temp: roundAndValidate(temp),
          rainfall,
          windspeed: Math.round(windspeed)
        }
    });

    return {
      date: currentDate,
      tempMin: roundAndValidate(tempMin),
      tempMax: roundAndValidate(tempMax),
      rainfall,
      windspeed: Math.round(windspeed),
      hours
    };
  });

  return massagedData;
}

export default massageDataDs;
