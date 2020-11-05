import React, { Component } from 'react';
import { format } from 'date-fns';
import svLocale from 'date-fns/locale/sv';
import WeatherRowHour from './WeatherRowHour';
import { renderRainfallString } from '../helpers/misc';

class WeatherRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.handleRowClick = this.handleRowClick.bind(this);
  }

  handleRowClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  renderDate() {
    const { date } = this.props.data;
    const dayString = format(date, 'ddd', { locale: svLocale });
    const dateString = format(date, 'D MMM', { locale: svLocale });

    return (
      <div className="item item--day">
        <div className="weekday">{dayString}</div>
        <div className="date">{dateString}</div>
      </div>
    );
  }

  renderIcon() {
    const { icon } = this.props.data;

    return (
      <div className="item item--icon">
        <span className={`icon icon--${icon}`} />
      </div>
    );
  }

  renderTemperature() {
    const {
      tempMax,
      tempMin
    } = this.props.data;

    if (!tempMax || !tempMin) {
      return <div className="item item--temp">-</div>;
    }

    return (
      <div className="item item--temp">
        <div className="temp--max"><span>{tempMax}&#176;</span></div>
        <div className="temp--min"><span>{tempMin}&#176;</span></div>
      </div>
    );
  }

  renderRainfall() {
    if (this.props.data.rainfall == null) { return <div className="item">-</div>; }

    const { rainfall } = this.props.data;
    const rainfallString = renderRainfallString(rainfall);

    return (
      <div className="item item--rainfall">{rainfallString}</div>
    );
  }

  renderWindspeed() {
    const { windspeed } = this.props.data;

    if (windspeed == null) { return <div className="item item--windspeed">-</div>; }

    return (
      <div className="item item--windspeed">
        {windspeed}<span className="smaller">m/s</span>
      </div>
    );
  }

  renderWeatherRowHours() {
    const { hours } = this.props.data;
    if (!hours) return;

    return hours.map((item, i) => <WeatherRowHour data={item} key={i} />);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row row--day" onClick={this.handleRowClick}>
          { this.renderDate() }
          { this.renderIcon() }
          { this.renderTemperature() }
          <div className="items">
            { this.renderRainfall() }
            { this.renderWindspeed() }
          </div>
        </div>

        {this.state.isOpen &&
          this.renderWeatherRowHours()
        }
      </React.Fragment>
    );
  }
};

export default WeatherRow;