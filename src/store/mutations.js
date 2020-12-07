import moment from "moment";

// const updateWeather = (state, newWeather) => {
//     newWeather.historicalweather = multiplyHistoricalData(newWeather.historicalweather);

//     const formatedWeather = {
//         current: formatWeatherResponse(newWeather.current, newWeather.location),
//         nextDays: newWeather.nextDays.map(day => { 
//             return formatWeatherResponse(day, newWeather.location)
//         }),
//         historicalDays: newWeather.historicalweather.map(day => { 
//             return formatHistoricalWeatherResponse(day.current, newWeather.location)
//         }),
//     }

//     state.currentWeather = formatedWeather.current;
// }

const updateCurrentWeather = (state, newWeather)  => {
    const { lon, lat } = newWeather.coord;
    const location = `${newWeather.name}, ${newWeather.sys.country}`

    state.userLocation = { 
        latitude: lat,
        longitude: lon, 
        location: location
    }

    state.currentWeather = formatCurrentWeatherResponse(newWeather, location);
}

const updateNextDaysWeather = (state, response)  => {
    const today = moment().format('DD/MM/YYYY');
    const nextDays = response.daily.filter(day => moment.unix(day.dt).format('DD/MM/YYYY') != today);
    state.nextDays = nextDays.map(day => {
        return formatNextDaysWeatherResponse(day, location);
    })
}

const updateUserLocation  = (state, {latitude, longitude})  => {
    state.userLocation.latitude = latitude;
    state.userLocation.latitude = longitude; 
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

const formatNextDaysWeatherResponse = (weather, location)  => {
    const weatherType = weather.weather[0].main.toLowerCase();
    const formatedWeather = {
        location: location,
        date:  moment.unix(weather.dt).format('DD/MM/YYYY'),
        temperature: {
            low: weather.temp.min,
            high: weather.temp.max,
        },
        description: weather.weather[0].description,
        iconUrl: require(`../assets/icons/animated/${getWeatherType(weatherType)}.svg`),
        backgroundUrl: require(`../assets/images/${getWeatherType(weatherType)}.jpg`),
    };

    return formatedWeather;

}

// const formatHistoricalWeatherResponse = (weather, location)  => {
//     return {
//         location: location,
//         temperature: weather.temp,
//         description: weather.weather[0].description,
//         date:  moment.unix(weather.dt).format('DD/MM/YYYY'),
//     };
// }

// const multiplyHistoricalData = (data) => {
//     return [...data, ...data, ...data, ...data, ...data, ...data];
// }


    

export default {
    updateNextDaysWeather,
    updateCurrentWeather,
    updateUserLocation,
}