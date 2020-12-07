const currentTemperature = (state) => {
  return state.currentWeather ? `${parseInt(state.currentWeather.temperature.current)}ºC` : null;
};
const currentWeather = (state) => {
  return state.currentWeather;
};

const userLocation = (state) => {
  return state.userLocation;
};

export default {
    currentTemperature,
    currentWeather,
    userLocation,
};
