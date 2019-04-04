import { getAverage } from './calculate';

const combineData = (dataSmhi, dataOwm) => {
  return dataSmhi.map(item => {
    const owmDay = dataOwm.find(x => x.day === item.day);

    return {
      day: item.day,
      tempLowest: getAverage([item.tempLowest, owmDay.tempLowest]),
      tempHighest: getAverage([item.tempHighest, owmDay.tempHighest]),
      hours: item.hours.map(itemHour => {
        const tempSmhi = itemHour.temp;
        const tempOwm = owmDay.hours.find(y => y.hour === itemHour.hour).temp;

        return {
            hour: itemHour.hour,
            temp: getAverage([tempSmhi, tempOwm])
          }
        }
      )
    }
  });
}

export default combineData;
