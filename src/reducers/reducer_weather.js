import {
  API_ERROR_SMHI,
  API_ERROR_OWM,
  API_ERROR_DS,
  MASSAGE_DATA_SMHI,
  MASSAGE_DATA_OWM,
  MASSAGE_DATA_DS,
  COMBINE_ALL_DATA,
  CLEAR_ALL_DATA,
  SET_DATA_SOURCE_FILTER,
  SourceFilters,
  SourceStatuses
} from '../actions/types';
import massageDataSmhi from '../helpers/massageDataSmhi';
import massageDataOwm from '../helpers/massageDataOwm';
import massageDataDs from '../helpers/massageDataDs';
import combineData from '../helpers/combineData';

const { SHOW_SMHI } = SourceFilters;
const { DONE, ERROR } = SourceStatuses;

export function dataSourceFilter(state = SHOW_SMHI, action) {
  switch (action.type) {
    case SET_DATA_SOURCE_FILTER:
      return action.filter
    default:
      return state
  }
}

const initialState = {
  smhi: {
    data: [],
    status: null
  },
  owm: {
    data: [],
    status: null
  },
  ds: {
    data: [],
    status: null
  },
  combo: {
    data: [],
    status: null
  }
}

export function weatherData(state = initialState, action) {
  switch(action.type) {
    case MASSAGE_DATA_SMHI:
			return {
        ...state,
        smhi: {
          data: massageDataSmhi(action.payload),
          status: DONE
        }
      };
    case MASSAGE_DATA_OWM:
			return {
        ...state,
        owm: {
          data: massageDataOwm(action.payload),
          status: DONE
        }
      };
    case MASSAGE_DATA_DS:
			return {
        ...state,
        ds: {
          data: massageDataDs(action.payload),
          status: DONE
        }
      };
    case COMBINE_ALL_DATA:
			return {
        ...state,
        combo: {
          data: combineData(state.smhi.data, state.owm.data, state.ds.data),
          status: DONE
        }
      };
    case CLEAR_ALL_DATA:
			return {
        ...initialState,
      };
    case API_ERROR_SMHI:
			return {
        ...state,
        smhi: {
          ...state.smhi,
          status: ERROR
        }
      };
    case API_ERROR_OWM:
			return {
        ...state,
        owm: {
          ...state.owm,
          status: ERROR
        }
      };
    case API_ERROR_DS:
			return {
        ...state,
        ds: {
          ...state.ds,
          status: ERROR
        }
      };
		default:
      return state
	}
}
