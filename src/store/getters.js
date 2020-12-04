const temperature = (state) => {
  return state.temperature ? `${parseInt(state.temperature)}ºC` : "carregando";
};



const iconUrl = (state) => {
  if(state.icon ==  'clouds' ) return require('../assets/icons/animated/cloudy.svg');
  if(state.icon ==  'rain' ) return require('../assets/icons/animated/rain.svg');
  if(state.icon ==  'clear' ) return require('../assets/icons/animated/day.svg');
  if(state.icon ==  'thunderstorm' ) return require('../assets/icons/animated/thunder.svg');
  if(state.icon ==  'drizzle' ) return require('../assets/icons/animated/drizzle.svg');
  if(state.icon ==  'snow' ) return require('../assets/icons/animated/snow.svg');
  if(state.icon ==  'drizzle' ) return require('../assets/icons/animated/drizzle.svg');
  if(state.icon ==  'drizzle' ) return require('../assets/icons/animated/drizzle.svg');

   return require('../assets/icons/animated/weather.svg');
}

export default {
    temperature,
    iconUrl,
};
