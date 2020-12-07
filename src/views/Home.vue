<template>
  <div class="weather" :style="getBackground">
    <div class="container">
      <SearchLocation />
      <img
        v-if="!weather"
        class="weather__icon"
        src="../assets/icons/animated/weather.svg"
        alt="general icon weather"
      />
      <div class="weather__result" v-if="weather">
        <div class="weather__title">
          <h2>{{ weather.location }}</h2>
        </div>
        <div class="weather__main">
          <div class="weather__temperature">
            <div class="weather__temperature--day-temperature">
              low: {{ weather.temperature.low }} - high:
              {{ weather.temperature.high }}
            </div>
            <div class="weather__temperature--current">
              {{ currentTemperature }}
            </div>
            <div class="weather__description">{{ weather.description }}</div>
          </div>
          <div class="weather__visualization">
            <img
              class="weather__icon"
              :src="weather.iconUrl"
              alt="weather.icon"
            />
          </div>
        </div>
        
        
        <div class="weather__details" v-if="showDetails">
          <h3 class="weather__details__title">Details:</h3>
          <div class="weather__details__info">
            <div class="weather__details__info--block">
              <div>Wind Speed: {{ weather.details.windSpeed }}</div>
              <div>Humidity: {{ weather.details.humidity }}</div>
              <div>Pressure: {{ weather.details.pressure }}</div>
            </div>
            <div class="weather__details__info--block">
              <div>Sunrise: {{ weather.details.sunrise }}</div>
              <div>Sunset: {{ weather.details.sunset }}</div>
            </div>
          </div>
        </div>

        <b-button
          v-if="showDetails"
          class="weather__button-details"
          @click="showDetails = !showDetails"
        >
          <b-icon icon="chevron-double-up"></b-icon >
        </b-button>

        <b-button
          v-if="!showDetails"
          class="weather__button-details"
          @click="showDetails = !showDetails"
        >
          <b-icon icon="chevron-double-down"></b-icon >
        </b-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.weather {
  height: 100vh;
  background-size: cover;
  &__button-details,
  &__button-details:active,
  &__button-details:hover,
  &__button-details:focus {
    background: #fff!important; //avoid bootstrap overwrite button style
    color: #000!important;
    border: none !important;
    border-bottom: 1px solid lightgrey !important;
    box-shadow: 0px 20px 15px -5px rgba(0, 0, 0, 0.2) !important;
    border-radius: 50%;
    position: absolute;
    bottom: -25px;
    padding: 15px;
    margin: 0 auto;
    left: 0;
    right: 0;

  }

  &__result {
    position: relative;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
    padding-right: 0px;
    background-color: #fff;
    border-radius: 40px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    border: 1px solid lightgrey;
    min-height: 200px;
  }

  &__main {
    display: flex;
  }

  &__title {
    font-size: 25px;
  }

  &__details__title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  &__details__info {
    justify-content: space-around;
    display: flex;
    &--block {
      text-align: left;
    }
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
import { mapGetters } from "vuex";

export default {
  name: "Weather",
  components: {
    SearchLocation,
  },
  data() {
    return {
      location: null,
      showDetails: false,
    };
  },
  props: {},
  computed: {
    ...mapGetters(["currentTemperature", "weather"]),

    getBackground() {
      return this.weather
        ? { "background-image": "url(" + this.weather.backgroundUrl + ")" }
        : { "background-color": "#b8daff" };
    },
  },
  methods: {},
  created() {
    if (!("geolocation" in navigator)) {
      alert("Geolocation is not available.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (response) => {
        const { latitude, longitude } = response.coords;
        this.location = { latitude: latitude, longitude: longitude };
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>
