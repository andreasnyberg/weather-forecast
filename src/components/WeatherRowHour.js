import React from 'react';
import { format } from 'date-fns';

const WeatherRow = (props) => {
  const hour = format(props.data.hour, 'HH:mm');
  
  return (
    <div className="row row--hour">
      <div className="item">
        <p>{hour}</p>
      </div>

      <div className="item">
        <p>{props.data.temp}</p>
      </div>
    </div>
  );
};

export default WeatherRow;