import React, { Component } from 'react';
import { SourceFilters } from '../actions/types';
import LoadingSpinner from './LoadingSpinner';
import WeatherRow from './WeatherRow';

class Weather extends Component {
  componentWillReceiveProps(nextProps) {
    const { smhi, owm, ds, combo } = nextProps.weatherData;

    if (!combo.data.length && (smhi.status !== null && owm.status !== null && ds.status !== null)) {
      this.props.combineAllData();
    }
  }

  filterData() {
    const { SHOW_ALL, SHOW_SMHI, SHOW_OWM, SHOW_DS } = SourceFilters;
    const { dataSourceFilter } = this.props;
    const { smhi, owm, ds, combo } = this.props.weatherData;

    switch (dataSourceFilter) {
      case SHOW_ALL:
        return combo.data;

      case SHOW_SMHI:
        return smhi.data;

      case SHOW_OWM:
        return owm.data;

      case SHOW_DS:
        return ds.data;

      default:
        throw new Error('Unknown filter: ' + dataSourceFilter);
    }
  }

  render() {
    const dataFiltered = this.filterData();

    if (!dataFiltered.length) {
      return <LoadingSpinner />;
    }

    return (
      <main className="weather-container">
        { dataFiltered.map((item, i) => <WeatherRow data={item} key={i} />) }
      </main>
    );
  }
}

export default Weather;