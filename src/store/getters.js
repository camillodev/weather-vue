const currentTemperature = (state) => {
  return state.currentWeather ? `${parseInt(state.currentWeather.temperature.current)}ºC` : null;
};
const currentWeather = (state) => {
  return state.currentWeather;
};

const nextSevenDaysWeather = (state) => {
  return state.nextSevenDaysWeather;
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
    nextSevenDaysWeather,
    historicalWeather,
    userLocation,
    tabView,
};
