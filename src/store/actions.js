const updateTemperature = (context, newTemperature) => {
    context.commit('updateTemperature', newTemperature);
}

const updateIcon = (context, newIcon) => {
    context.commit('updateIcon', newIcon.toLowerCase());
}


export default {
    updateTemperature,
    updateIcon,
}