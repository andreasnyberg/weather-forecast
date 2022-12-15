import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchDataSmhi,
  fetchDataOwm,
  fetchDataOm,
  clearOldData,
} from '../actions';
import App from '../components/App';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    fetchDataSmhi,
    fetchDataOwm,
    fetchDataOm,
    clearOldData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);