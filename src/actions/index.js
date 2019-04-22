import {
  FETCH_DATA_SMHI,
  FETCH_DATA_OWM,
  MASSAGE_DATA_SMHI,
  MASSAGE_DATA_OWM,
  COMBINE_ALL_DATA,
  SET_DATA_SOURCE_FILTER,
  API,
  API_ERROR_SMHI,
  API_ERROR_OWM
} from './types';

const lat = '59.3293'; // stockholm
const lon = '18.0686'; // stockholm

// action creators
export function setDataSourceFilter(filter) {
  return {
    type: SET_DATA_SOURCE_FILTER,
    filter
  }
}

export function fetchWeatherSmhi() {
  return apiAction({
    url: `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`,
    onSuccess: massageDataSmhi,
    onFailure: () => ({ type: API_ERROR_SMHI }),
    label: FETCH_DATA_SMHI
  });
}

export function fetchWeatherOwm() {  
	const API_KEY_OWM = '2e9a81cad4d1213fac1d8c5baa8ef2c5';
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY_OWM}`;

  return apiAction({
    url,
    onSuccess: massageDataOwm,
    onFailure: () => ({ type: API_ERROR_OWM }),
    label: FETCH_DATA_OWM
  });
}

function massageDataSmhi(data) {
  return {
    type: MASSAGE_DATA_SMHI,
    payload: data
  };
}

function massageDataOwm(data) {
  return {
    type: MASSAGE_DATA_OWM,
    payload: data
  };
}

function apiAction({
  url = '',
  method = 'GET',
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}

export function combineAllData() {
  return {
    type: COMBINE_ALL_DATA
  };
}
