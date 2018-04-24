import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeatherSmhi, fetchWeatherOwm } from '../actions/actions';
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
    this.props.fetchWeatherOwm();
  }

  render() {    
    return (
      <div>
        
      </div>
    );
  }
}

// TODO mapStateToProps ska vi nog inte ens ha i denna fil.
function mapStateToProps(state) {
  if (state.weatherOwm[0]) {
    console.log(state.weatherOwm[0].list);
  }

  if (state.weatherSmhi[0]) {
    console.log(state.weatherSmhi[0].timeSeries);
  }
  
  return state;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeatherSmhi, fetchWeatherOwm }, dispatch);
}
//export default connect(null, mapDispatchToProps)(Weather);
export default connect(mapStateToProps, mapDispatchToProps)(Weather);