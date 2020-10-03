import React from 'react';
import { format } from 'date-fns';
import { renderRainfallString, isAwakeTime } from '../helpers/misc';

const WeatherRow = (props) => {
  const {
    hour,
    icon,
    temp,
    rainfall,
    windspeed
  } = props.data;

  const hourString = format(hour, 'HH:mm');
  const rainfallString = renderRainfallString(rainfall);
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

      <div className="item item--rainfall">
        <span>
          {rainfallString}
        </span>
      </div>

      <div className="item item--windspeed">
        {windspeed} <span className="smaller">m/s</span>
      </div>
    </div>
  );
};

export default WeatherRow;