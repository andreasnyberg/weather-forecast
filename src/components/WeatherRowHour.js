import React from 'react';
import { format } from 'date-fns';

const WeatherRow = (props) => {
  const {
    hour,
    temp,
    rainfall,
    windspeed
  } = props.data;

  const hourString = format(hour, 'HH:mm');

  return (
    <div className="row row--hour">
      <div className="item item--hour">
        <p>{hourString}</p>
      </div>

      <div className="item item--icon"></div>

      <div className="item item--temp">
        <p>{temp}</p>
      </div>

      <div className="item item--rainfall">
        <p>{rainfall}</p>
      </div>

      <div className="item item--windspeed">
        <p>{windspeed}</p>
      </div>
    </div>
  );
};

export default WeatherRow;