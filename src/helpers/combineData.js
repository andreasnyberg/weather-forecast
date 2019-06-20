import { getAverage, getAverageNoRound, sevenDaysFromToday, range } from './misc';
import { isSameDay, getHours } from 'date-fns';

const combineData = (dataSmhi, dataOwm, dataDs) => {
  const data = [ dataSmhi, dataOwm, dataDs ];

  const allHours = range(0, 23, 1);
  const allHoursWithData = [];

  return sevenDaysFromToday.map(day => {
    const tempMins = data.map(src => src.find(x => isSameDay(x.date, day)).tempMin);
    const tempMaxs = data.map(src => src.find(x => isSameDay(x.date, day)).tempMax);
    const rainfalls = data.map(src => src.find(x => isSameDay(x.date, day)).rainfall);
    const windspeeds = data.map(src => src.find(x => isSameDay(x.date, day)).windspeed);
    const hourData = data
                      .map(src => src.find(x => isSameDay(x.date, day)).hours)
                      .filter(item => typeof item !== 'undefined' && item.length);

    allHours.forEach((hour) => {
      const currentHour = hourData
                            .map(src => src.find(x => getHours(x.hour) === hour))
                            .filter(src => typeof src !== 'undefined');

      if (currentHour.length) {
        allHoursWithData.push(currentHour);
      }
    });

    const hours = allHoursWithData.map(item => {
      if (item.length < 2) {
        return {
          hour: item[0].hour,
          temp: item[0].temp,
          rainfall: item[0].rainfall,
          windspeed: item[0].windspeed
        }
      }

      const temps = item.map(x => x.temp);
      const rainfalls = item.map(x => x.rainfall);
      const windspeeds = item.map(x => x.windspeed);

      return {
        hour: item[0].hour,
        temp: getAverage(temps),
        rainfall: getAverageNoRound(rainfalls),
        windspeed: getAverage(windspeeds)
      }
    });

    return {
      date: day,
      tempMin: getAverage(tempMins),
      tempMax: getAverage(tempMaxs),
      rainfall: getAverage(rainfalls, false),
      windspeed: getAverage(windspeeds),
      hours
    }
  });
}

export default combineData;
