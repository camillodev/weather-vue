<template>
  <div class="weather" :style="getBackground">
    <div class="container">
      <SearchLocation />
      <img v-if="!weather" class="weather__icon" src="../assets/icons/animated/weather.svg" alt="general icon weather">
      <div class="weather__result"  v-if="weather">
        <div class="weather__title">
          <h2>{{weather.location}}</h2>
        </div>
        <div class="weather__main">
          <div class="weather__temperature">
            <div class="weather__temperature--day-temperature">
              low: {{weather.temperature.low}} - high: {{weather.temperature.high}}
            </div>
            <div class="weather__temperature--current">{{currentTemperature}}</div>
            <div class="weather__description"> {{ weather.description  }}</div>

          </div>
          <div class="weather__visualization">
            <img class="weather__icon" :src="weather.iconUrl" alt="weather.icon">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .weather {
    height: 100vh;
    background-size: cover;
  }

  .weather {

    &__result {
      align-items: center;
      margin-top: 50px;
      padding: 20px;
      padding-right: 0px ;
      background-color: #FFF;
      border-radius: 40px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
      border: 1px solid lightgrey;
      min-height: 200px;
    }

    &__main {
    display: flex;
    }

    &__title h2{
      font-size: 22px;
    }

    &__temperature { 
      font-size: 16px;
      width: 50%;
      line-height: 1.2;
      align-self: center;
      
      &--current {
        font-size: 50px;
        margin-top: 0;
      }
    }
    
    &__visualization {
      width: 50%;
    }

    &__icon {
      height: auto;
      width: 100%;
    }

  }

</style>

<script>
// @ is an alias to /src
import SearchLocation from "@/components/SearchLocation.vue";
import { mapGetters } from 'vuex';

export default {
  name: "Weather",
  components: {
    SearchLocation
  },
  data() { 
    return { };
  },
  props: {},
  computed: {
     ...mapGetters([
       'currentTemperature',
       'weather',
       'feelsLike'
      ]),
     
      getBackground() {
        return this.weather 
          ? { 'background-image': 'url(' + this.weather.backgroundUrl + ')'}
          : { 'background-color': '#b8daff'};
      },

  }, 
  methods: {
     
  }

};
</script>
