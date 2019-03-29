import React, { Component } from 'react';
import WeatherRow from './WeatherRow';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    //this.props.fetchWeatherSmhi();
    //this.props.fetchWeatherOwm();

    // TODO execute this when all the other sources are succeded & massaged.
    this.props.combineAllData();
  }

  render() {
    return (
      <div>
        {/* { this.testData.map(item => <WeatherRow data={item} />) } */}

        hello world
      </div>
    );
  }
}

export default Weather;