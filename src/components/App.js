import React, { Component } from 'react';
import '../App.css';
import VisibleWeather from '../containers/visible_weather';
import Footer from './footer';

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
