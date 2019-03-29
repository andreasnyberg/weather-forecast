// action types
export const FETCH_DATA_SMHI = 'FETCH_DATA_SMHI';
export const FETCH_DATA_OWM = 'FETCH_DATA_OWM';
export const MASSAGE_DATA_SMHI = 'MASSAGE_DATA_SMHI';
export const MASSAGE_DATA_OWM = 'MASSAGE_DATA_OWM';
export const COMBINE_ALL_DATA = 'COMBINE_ALL_DATA';
export const SET_DATA_SOURCE_FILTER = 'SET_DATA_SOURCE_FILTER';

export const API = 'API';
export const API_START = 'API_START';
export const API_END = 'API_END';
export const API_ERROR = 'API_ERROR';
export const API_ERROR_SMHI = 'API_ERROR_SMHI';
export const API_ERROR_OWM = 'API_ERROR_OWM';

// other constants
export const DataSourceFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SMHI: 'SHOW_SMHI',
  SHOW_OWM: 'SHOW_OWM'
}