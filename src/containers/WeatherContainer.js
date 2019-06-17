import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchWeatherSmhi,
  fetchWeatherOwm,
  fetchWeatherDs,
  combineAllData
} from '../actions';

import Weather from '../components/Weather';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    fetchWeatherSmhi,
    fetchWeatherOwm,
    fetchWeatherDs,
    combineAllData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);