const currentTemperature = (state) => {
  return state.currentWeather ? `${parseInt(state.currentWeather.temperature.current)}ºC` : null;
};
const currentWeather = (state) => {
  return state.currentWeather;
};

export default {
    currentTemperature,
    currentWeather,
};
