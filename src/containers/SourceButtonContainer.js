import { connect } from 'react-redux';
import { setDataSourceFilter } from '../actions';
import SourceButton from '../components/SourceButton';

const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.filter === state.dataSourceFilter,
  status: state.weatherData[ownProps.sourceName].status
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setDataSourceFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceButton);