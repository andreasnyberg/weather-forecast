import React, { Component } from 'react';
import { SourceFilters } from '../../actions/types';
import LoadingSpinner from '../LoadingSpinner';
import WeatherRow from './WeatherRow';
import { renderRainfallString } from '../../helpers/misc';

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

  renderRightNow(data) {
    const rightNowData = data[0].hours[0];
    const { rainfall, windspeed } = rightNowData;
    const rainfallString = renderRainfallString(rainfall);

    //console.log(rightNowData);
    return (
      <section className="right-now">
        {/* 
        <div className="right-now-top">
          <div className="item item--icon">
            <span className={`icon icon--${icon}`} />
            ikon
          </div>

          <div>degrees.</div>
        </div>*/}
        
        <div className="right-now-bottom">
          <div className="item item--rainfall">{rainfallString}</div>
          <div className="item item--windspeed">
            {windspeed}<span className="smaller">m/s</span>
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
        {/* { this.renderRightNow(data) } */}
        { this.renderRows(data) }
      </main>
    );
  }
}

export default Weather;