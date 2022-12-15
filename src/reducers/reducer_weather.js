import {
  API_START,
  API_ERROR_SMHI,
  API_ERROR_OWM,
  API_ERROR_OM,
  MASSAGE_DATA_SMHI,
  MASSAGE_DATA_OWM,
  MASSAGE_DATA_OM,
  COMBINE_DATA,
  CLEAR_ALL_DATA,
  SET_DATA_SOURCE_FILTER,
  SourceFilters,
  SourceStatuses,
  SourceLabels
} from '../actions/types';
import massageDataSmhi from '../helpers/massageDataSmhi';
import massageDataOwm from '../helpers/massageDataOwm';
import massageDataOm from '../helpers/massageDataOm';
import combineData from '../helpers/combineData';

const { SHOW_OM } = SourceFilters; // TODO ändra till show_all
const { DONE, PENDING, ERROR } = SourceStatuses;

export function dataSourceFilter(state = SHOW_OM, action) {
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
  om: {
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
    case API_START:
      const label = SourceLabels[action.payload];

			return {
        ...state,
        [label]: {
          ...state[label],
          status: PENDING
        },
      };
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
    case MASSAGE_DATA_OM:
			return {
        ...state,
        om: {
          data: massageDataOm(action.payload),
          status: DONE
        }
      };
    case COMBINE_DATA:
      const data = action.payload.map(label => state[label].data);
      
			return {
        ...state,
        combo: {
          data: combineData(data),
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
    case API_ERROR_OM:
			return {
        ...state,
        om: {
          ...state.om,
          status: ERROR
        }
      };
		default:
      return state
	}
}
