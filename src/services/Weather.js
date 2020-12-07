import http from './Http';
import moment from "moment";


const getWeather = (cityName) => {
  cityName = cityName ? cityName: "rio de janeiro"
  return http.get(`/weather?q=${cityName}`);
}

const getWeatherByLocation = (location) => {
  location = location ? location: "rio de janeiro"
  return http.get(`/weather?q=${location}`);
}

const getHistoricalWeather = (lat, lon) => {
  const requests = [];

  for(let i=1; i <= 5; i++) {
    const time = moment().subtract(i, 'd').utc().unix();
    const url = http.get(`/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}`);

    requests.push(url);
  }
  return Promise.all(requests);
}
const getWeatherByCoordinates = (lat, lon) => {
  return http.get(`/weather?lat=${lat}&lon=${lon}`);
}

// const getWeatherByCoordinates = (lat, lon) => {
//   return http.get(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely`);
// }

export default {
  getWeather,
  getWeatherByLocation,
  getHistoricalWeather,
  getWeatherByCoordinates,

}
