import React from 'react';
import WeatherRowHour from './WeatherRowHour';

const WeatherRow = (props) => {
  const hours = props.data.hours.map((item, i) => <WeatherRowHour data={item} key={i} />);

  return (
    <div>
      <div className="row row--day">
        <div className="item">
          <p>{props.data.day}</p>
        </div>

        <div className="item">
          <p>{props.data.tempLowest}</p>
        </div>

        <div className="item">
          <p>{props.data.tempHighest}</p>
        </div>
      </div>

      { hours }
    </div>
  );
};

export default WeatherRow;