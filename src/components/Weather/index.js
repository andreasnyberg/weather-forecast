import React, { Component } from 'react';
import { SourceFilters, SourceStatuses } from '../../actions/types';
import { isDone } from '../../helpers/misc';
import LoadingSpinner from '../LoadingSpinner';
import WeatherRow from './WeatherRow';
import Rainfall from './WeatherElements/Rainfall';
import Windspeed from './WeatherElements/Windspeed';

class Weather extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      timerIsActive: false,
    };

    this.handleTimerStop = this.handleTimerStop.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { smhi, owm, ds, combo } = nextProps.weatherData;

    if (!isDone(combo)) {

      if (!this.state.timerIsActive) {
        this.handleTimerStart();
      }

      if ([smhi, owm, ds].every(isDone)) {
        //this.props.combineData(['smhi', 'owm', 'ds']);
      }
    }    
  }

  handleTimerStart() {
    this.setState({ timerIsActive: true });
    setTimeout(this.handleTimerStop, 1000);
  }

  handleTimerStop() {
    this.setState({ timerIsActive: false });
    this.combineDoneData();
  }

  combineDoneData() {
    const { weatherData } = this.props;
    const doneSourcesLabels = Object.keys(weatherData).filter(key => weatherData[key].status === SourceStatuses.DONE);

    if (!isDone(weatherData.combo) && doneSourcesLabels.length > 1) {
      //this.props.combineData(doneSourcesLabels);
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
    console.log(rightNowData);
    if (!rightNowData) {
      return <div>no rightNowData</div>
    }
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