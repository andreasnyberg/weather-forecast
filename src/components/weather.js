import React, { Component } from 'react';
import { DataSourceFilters } from '../actions/types';
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

  filterData() {
    const { SHOW_ALL, SHOW_SMHI, SHOW_OWM } = DataSourceFilters;
    const { dataSourceFilter, weatherData } = this.props;

    switch (dataSourceFilter) {
      case SHOW_ALL:
        return weatherData.combo;

      case SHOW_SMHI:
        return weatherData.smhi;

      case SHOW_OWM:
        return weatherData.owm;

      default:
        throw new Error('Unknown filter: ' + dataSourceFilter);
    }
  }

  render() {
    const data = this.filterData();
    const rows = data.map((item, i) => <WeatherRow data={item} key={i} />);

    return (
      <div>
        { rows }
      </div>
    );
  }
}

export default Weather;