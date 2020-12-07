import Weather from "@/services/Weather.js";
// import moment from "moment";

const updateUserLocation = (context, { latitude, longitude }) => {
    context.commit('updateUserLocation', { latitude, longitude });
    context.dispatch('getWeatherByCoordinates', { latitude, longitude });
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

const getHistoricalWeather = (context, {latitude, longitude}) => {
    Weather.getHistoricalWeather(latitude, longitude).then(response => {
        const newHistoricalWeather = response.map(data => { return data.data });
        context.commit('updateHistoricalWeather', newHistoricalWeather);
    })
}

const updateTab = (context, view) => {
    context.commit('updateTabView', view);
}


export default {
    getWeatherByLocation,
    getWeatherByCoordinates,
    getNextDaysWeather,
    getHistoricalWeather,
    updateUserLocation,
    updateTab,
}