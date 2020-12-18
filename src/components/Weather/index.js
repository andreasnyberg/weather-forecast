import React, { Component } from 'react';
import { SourceFilters, SourceStatuses } from '../../actions/types';
import LoadingSpinner from '../LoadingSpinner';
import WeatherRow from './WeatherRow';
import Rainfall from './WeatherElements/Rainfall';
import Windspeed from './WeatherElements/Windspeed';

class Weather extends Component {  
  componentWillReceiveProps(nextProps) {
    const { smhi, owm, ds, combo } = nextProps.weatherData;

    if (!combo.data.length && (
        smhi.status === SourceStatuses.DONE &&
        owm.status === SourceStatuses.DONE &&
        ds.status === SourceStatuses.DONE)
      ) {
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

  renderRightNow(data) {
    // If current time is near 23:59, we might not have any hour data.
    const firstDayWHourData = data.find(day => day.hasOwnProperty('hours'));
    const rightNowData = firstDayWHourData.hours[0];
    const { icon, temp, rainfall, windspeed } = rightNowData;

    return (
      <section className="right-now">
        <div className="rn-top">
          <div className="rn-item--icon">
            <div className={`icon icon--${icon}`} />
          </div>

          <div className="rn-item--temp">
            <span className="rn-item--temp-number">{temp}</span>&#176;
          </div>
        </div>
        
        <div className="rn-bottom">
          <div className="rn-item--rainfall">
            <Rainfall amount={rainfall} />
          </div>

          <div>
            <Windspeed amount={windspeed} />
          </div>
        </div>
      </section>
    );
  }
  
  renderRows(data) {
    return (
      <section className="rows">
        { data.map((item, i) => <WeatherRow data={item} key={i} />) }
      </section>
    );
  }

  render() {
    const data = this.filterData();

    if (!data.length) {
      return <LoadingSpinner />;
    }

    return (
      <main className="weather-container">
        { this.renderRightNow(data) }
        { this.renderRows(data) }
      </main>
    );
  }
}

export default Weather;