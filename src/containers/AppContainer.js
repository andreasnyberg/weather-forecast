import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchWeatherSmhi,
  fetchWeatherOwm,
  fetchWeatherDs,
  clearOldData,
} from '../actions';
import App from '../components/App';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    fetchWeatherSmhi,
    fetchWeatherOwm,
    fetchWeatherDs,
    clearOldData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);