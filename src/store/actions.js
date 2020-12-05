const updateWeather = (context, newWeather) => {
    context.commit('updateWeather', newWeather);
}


export default {
    updateWeather,
}