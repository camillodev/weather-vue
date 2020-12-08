<template>
  <div class="next-days">
    <NoLocation v-if="!nextDaysWeather" />
    <ul class="next-days__result">
      <li
        class="next-days__result__item"
        v-for="weather in nextDaysWeather"
        :key="weather.date"
      >
        <div class="next-days__result__item--left">
          <div class="next-days__item__visualization">
            <img
              class="todays__icon"
              :src="weather.iconUrl"
              alt="weather icon"
            />
          </div>
         <div class="next-days__item__weather">
            <div class="next-days__item__date">
            {{ weather.date }}
          </div>
          <div class="next-days__item__description">
            {{ weather.description }}
          </div>
         </div>
        </div>

        <div class="next-days__result__item--right">
          <div class="next-days__item__temperature">
            max: {{ weather.temperature.high }}
          </div>
          <div class="next-days__item__temperature">
            min: {{ weather.temperature.low }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.next-days__result {
  margin-top: 40px;
  padding: 0px;
  text-align: left;
  border-radius: 20px;
}
.next-days__result__item {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 10px 15px;
  padding-left: 0px;
  font-size:15px;
  background-color: #fff;
  margin-bottom: 10px;
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;

  &:last-child {
    border: none;
  }

  &--left {
    display: flex;
    align-items: center;
  }

  &--right {
    align-items: center;
  }
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import NoLocation from "@/components/NoLocation.vue";

export default {
  name: "NextDaysWeather",
  components: {
    NoLocation,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters(["nextDaysWeather", "userLocation"]),
  },
  methods: {
    ...mapActions(["getNextDaysWeather"]),

    getWeatherData() {
      const { latitude, longitude } = this.userLocation;
      if (latitude && longitude) {
        this.getNextDaysWeather({ latitude, longitude });
      }
    },
  },
  created() {
    this.getWeatherData();
  },
};
</script>
