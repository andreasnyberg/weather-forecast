import {
  // FETCH_DATA_SMHI,
  // FETCH_DATA_OWM,
  MASSAGE_DATA_SMHI,
  MASSAGE_DATA_OWM,
  COMBINE_ALL_DATA,
  SET_DATA_SOURCE_FILTER,
  DataSourceFilters
} from '../actions/types';
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

const initTestStateSmhi = [
  {
    day: "måndag",
    tempLowest: 1,
    hours: [
      {
        hour: "00:00",
        temp: 4,
      },
      {
        hour: "01:00",
        temp: 22,
      }
    ]
  },
  {
    day: "tisdag",
    tempLowest: 10,
    hours: [
      {
        hour: "00:00",
        temp: 4,
      },
      {
        hour: "01:00",
        temp: 22,
      }
    ]
  }
]

const initTestStateOwm = [
  {
    day: "måndag",
    tempLowest: 100,
    hours: [
      {
        hour: "00:00",
        temp: 102,
      },
      {
        hour: "01:00",
        temp: 111,
      }
    ]
  },
  {
    day: "tisdag",
    tempLowest: 5,
    hours: [
      {
        hour: "00:00",
        temp: 103,
      },
      {
        hour: "01:00",
        temp: 100,
      }
    ]
  }
]

const initialState = {
  weatherSmhi: initTestStateSmhi,
  weatherOwm: initTestStateOwm,
  weatherCombo: []
}

export function weatherData(state = initialState, action) {
  switch(action.type) {
    case MASSAGE_DATA_SMHI:
			return {
        ...state,
        weatherSmhi: action.payload.data
      };
    case MASSAGE_DATA_OWM:
			return {
        ...state,
        weatherOwm: action.payload.data
      };
    case COMBINE_ALL_DATA:
			return {
        ...state,
        weatherCombo: combineData(state.weatherSmhi, state.weatherOwm)
      };
		default:
      return state
	}
}
