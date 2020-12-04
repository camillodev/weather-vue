import http from './Http';

const getWeather = (cityName) => {
  cityName = cityName ? cityName: "rio de janeiro"
  return http.get(`/weather?q=${cityName}`);
}

export default {
  getWeather
}
