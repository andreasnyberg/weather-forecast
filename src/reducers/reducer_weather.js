import {
  // FETCH_DATA_SMHI,
  // FETCH_DATA_OWM,
  MASSAGE_DATA_SMHI,
  MASSAGE_DATA_OWM,
  COMBINE_ALL_DATA,
  SET_DATA_SOURCE_FILTER,
  DataSourceFilters
} from '../actions/types';
import massageDataSmhi from '../helpers/massageDataSmhi';
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
    tempHighest: 9,
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
    tempHighest: 15,
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
    tempHighest: 109,
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
    tempLowest: 102,
    tempHighest: 106,
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
  smhi: [],
  owm: initTestStateOwm,
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
        owm: action.payload.data
      };
    case COMBINE_ALL_DATA:
			return {
        ...state,
        combo: combineData(state.smhi, state.owm)
      };
		default:
      return state
	}
}
