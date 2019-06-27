import React, { Component } from 'react';
import { SourceFilters } from '../actions/types';
import AjaxLoader from './AjaxLoader';
import WeatherRow from './WeatherRow';

class Weather extends Component {
  componentDidMount() {
    this.getUserCoordinates();
    //this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    const { smhi, owm, ds, combo } = nextProps.weatherData;

    if (!combo.data.length && (smhi.status !== null && owm.status !== null && ds.status !== null)) {
      this.props.combineAllData();
    }
  }

  getUserCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          this.fetchData(lat, lon);
        },
        () => { this.fetchData(); }
      );
    } else {
      // No browser support for geolocation.
      this.fetchData();
    }
  }

  // Stockholm as default.
  fetchData(lat = '59.3293', lon = '18.0686') {
    this.props.fetchWeatherSmhi(lat, lon);
    this.props.fetchWeatherOwm(lat, lon);
    this.props.fetchWeatherDs(lat, lon);
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
      return <AjaxLoader />;
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