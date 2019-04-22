import { eachDay, addDays, isSameDay } from 'date-fns';
import { getAverage, getSum, isAwakeTime, roundAndValidate } from './misc';

const massageDataOwm = (data) => {
  console.log(data);
  
  const today = new Date();
  const sevenDaysFromToday = eachDay(today, addDays(today, 7));

  const massagedData = sevenDaysFromToday.map(currentDate => {
    const todayData = data.list.filter(item => isSameDay(currentDate, new Date(item.dt * 1000)));

    console.log(todayData);
    

    // ********** TEMPERATURE **********
    // const temps = todayData
    //                 .filter(item => isAwakeTime(item.validTime))
    //                 .map(item => item.parameters.find(item => item.name === 't').values[0]);
    // const tempMin = Math.min(...temps);
    // const tempMax = Math.max(...temps);

    // // ********** RAINFALL **********
    // const rainfalls = todayData.map(item => (
    //   item.parameters.find(item => item.name === 'pmedian').values[0]
    // ));

    // // ********** WINDSPEED **********
    // const windspeeds = todayData.map(item => (
    //   item.parameters.find(item => item.name === 'ws').values[0]
    // ));

    // ********** HOUR DATA **********
    // const hours  = todayData.map(currentHour => {
    //   const temp = currentHour.parameters.find(item => item.name === 't').values[0];
    //   const rainfall = currentHour.parameters.find(item => item.name === 'pmedian').values[0];
    //   const windspeed = currentHour.parameters.find(item => item.name === 'ws').values[0];

    //   return {
    //     hour: currentHour.validTime,
    //     temp: roundAndValidate(temp),
    //     rainfall,
    //     windspeed: Math.round(windspeed)
    //   }
    // });

    return {
      date: 'hello'
    };
  });

  return massagedData;
}

export default massageDataOwm;
