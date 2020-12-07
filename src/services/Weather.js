import http from './Http';
import moment from "moment";


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

const getNextDaysWeather = (lat, lon) => {
  return http.get(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely`);
}

export default {
  getWeatherByLocation,
  getHistoricalWeather,
  getWeatherByCoordinates,
  getNextDaysWeather,

}
