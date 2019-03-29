import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchWeatherSmhi,
  fetchWeatherOwm,
  combineAllData
} from '../actions';

import Weather from '../components/weather';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    fetchWeatherSmhi,
    fetchWeatherOwm,
    combineAllData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);