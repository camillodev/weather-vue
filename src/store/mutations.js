import moment from "moment";

const updateCurrentWeather = (state, newWeather)  => {
    const { lon, lat } = newWeather.coord;
    const location = `${newWeather.name}, ${newWeather.sys.country}`

    state.tabView = 'today';

    state.userLocation = { 
        latitude: lat,
        longitude: lon, 
        location: location
    }

    state.currentWeather = formatCurrentWeatherResponse(newWeather, location);
}

const updateNextDaysWeather = (state, response)  => {
    const today = moment().format('DD/MM/YYYY');
    const nextDaysWeather = response.daily.filter(day => moment.unix(day.dt).format('DD/MM/YYYY') != today);
    state.nextDaysWeather = nextDaysWeather.map(day => {
        return formatNextDaysWeatherResponse(day);
    })
}

const updateUserLocation  = (state, {latitude, longitude})  => {
    state.userLocation.latitude = latitude;
    state.userLocation.latitude = longitude; 
}

const updateTabView  = (state, view)  => {
    state.tabView = view;
}


const updateHistoricalWeather = (state, response)  => {
    const newHistoricalWeather = response;
    state.historicalWeather = newHistoricalWeather.map(day => {
        return formatHistoricalWeatherResponse(day);
    })

    console.log(state.historicalWeather)
}

 const getWeatherType = (weather) => {
    const weatherValues = [
    "thunderstorm",
    "drizzle",
    "rain",
    "snow",
    "clear",
    "clouds",
    ];
    const weatherFiltered = weatherValues.find(
        (weathers) => weathers === weather.toLowerCase());

    return weatherFiltered ? weatherFiltered : "thunderstorm";
}

const formatCurrentWeatherResponse = (weather, location)  => {

    const weatherType = weather.weather[0].main.toLowerCase();
    const formatedWeather = {
        location: location,
        date:  moment.unix(weather.dt).format('DD/MM/YYYY'),
        temperature: {
            current: weather.main.temp,
            low: weather.main.temp.min,
            high: weather.main.temp.max,
        },
        details: {
            pressure: weather.main.pressure,
            humidity: weather.main.humidity,
            windSpeed: weather.wind.speed,
            sunrise: moment.unix(weather.sys.sunrise).local().format("HH:mm"),
            sunset: moment.unix(weather.sys.sunset).local().format("HH:mm"),
        },
        description: weather.weather[0].description,
        iconUrl: require(`../assets/icons/animated/${getWeatherType(weatherType)}.svg`),
        backgroundUrl: require(`../assets/images/${getWeatherType(weatherType)}.jpg`),
    };

    return formatedWeather;

}

const formatNextDaysWeatherResponse = (weather)  => {
    const weatherType = weather.weather[0].main.toLowerCase();
    const formatedWeather = {
        date:  moment.unix(weather.dt).format('DD/MM/YYYY'),
        temperature: {
            low: `${parseInt(weather.temp.min)}ºC`,
            high:`${parseInt(weather.temp.max)}ºC`,
        },
        description: weather.weather[0].description,
        iconUrl: require(`../assets/icons/animated/${getWeatherType(weatherType)}.svg`),
        backgroundUrl: require(`../assets/images/${getWeatherType(weatherType)}.jpg`),
    };

    return formatedWeather;
}

const formatHistoricalWeatherResponse = (weather)  => {
    const weatherType = weather.current.weather[0].main.toLowerCase();

    return {
        temperature: `${parseInt(weather.current.temp)}ºC`,
        description: weather.current.weather[0].description,
        date:  moment.unix(weather.current.dt).format('DD/MM/YYYY'),
        iconUrl: require(`../assets/icons/animated/${getWeatherType(weatherType)}.svg`)
    };
}

// const multiplyHistoricalData = (data) => {
//     return [...data, ...data, ...data, ...data, ...data, ...data];
// }


    

export default {
    updateNextDaysWeather,
    updateCurrentWeather,
    updateHistoricalWeather,
    updateUserLocation,
    updateTabView,
}