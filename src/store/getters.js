const temperature = (state) => {
  return state.temperature ? `${parseInt(state.temperature)}ºC` : "carregando";
};

export default {
    temperature
};
