import moment from "moment";

const updateWeather = (state, newWeather) => {
    state.weather = formatWeatherResponse(newWeather.current, newWeather.location);
    const formatedWeather = {
        current: formatWeatherResponse(newWeather.current, newWeather.location),
        nextDays: newWeather.nextDays.map(day => { 
            return formatWeatherResponse(day, newWeather.location)
        }),
        historicalDays: newWeather.historicalweather.map(day => { 
            return formatHistoricalWeatherResponse(day.current, newWeather.location)
        }),
    }

    console.log(formatedWeather)
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

const formatWeatherResponse = (weather, location)  => {

    const weatherType = weather.weather[0].main;
    const formatedWeather = {
        location: location,
        date:  moment.unix(weather.dt).format('DD/MM/YYYY'),
        temperature: {
            current: weather.currentTemp,
            low: weather.temp.min,
            high: weather.temp.max,
        },
        details: {
            pressure: weather.pressure,
            humidity: weather.humidity,
            windSpeed: weather.wind_speed,
            sunrise: moment.unix(weather.sunrise).local().format("HH:mm"),
            sunset: moment.unix(weather.sunset).local().format("HH:mm"),
        },
        description: weather.weather[0].description,
        iconUrl: require(`../assets/icons/animated/${getWeatherType(weatherType)}.svg`),
        backgroundUrl: require(`../assets/images/${getWeatherType(weatherType)}.jpg`),
    };

    return formatedWeather;

}

const formatHistoricalWeatherResponse = (weather, location)  => {
    return {
        location: location,
        temperature: weather.temp,
        description: weather.weather[0].description,
        date:  moment.unix(weather.dt).format('DD/MM/YYYY'),
    };
}

    

export default {
    updateWeather,
}