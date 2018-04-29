import { connect } from 'react-redux';
import { setDataSourceFilter } from '../actions';
import SourceButton from '../components/source_button';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.dataSourceFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setDataSourceFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceButton);