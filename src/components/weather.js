import React, { Component } from 'react';
import { DataSourceFilters } from '../actions/types';
import WeatherRow from './WeatherRow';

class Weather extends Component {
  componentDidMount() {
    this.props.fetchWeatherSmhi();
    this.props.fetchWeatherOwm();
    this.props.fetchWeatherDs();
  }

  componentWillReceiveProps(nextProps) {
    const { smhi, owm, ds, combo } = nextProps.weatherData;

    if (!combo.length && (smhi.length && owm.length && ds.length)) {
      this.props.combineAllData();
    }
  }

  filterData() {
    const { SHOW_ALL, SHOW_SMHI, SHOW_OWM, SHOW_DS } = DataSourceFilters;
    const { dataSourceFilter } = this.props;
    const { smhi, owm, ds, combo } = this.props.weatherData;

    switch (dataSourceFilter) {
      case SHOW_ALL:
        return combo;

      case SHOW_SMHI:
        return smhi;

      case SHOW_OWM:
        return owm;

      case SHOW_DS:
        return ds;

      default:
        throw new Error('Unknown filter: ' + dataSourceFilter);
    }
  }

  render() {
    const dataFiltered = this.filterData();

    if (!dataFiltered) {
      return (
        <div>Loading...</div>
      );
    }

    const rows = dataFiltered.map((item, i) => <WeatherRow data={item} key={i} />);

    return (
      <main>
        <div className="row row--labels">
          <div className="item item--day"></div>
          <div className="item item--icon">Väder</div>
          <div className="item item--temp">Temperatur</div>
          <div className="item item--rainfall">Nederbörd</div>
          <div className="item item--windspeed">Vind</div>
        </div>

        { rows }
      </main>
    );
  }
}

export default Weather;