const currentTemperature = (state) => {
  return state.weather ? `${parseInt(state.weather.temperature.current)}ºC` : null;
};

const feelsLike = (state) => {
  return state.weather ? `${parseInt(state.weather.temperature.feelsLike)}ºC` : null;
};


const weather = (state) => {
  return state.weather;
}



const iconUrl = (state) => {
  if(state.weather && state.weather.icon ==  'clouds' ) return require('../assets/icons/animated/cloudy.svg');
  if(state.weather && state.weather.icon ==  'rain' ) return require('../assets/icons/animated/rain.svg');
  if(state.weather && state.weather.icon ==  'clear' ) return require('../assets/icons/animated/day.svg');
  if(state.weather && state.weather.icon ==  'thunderstorm' ) return require('../assets/icons/animated/thunder.svg');
  if(state.weather && state.weather.icon ==  'drizzle' ) return require('../assets/icons/animated/drizzle.svg');
  if(state.weather && state.weather.icon ==  'snow' ) return require('../assets/icons/animated/snow.svg');
  if(state.weather && state.weather.icon ==  'drizzle' ) return require('../assets/icons/animated/drizzle.svg');
  if(state.weather && state.weather.icon ==  'drizzle' ) return require('../assets/icons/animated/drizzle.svg');

  return require('../assets/icons/animated/weather.svg');
}



export default {
    iconUrl,
    currentTemperature,
    weather,
    feelsLike
};
