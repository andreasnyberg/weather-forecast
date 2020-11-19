import React, { Component } from 'react';
import { format } from 'date-fns';
import svLocale from 'date-fns/locale/sv';
import { isAwakeTime } from '../../helpers/misc';
import WeatherRowHour from './WeatherRowHour';
import Rainfall from './WeatherElements/Rainfall';
import Windspeed from './WeatherElements/Windspeed';

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
    let { icon } = this.props.data;
    if (!icon && !isAwakeTime(new Date())) icon = 'night';

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

    if (!tempMax || !tempMin) return <div className="item item--temp" />;

    return (
      <div className="item item--temp">
        <div className="temp--max"><span>{tempMax}&#176;</span></div>
        <div className="temp--min"><span>{tempMin}&#176;</span></div>
      </div>
    );
  }
  
  renderRainfallAndWindspeed() {
    const { rainfall, windspeed } = this.props.data;

    return (
      <div className="item item--rainfall-and-windspeed">
        <Rainfall amount={rainfall} />
        <Windspeed amount={windspeed} />
      </div>
    )
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
          { this.renderRainfallAndWindspeed() }
        </div>

        {this.state.isOpen &&
          this.renderWeatherRowHours()
        }
      </React.Fragment>
    );
  }
};

export default WeatherRow;