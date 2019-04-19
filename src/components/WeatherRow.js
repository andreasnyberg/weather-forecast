import React, { Component } from 'react';
import { format } from 'date-fns';
import svLocale from 'date-fns/locale/sv';
import WeatherRowHour from './WeatherRowHour';

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

  renderWeatherRowHours() {
    return this.props.data.hours.map((item, i) => <WeatherRowHour data={item} key={i} />);
  }

  render() {    
    const {
      date,
      tempMin,
      tempMax,
      rainfall,
      windspeed
    } = this.props.data;
    
    const dayString = format(date, 'ddd', { locale: svLocale });
    const dateString = format(date, 'D MMM', { locale: svLocale });

    return (
      <div>
        <div className="row row--day" onClick={this.handleRowClick}>
          <div className="item">
            {dayString} <br /> 
            {dateString}
          </div>

          <div className="item">
            <p>{tempMin}</p>
          </div>

          <div className="item">
            <p>{tempMax}</p>
          </div>
          
          <div className="item">
            <p>{rainfall}</p>
          </div>
          
          <div className="item">
            <p>{windspeed}</p>
          </div>
        </div>

        {this.state.isOpen &&
          this.renderWeatherRowHours()
        }
      </div>
    );
  }
};

export default WeatherRow;