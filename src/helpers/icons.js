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

// https://darksky.net/dev/docs
export const iconsDs = {
  'clear-day': 'clear-day',
  'clear-night': 'night',
  'rain': 'rain',
  'snow': 'snow',
  'sleet': 'sleet',
  'wind': 'cloudy',
  'fog': 'fog',
  'cloudy': 'cloudy',
  'partly-cloudy-day': 'partly-cloudy-day',
  'partly-cloudy-night': 'night'
};