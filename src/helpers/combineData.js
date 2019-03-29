const getAverage = (values) => {
  const sum = values.reduce((total, currentValue) => (
    total + currentValue
  ), 0);

  return Math.round(sum / values.length);
}

const combineData = (dataSmhi, dataOwm) => {

  const combinedData = dataSmhi.map(item => {
    const owmDay = dataOwm.find(x => x.day === item.day);

    return {
      day: item.day,
      tempLowest: getAverage([item.tempLowest, owmDay.tempLowest]),
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

  console.log(combinedData);

  return ['hello world'];
}

export default combineData;
