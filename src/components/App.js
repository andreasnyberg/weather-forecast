import React, { Component } from 'react';
import '../App.css';
import WeatherContainer from '../containers/WeatherContainer';
import Footer from './Footer';
import UpdateButtons from './UpdateButtons';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.handleGetLocation = this.handleGetLocation.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const {
      fetchWeatherSmhi,
      fetchWeatherOwm,
      fetchWeatherDs,
      clearOldData
    } = this.props;
    const lat = localStorage.getItem('lat') || '59.3293'; // Stockholm as default.
    const lon = localStorage.getItem('lon') || '18.0686'; // Stockholm as default.
    
    clearOldData();
    fetchWeatherSmhi(lat, lon);
    fetchWeatherOwm(lat, lon);
    fetchWeatherDs(lat, lon);
  }

  handleGetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude.toString();
          const lon = position.coords.longitude.toString();

          localStorage.setItem('lat', lat);
          localStorage.setItem('lon', lon);

          this.fetchData();
        },
        () => { this.fetchData(); }
      );
    } else {
      // No browser support for geolocation.
      this.fetchData();
    }
  }

  handleRefresh() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <WeatherContainer />

        <UpdateButtons 
          onGetLocation={this.handleGetLocation}
          onRefresh={this.handleRefresh}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
