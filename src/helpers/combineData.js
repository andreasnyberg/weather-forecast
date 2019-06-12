import { getAverage, getAverageNoRound } from './misc';
import { isSameDay, isSameHour } from 'date-fns';

const combineData = (dataSmhi, dataOwm) => {
  return dataSmhi.map(item => {
    const owmDay = dataOwm.find(x => isSameDay(x.date, item.date));

    return {
      date: item.date,
      tempMin: getAverage([item.tempMin, owmDay.tempMin]),
      tempMax: getAverage([item.tempMax, owmDay.tempMax]),
      rainfall: getAverage([item.rainfall, owmDay.rainfall], false),
      windspeed: getAverage([item.windspeed, owmDay.windspeed]),
      hours: item.hours.map(itemHour => {
        const temps = [ itemHour.temp ];
        const rainfalls = [ itemHour.rainfall ];
        const windspeeds = [ itemHour.windspeed ];

        if (owmDay.hours) {
          const owmHour = owmDay.hours.find(y => isSameHour(y.hour, itemHour.hour));

          if (typeof owmHour !== 'undefined') {
            temps.push(owmHour.temp);
            rainfalls.push(owmHour.rainfall);
            windspeeds.push(owmHour.windspeed);
          }
        }

        return {
            hour: itemHour.hour,
            temp: getAverage(temps),
            rainfall: getAverageNoRound(rainfalls),
            windspeed: getAverage(windspeeds)
          }
        }
      )
    }
  });
}

export default combineData;
