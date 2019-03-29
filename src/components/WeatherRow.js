import React from 'react';

const WeatherRow = (props) => {
  console.log('row props: ', props);


  return (
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
  );
};

export default WeatherRow;