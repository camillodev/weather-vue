const currentTemperature = (state) => {
  return state.currentWeather ? `${parseInt(state.currentWeather.temperature.current)}ºC` : null;
};
const currentWeather = (state) => {
  return state.currentWeather;
};

const nextDaysWeather = (state) => {
  return state.nextDaysWeather;
};

const historicalWeather = (state) => {
  return state.historicalWeather;
};

const userLocation = (state) => {
  return state.userLocation;
};

const tabView = (state) => {
  return state.tabView;
};

export default {
    currentTemperature,
    currentWeather,
    nextDaysWeather,
    historicalWeather,
    userLocation,
    tabView,
};
