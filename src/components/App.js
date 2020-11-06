import React, { Component } from 'react';
import '../App.css';
import WeatherContainer from '../containers/WeatherContainer';
import Footer from './Footer';
import LocationButtonContainer from '../containers/LocationButtonContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherContainer />
        <LocationButtonContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
