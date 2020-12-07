const currentTemperature = (state) => {
  return state.weather ? `${parseInt(state.weather.temperature.current)}ºC` : null;
};



const weather = (state) => {
  return state.weather;
}

export default {
    currentTemperature,
    weather,
};
