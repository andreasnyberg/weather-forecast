import {
  MASSAGE_DATA_SMHI,
  MASSAGE_DATA_OWM,
  MASSAGE_DATA_DS,
  COMBINE_ALL_DATA,
  SET_DATA_SOURCE_FILTER,
  DataSourceFilters
} from '../actions/types';
import massageDataSmhi from '../helpers/massageDataSmhi';
import massageDataOwm from '../helpers/massageDataOwm';
import massageDataDs from '../helpers/massageDataDs';
import combineData from '../helpers/combineData';

const { SHOW_ALL } = DataSourceFilters;

export function dataSourceFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_DATA_SOURCE_FILTER:
      return action.filter
    default:
      return state
  }
}

const initialState = {
  smhi: [],
  owm: [],
  ds: [],
  combo: []
}

export function weatherData(state = initialState, action) {
  switch(action.type) {
    case MASSAGE_DATA_SMHI:
			return {
        ...state,
        smhi: massageDataSmhi(action.payload)
      };
    case MASSAGE_DATA_OWM:
			return {
        ...state,
        owm: massageDataOwm(action.payload)
      };
    case MASSAGE_DATA_DS:
			return {
        ...state,
        ds: massageDataDs(action.payload)
      };
    case COMBINE_ALL_DATA:
			return {
        ...state,
        combo: combineData(state.smhi, state.owm, state.ds)
      };
		default:
      return state
	}
}
