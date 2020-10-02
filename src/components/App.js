import React, { Component } from 'react';
import '../App.css';
import VisibleWeather from '../containers/WeatherContainer';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VisibleWeather />
        <Footer />
      </div>
    );
  }
}

export default App;
