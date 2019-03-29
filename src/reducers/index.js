import { combineReducers } from 'redux';

import {
  dataSourceFilter,
  weatherData
} from './reducer_weather';

const rootReducer = combineReducers({
  dataSourceFilter,
  weatherData
});

export default rootReducer;
