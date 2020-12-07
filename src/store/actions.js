import Weather from "@/services/Weather.js";
// import moment from "moment";

const updateUserLocation = (context, { latitude, longitude }) => {
    context.commit('updateUserLocation', { latitude, longitude });
    context.dispatch('getWeatherByCoordinates', { latitude, longitude });
}

const updateWeather = (context, newWeather) => {
    context.commit('updateWeather', newWeather);
}

const getWeatherByLocation = (context, location) => {
    Weather.getWeatherByLocation(location).then(response => {
        context.commit('updateCurrentWeather', response.data);
    })
}

const getWeatherByCoordinates = (context, {latitude, longitude}) => {
    Weather.getWeatherByCoordinates(latitude, longitude).then(response => {
        context.commit('updateCurrentWeather', response.data);
    })
}

const getNextDaysWeather = (context, {latitude, longitude}) => {
    Weather.getNextDaysWeather(latitude, longitude).then(response => {
        context.commit('updateNextDaysWeather', response.data);
    })
}


// const getWeatherByCoordinates = (context, {lat, lon, location}) => {
//     Promise.all([
//         Weather.getWeatherByCoordinates(lat, lon),
//         Weather.getHistoricalWeather(lat, lon)
//     ]).then(([coordinateResponse, historicalResponse]) => {
//         const weather  = {
//             location: location,
//             current: getCurrentWeather(coordinateResponse),
//             nextDays: getNextDaysWeathers(coordinateResponse.data.daily),
//             historicalweather: historicalResponse.map(data => { return data.data })
//         }
//         context.commit('updateWeather', weather)
//     })
    
// }

// const getCurrentWeather = (coordinateResponse) => {
//     const today = moment().format('DD/MM/YYYY');
//     const currentWeather =  coordinateResponse.data.daily.find(day => moment.unix(day.dt).format('DD/MM/YYYY') == today);
//     return { currentTemp: coordinateResponse.data.current.temp, ...currentWeather };
// }

// const getNextDaysWeather = (daily) => {
//     const today = moment().format('DD/MM/YYYY');
//     return daily.filter(day => moment.unix(day.dt).format('DD/MM/YYYY') != today);
// }



export default {
    updateWeather,
    getWeatherByLocation,
    getWeatherByCoordinates,
    updateUserLocation,
    getNextDaysWeather,
}