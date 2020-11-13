import React from 'react';
import { format } from 'date-fns';
import { isAwakeTime } from '../../helpers/misc';
import Rainfall from './WeatherElements/Rainfall';
import Windspeed from './WeatherElements/Windspeed';

const WeatherRow = (props) => {
  const {
    hour,
    icon,
    temp,
    rainfall,
    windspeed
  } = props.data;

  const hourString = format(hour, 'HH:mm');
  const iconClass = isAwakeTime(hour) ? icon : 'night';
  const rowClass = isAwakeTime(hour) ? '' : 'row--night';

  return (
    <div className={`row row--hour ${rowClass}`}>
      <div className="item item--hour">
        <div className="hour">{hourString}</div>
      </div>

      <div className="item item--icon">
        <span className={`icon icon--${iconClass}`} />
      </div>

      <div className="item item--temp">
        {temp}&#176;
      </div>

      <div className="items">
        <div className="item item--rainfall">
          <Rainfall amount={rainfall} />
        </div>

        <div className="item item--windspeed">
          <Windspeed amount={windspeed} />
        </div>
      </div>
    </div>
  );
};

export default WeatherRow;