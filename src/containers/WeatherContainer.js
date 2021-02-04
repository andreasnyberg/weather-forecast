import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { combineData } from '../actions';
import Weather from '../components/Weather';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    combineData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);