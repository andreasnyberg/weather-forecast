
import {
  FETCH_WEATHER_SMHI,
  FETCH_WEATHER_OWM,
  SET_DATA_SOURCE_FILTER,
  DataSourceFilters
} from '../actions';

const { SHOW_ALL } = DataSourceFilters;

export function dataSourceFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_DATA_SOURCE_FILTER:
      return action.filter
    default:
      return state
  }
}

export function weatherSmhi(state = [], action) {		
  switch(action.type) {
		case FETCH_WEATHER_SMHI:
			return [ action.payload.data, ...state ];
		default:
      return state
	}
}

export function weatherOwm(state = [], action) {		
  switch(action.type) {
		case FETCH_WEATHER_OWM:
			return [ action.payload.data, ...state ];
		default:
      return state
	}
}