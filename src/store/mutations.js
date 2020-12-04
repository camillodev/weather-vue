

const updateTemperature = (state, newTemperature) => {
    state.temperature = newTemperature;
}

const updateIcon = (state, newIcon) => {
    state.icon = newIcon;
}


export default {
    updateTemperature,
    updateIcon
}