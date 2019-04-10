import React, { Component } from 'react';
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
    return (
      <div>
        <div className="row row--day" onClick={this.handleRowClick}>
          <div className="item">
            <p>{this.props.data.day}</p>
          </div>

          <div className="item">
            <p>{this.props.data.tempMin}</p>
          </div>

          <div className="item">
            <p>{this.props.data.tempMax}</p>
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