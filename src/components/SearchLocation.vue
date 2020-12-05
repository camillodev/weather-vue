<template>
  <div class="search-location">
    <b-form @submit="searchLocation">    
      <b-input-group size="lg">
        <b-form-input id="search" v-model="form.search" type="search" placeholder="Bruxellas"></b-form-input>
        <b-button variant="light" size="lg" @click="searchLocation"> <b-icon icon="search" aria-hidden="true"></b-icon></b-button>
      </b-input-group>
    </b-form>
  </div>
</template>

<style lang="scss" scoped>
  .search-location {
    margin: 0 auto;
    width: 100%;
    margin-top: 10%;
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
              icon: data.weather[0].main.toLowerCase()
            };
            console.log(weather)

            this.updateWeather(weather);

            //location
            //weather description
            //temperature
            //high
            //low
            //feels_like 


          });          
      }
  }

};
</script>
