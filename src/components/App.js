import React, { Component } from 'react';
import '../App.css';
import Weather from './weather';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
        <Footer />
      </div>
    );
  }
}

export default App;
