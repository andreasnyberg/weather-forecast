import { getAverage } from './misc';
import { isSameDay } from 'date-fns';

const combineData = (dataSmhi, dataOwm) => {
  return dataSmhi.map(item => {
    const owmDay = dataOwm.find(x => isSameDay(x.date, item.date));

    return {
      date: item.date,
      tempMin: getAverage([item.tempMin, owmDay.tempMin]),
      tempMax: getAverage([item.tempMax, owmDay.tempMax]),
      rainfall: getAverage([item.rainfall, owmDay.rainfall]),
      windspeed: getAverage([item.windspeed, owmDay.windspeed]),
      // hours: item.hours.map(itemHour => {
      //   const tempSmhi = itemHour.temp;
      //   const tempOwm = owmDay.hours.find(y => y.hour === itemHour.hour).temp;

      //   return {
      //       hour: itemHour.hour,
      //       temp: getAverage([tempSmhi, tempOwm])
      //     }
      //   }
      // )
    }
  });
}

export default combineData;
