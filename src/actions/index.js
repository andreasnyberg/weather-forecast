import {
  MASSAGE_DATA_SMHI,
  MASSAGE_DATA_OWM,
  MASSAGE_DATA_DS,
  COMBINE_DATA,
  CLEAR_ALL_DATA,
  SET_DATA_SOURCE_FILTER,
  API,
  API_ERROR_SMHI,
  API_ERROR_OWM,
  API_ERROR_DS,
  SourceLabels,
} from './types';

const { smhi, owm, ds } = SourceLabels;

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
    label: smhi
  });
}

export function fetchWeatherOwm(lat, lon) {
	const API_KEY_OWM = '2e9a81cad4d1213fac1d8c5baa8ef2c5';
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY_OWM}&units=metric`;

  return apiAction({
    url,
    onSuccess: massageDataOwm,
    onFailure: () => ({ type: API_ERROR_OWM }),
    label: owm
  });
}

export function fetchWeatherDs(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,windspeed_10m&current_weather=true&windspeed_unit=ms`;

  return apiAction({
    url,
    onSuccess: massageDataDs,
    onFailure: () => ({ type: API_ERROR_DS }),
    label: ds,
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

export function combineData(doneLabels) {
  return {
    type: COMBINE_DATA,
    payload: doneLabels
  };
}

export function clearOldData() {
  return {
    type: CLEAR_ALL_DATA
  }
}