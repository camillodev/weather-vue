<template>
  <div class="weather">
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
            <div class="weather__temperature--sensation">
              Feels like: {{ feelsLike }}
            </div>
          </div>
          <div class="weather__visualization">
            <img class="weather__icon" :src="iconUrl" alt="weather.icon">
            <div class="weather__description"> {{ weather.description  }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home {
    height: 100vh;
  }

  .weather {

    &__result {
      align-items: center;
      margin-top: 50px;
    }

    &__main {
    display: flex;
    }

    &__temperature { 
      font-size: 20px;
      width: 60%;
      line-height: 1;
      align-self: center;
      
      &--current {
        font-size: 60px;
        margin-top: 0;
      }
    }
    &__icon {
      height: 200px;
      width: auto;
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
       'iconUrl',
       'weather',
       'feelsLike'
      ]),
  }, 
  methods: {
     
  }

};
</script>
