import axios from 'axios';

// action types
export const FETCH_WEATHER_SMHI = 'FETCH_WEATHER_SMHI';
export const FETCH_WEATHER_OWM = 'FETCH_WEATHER_OWM';
export const SET_DATA_SOURCE_FILTER = 'SET_DATA_SOURCE_FILTER';

// other constants
export const DataSourceFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SMHI: 'SHOW_SMHI',
  SHOW_OWM: 'SHOW_OWM'
}

const lat = '59.3293'; // stockholm
const lon = '18.0686'; // stockholm

// action creators
export function setDataSourceFilter(filter) {
  return { type: SET_DATA_SOURCE_FILTER, filter }
}

export function fetchWeatherSmhi() {
	const url = `http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
  const request = axios.get(url);
  
	return {
		type: FETCH_WEATHER_SMHI,
		payload: request 
	}
}

export function fetchWeatherOwm() {
	const API_KEY_OWM = '2e9a81cad4d1213fac1d8c5baa8ef2c5';
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY_OWM}`;
  const request = axios.get(url);
  
	return {
		type: FETCH_WEATHER_OWM,
		payload: request 
	}
}