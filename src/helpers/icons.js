export const icons = [
  'clear-day',
  'partly-cloudy-day',
  'cloudy',
  'overcast',
  'rain',
  'sleet',
  'snow',
  'fog',
  'thunder',
  'night'
];

// https://opendata.smhi.se/apidocs/metfcst/parameters.html#parameter-wsymb
export const iconsSmhi = [
  '',
  'clear-day',
  'clear-day',
  'partly-cloudy-day',
  'partly-cloudy-day',
  'cloudy', // 5 (smhi value - not array index)
  'cloudy',
  'fog',
  'rain',
  'rain',
  'rain', // 10
  'thunder',
  'sleet',
  'sleet',
  'sleet', // 14
  'snow',
  'snow',
  'snow',
  'rain', // 18
  'rain',
  'rain',
  'thunder',
  'sleet', // 22
  'sleet',
  'sleet',
  'snow',
  'snow',
  'snow'
];

// https://openweathermap.org/weather-conditions
export const iconsOwm = {
  '01d': 'clear-day',
  '02d': 'partly-cloudy-day',
  '03d': 'cloudy',
  '04d': 'overcast',
  '09d': 'rain',
  '10d': 'rain',
  '11d': 'thunder',
  '13d': 'snow',
  '50d': 'fog',
  '01n': 'night',
  '02n': 'night',
  '03n': 'night',
  '04n': 'night',
  '09n': 'night',
  '10n': 'night',
  '11n': 'night',
  '13n': 'night',
  '50n': 'night'
};

// https://open-meteo.com/en/docs#weather-variable-documentation
export const iconsOM = {
  0: 'clear-day',
  1: 'partly-cloudy-day',
  2: 'partly-cloudy-day',
  3: 'partly-cloudy-day',
  45: 'fog',
  48: 'fog',
  51: 'overcast',
  53: 'overcast',
  55: 'overcast',
  56: 'sleet',
  57: 'sleet',
  61: 'rain',
  63: 'rain',
  65: 'rain',
  66: 'sleet',
  67: 'sleet',
  71: 'snow',
  73: 'snow',
  75: 'snow',
  77: 'snow',
  80: 'rain',
  81: 'rain',
  82: 'rain',
  85: 'snow',
  86: 'snow',
  95: 'thunder',
  96: 'thunder',
  99: 'thunder',
};
