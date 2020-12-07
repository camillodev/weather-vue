import Weather from "@/services/Weather.js";
import moment from "moment";

const updateWeather = (context, newWeather) => {
    context.commit('updateWeather', newWeather);
}

const getWeatherByLocation = (context, location) => {
    Weather.getWeatherByLocation(location).then(response => {
        const { lon, lat } = response.data.coord;
        const location = `${response.data.name}, ${response.data.sys.country}`;
        context.dispatch('getWeatherByCoordinates', { lat, lon, location });
    })
}

const getWeatherByCoordinates = (context, {lat, lon, location}) => {
    Promise.all([
        Weather.getWeatherByCoordinates(lat, lon),
        Weather.getHistoricalWeather(lat, lon)
    ]).then(([coordinateResponse, historicalResponse]) => {
        const weather  = {
            location: location,
            current: getCurrentWeather(coordinateResponse),
            nextDays: getNextDaysWeathers(coordinateResponse.data.daily),
            historicalweather: historicalResponse.map(data => { return data.data })
        }
        context.commit('updateWeather', weather)
    })
    
}

const getCurrentWeather = (coordinateResponse) => {
    const today = moment().format('DD/MM/YYYY');
    const currentWeather =  coordinateResponse.data.daily.find(day => moment.unix(day.dt).format('DD/MM/YYYY') == today);
    return { currentTemp: coordinateResponse.data.current.temp, ...currentWeather };
}

const getNextDaysWeathers = (daily) => {
    const today = moment().format('DD/MM/YYYY');
    return daily.filter(day => moment.unix(day.dt).format('DD/MM/YYYY') != today);
}


export default {
    updateWeather,
    getWeatherByLocation,
    getWeatherByCoordinates
}