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
      },
      temperature: null
    };
  },
  props: {},
  computed: {
  }, 
  methods: {
      ...mapActions([ 'updateTemperature' ]),
      searchLocation(evt) {
          evt.preventDefault();
          const cityName = this.form.search;
          Weather.getWeather(cityName).then(resp => {
            this.updateTemperature(resp.data.main.temp);
          });          
      }
  }

};
</script>
