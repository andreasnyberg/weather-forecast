import React, { Component } from 'react';
import { format } from 'date-fns'

//import WeatherList from './weather_list';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      responseDataOWM: null,
      responseDataSMHI: null
    };
  }

  

  // todo: bästa stället att skicka iväg requests?
  componentDidMount() {
    this.props.fetchWeatherSmhi();
    // this.props.fetchWeatherOwm();
  }

  render() {    
    if (this.props.weatherSmhi.length) {
      
      const data = this.props.weatherSmhi[0].timeSeries; 
      const weekdays = data.map(d => {
        console.log(format(new Date(d.validTime), 'dddd'));

        //return dateFns.format(new Date(d.validTime), 'dddd')
        
      });

    }
    
    return (
      <div>
        weather
      </div>
    );
  }
}

export default Weather;