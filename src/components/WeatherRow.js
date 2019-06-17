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
        <div className="temp--max">{tempMax}&#176;</div>
        <div className="temp--min">{tempMin}&#176;</div>
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
    return this.props.data.hours.map((item, i) => <WeatherRowHour data={item} key={i} />);
  }

  render() {
    const { date } = this.props.data;
    const dayString = format(date, 'ddd', { locale: svLocale });
    const dateString = format(date, 'D MMM', { locale: svLocale });

    return (
      <React.Fragment>
        <div className="row row--day" onClick={this.handleRowClick}>
          <div className="item item--day">
            <div className="weekday">{dayString}</div>
            <div className="date">{dateString}</div>
          </div>

          <div className="item item--icon"></div>

          { this.renderTemperature() }
          { this.renderRainfall() }
          { this.renderWindspeed() }
        </div>

        {this.state.isOpen &&
          this.renderWeatherRowHours()
        }
      </React.Fragment>
    );
  }
};

export default WeatherRow;