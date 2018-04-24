import { combineReducers } from 'redux';

import {
  dataSourceFilter,
  weatherSmhi,
  weatherOwm
} from './reducer_weather';

const rootReducer = combineReducers({
  dataSourceFilter,
  weatherSmhi,
  weatherOwm
});

export default rootReducer;
