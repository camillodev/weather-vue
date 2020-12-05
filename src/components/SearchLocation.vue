<template>
 <div class="teste">
    <div class="search-location">
    
    <b-form @submit="searchLocation">    
      <b-input-group size="lg">
        <b-form-input id="search" v-model="form.search" type="search" placeholder="Bruxellas"></b-form-input>
        <b-button variant="light" size="lg" @click="searchLocation"> <b-icon icon="search" aria-hidden="true"></b-icon></b-button>
      </b-input-group>
    </b-form>
  </div>
 </div>
</template>

<style lang="scss" scoped>
  .search-location {
    margin: 0 auto;
    width: 100%;
    padding-top: 10%;
    max-width: 600px;

    input {
      border-radius: 10px 0 0 10px;
    }
    button {
      border-radius: 0 10px 10px 0;
    }
  }
</style>

<script>
import Weather from "@/services/Weather.js";
import { mapActions } from 'vuex'

export default {
  name: "SearchLocation",
  components: { },
  data() { 
    return {
      form: { 
        search: ""
      }
    };
  },
  props: {},
  computed: {
  }, 
  methods: {
      ...mapActions([ 'updateWeather' ]),
      searchLocation(evt) {
          evt.preventDefault();
          const cityName = this.form.search;
          Weather.getWeather(cityName).then(({ data }) => {
            const weatherType = data.weather[0].main;
            const weather = {
              id: data.id,
              location: `${data.name}, ${data.sys.country}`,
              temperature: {
                current: data.main.temp,
                low: data.main.temp_min,
                high: data.main.temp_max,
                feelsLike: data.main.feels_like
              }, 
              description: data.weather[0].description,
              iconUrl: require(`../assets/icons/animated/${this.getWeatherType(weatherType)}.svg`),
              backgroundUrl: require(`../assets/images/${this.getWeatherType(weatherType)}.jpg`)
            };
            console.log(weather)

            this.updateWeather(weather);
          });
     },

     getWeatherType(weather) {
       const weatherValues = ['thunderstorm', 'drizzle', 'rain', 'snow', 'clear', 'clouds'];
       const weatherFiltered = weatherValues.find(weathers => weathers === weather.toLowerCase());
       
       return weatherFiltered ? weatherFiltered : 'thunderstorm';
     }
  }

};
</script>
