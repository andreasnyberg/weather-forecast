import { connect } from 'react-redux';
import { getLocation } from '../actions';
import LocationButton from '../components/LocationButton';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(getLocation())
});

console.log(LocationButton);

export default connect(null, mapDispatchToProps)(LocationButton);