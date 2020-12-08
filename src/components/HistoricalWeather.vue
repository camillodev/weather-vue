<template>
  <div class="historical-weather">
    <NoLocation v-if="!historicalWeather" />
    <ul class="historical-weather__result">
      <li
        class="historical-weather__result__item"
        v-for="weather in historicalWeather"
        :key="weather.dt"
      >
        <div class="historical-weather__result__item--left">
          <div class="historical-weather__item__visualization">
            <img
              class="todays__icon"
              :src="weather.iconUrl"
              alt="weather icon"
            />
          </div>
          <div class="historical-weather__result__item__weather">
            <div class="historical-weather__result__item__date">
              {{ weather.date }}
            </div>
            <div class="historical-weather__result__item__description">
              {{ weather.description }}
            </div>
          </div>
        </div>

          <div class="historical-weather__result__item__temperature">
            <div>Temperature: </div>
            <div>
              {{ weather.temperature }}
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.historical-weather__result {
  background-color: #fff;
  margin-top: 40px;
  padding: 0px;
  text-align: left;
  border-radius: 20px;
}
.historical-weather__result__item {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 10px 15px;
  padding-left: 0px;
  font-size: 15px;

  &:last-child {
    border: none;
  }

  &--left {
    display: flex;
    align-items: center;
  }

  &__temperature {
    align-items: center;
    text-align: center;
  }
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import NoLocation from "@/components/NoLocation.vue";

export default {
  name: "HistoricalWeather",
  components: {
    NoLocation,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters(["historicalWeather", "userLocation"]),
  },
  methods: {
    ...mapActions(["getHistoricalWeather"]),

    getWeatherData() {
      const { latitude, longitude } = this.userLocation;
      if (latitude && longitude) {
        this.getHistoricalWeather({ latitude, longitude });
      }
    },
  },
  created() {
    this.getWeatherData();
  },
};
</script>
