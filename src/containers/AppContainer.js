import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchWeatherSmhi,
  fetchWeatherOwm,
  fetchWeatherDs,
  clearAllData,
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
    clearAllData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);