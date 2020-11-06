import {
  FETCH_DATA_SMHI,
  FETCH_DATA_OWM,
  FETCH_DATA_DS,
  MASSAGE_DATA_SMHI,
  MASSAGE_DATA_OWM,
  MASSAGE_DATA_DS,
  COMBINE_ALL_DATA,
  CLEAR_ALL_DATA,
  SET_DATA_SOURCE_FILTER,
  API,
  API_ERROR_SMHI,
  API_ERROR_OWM,
  API_ERROR_DS,
} from './types';

// action creators
export function setDataSourceFilter(filter) {
  return {
    type: SET_DATA_SOURCE_FILTER,
    filter
  }
}

export function fetchWeatherSmhi(lt, ln) {
  const lat = parseFloat(lt).toFixed(4);
  const lon = parseFloat(ln).toFixed(4);

  return apiAction({
    url: `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`,
    onSuccess: massageDataSmhi,
    onFailure: () => ({ type: API_ERROR_SMHI }),
    label: FETCH_DATA_SMHI
  });
}

export function fetchWeatherOwm(lat, lon) {
	const API_KEY_OWM = '2e9a81cad4d1213fac1d8c5baa8ef2c5';
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY_OWM}&units=metric`;

  return apiAction({
    url,
    onSuccess: massageDataOwm,
    onFailure: () => ({ type: API_ERROR_OWM }),
    label: FETCH_DATA_OWM
  });
}

export function fetchWeatherDs(lat, lon) {
  const API_KEY_DS = 'feb9e52560791081e7761140c0d232c6';
  const CORSAnywhere = 'https://cors-anywhere.herokuapp.com/';
  const url = `${CORSAnywhere}https://api.darksky.net/forecast/${API_KEY_DS}/${lat},${lon}?units=si`;

  return apiAction({
    url,
    onSuccess: massageDataDs,
    onFailure: () => ({ type: API_ERROR_DS }),
    label: FETCH_DATA_DS,
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

function massageDataDs(data) {
  return {
    type: MASSAGE_DATA_DS,
    payload: data,
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

export function clearAllData() {
  return {
    type: CLEAR_ALL_DATA
  }
}