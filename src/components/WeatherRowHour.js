import React from 'react';

const WeatherRow = (props) => {
  console.log('rowHour props: ', props);


  return (
    <div className="row row--hour">
      <div className="item">
        <p>{props.data.hour}</p>
      </div>

      <div className="item">
        <p>{props.data.temp}</p>
      </div>
    </div>
  );
};

export default WeatherRow;