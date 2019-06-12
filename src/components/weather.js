import React, { Component } from 'react';
import { DataSourceFilters } from '../actions/types';
import WeatherRow from './WeatherRow';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchWeatherSmhi();
    this.props.fetchWeatherOwm();
  }

  componentWillReceiveProps(nextProps) {
    const { smhi, owm, combo } = nextProps.weatherData;

    if (!combo.length && (smhi.length && owm.length)) {
      this.props.combineAllData();
    }
  }

  filterData() {
    const { SHOW_ALL, SHOW_SMHI, SHOW_OWM } = DataSourceFilters;
    const { dataSourceFilter } = this.props;
    const { smhi, owm, combo } = this.props.weatherData;

    switch (dataSourceFilter) {
      case SHOW_ALL:
        return combo;

      case SHOW_SMHI:
        return smhi;

      case SHOW_OWM:
        return owm;

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
      <div>
        <div className="row row--day">
          <div className="item item--day">Dag</div>
          <div className="item item--icon">Väder</div>
          <div className="item item--temp">Temperatur</div>
          <div className="item item--rainfall">Nederbörd</div>
          <div className="item item--windspeed">Vind</div>
        </div>

        { rows }
      </div>
    );
  }
}

export default Weather;