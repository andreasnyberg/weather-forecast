import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { combineAllData } from '../actions';
import Weather from '../components/Weather';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    combineAllData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);