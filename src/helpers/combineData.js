import { getAverage, getAverageNoRound, sevenDaysFromToday, range, findMostFrequentIcon } from './misc';
import { isSameDay, getHours } from 'date-fns';

const combineData = (dataSmhi, dataOwm, dataDs) => {
  const allHours = range(0, 23, 1);
  let data = [];

  if (dataSmhi.length) data.push(dataSmhi);
  if (dataOwm.length) data.push(dataOwm);
  if (dataDs.length) data.push(dataDs);

  return sevenDaysFromToday.map(day => {
    const allHoursWithData = [];
    const icons = data.map(src => src.find(x => isSameDay(x.date, day)).icon);
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

      if (currentHour.length) allHoursWithData.push(currentHour);
    });

    const hours = allHoursWithData.map(item => {
      if (item.length < 2) {
        const { hour, icon, temp, rainfall, windspeed } = item[0];

        return { hour, icon, temp, rainfall, windspeed };
      }

      const temps = item.map(x => x.temp);
      const icons = item.map(x => x.icon);
      const rainfalls = item.map(x => x.rainfall);
      const windspeeds = item.map(x => x.windspeed);

      return {
        hour: item[0].hour,
        icon: findMostFrequentIcon(icons, true),
        temp: getAverage(temps),
        rainfall: getAverageNoRound(rainfalls),
        windspeed: getAverage(windspeeds)
      }
    });

    return {
      date: day,
      icon: findMostFrequentIcon(icons, true),
      tempMin: getAverage(tempMins),
      tempMax: getAverage(tempMaxs),
      rainfall: getAverage(rainfalls, false),
      windspeed: getAverage(windspeeds),
      hours
    }
  });
}

export default combineData;
