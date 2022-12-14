import { isSameDay, isAfter } from 'date-fns';
import { iconsDs } from './icons';
import { roundAndValidate, isObjectEmpty, sevenDaysFromToday } from './misc';

const massageDataDs = (data) => {
  console.log(data)
  const massagedData = sevenDaysFromToday.map(currentDate => {

    return {
      date: currentDate,
      icon: "snow",
      tempMin: 0,
      tempMax: 0,
      rainfall: 0,
      windspeed: 0,
      hours: {},
    };
  });

  return massagedData;
}



export default massageDataDs;
