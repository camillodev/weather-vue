<template>
  <div class="weather" :style="getBackground">
  <h1>New feature test</h1>
    <Navbar />
    <div class="container">
      <SearchLocation />
      <HistoricalWeather v-if="tabView === 'historical'" />
      <TodaysWeather v-if="tabView === 'today'" />
      <NextDaysWeather v-if="tabView === 'nextDays'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.weather {
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 20px;
}
</style>

<script>
// @ is an alias to /src
import SearchLocation from "@/components/SearchLocation.vue";
import Navbar from "@/components/Navbar.vue";
import HistoricalWeather from "@/components/HistoricalWeather.vue";
import TodaysWeather from "@/components/TodaysWeather.vue";
import NextDaysWeather from "@/components/NextDaysWeather.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Weather",
  components: {
    SearchLocation,
    Navbar,
    HistoricalWeather,
    TodaysWeather,
    NextDaysWeather,
  },
  data() {
    return {
      location: null,
    };
  },
  props: {},
  computed: {
    ...mapGetters([
      "currentTemperature",
      "currentWeather",
      "userLocation",
      "tabView",
    ]),

    getBackground() {
      return this.currentWeather
        ? {
            "background-image":
              "url(" + this.currentWeather.backgroundUrl + ")",
          }
        : { "background-color": "#b8daff" };
    },
  },
  methods: {
    ...mapActions(["updateUserLocation", "getNextDaysWeather"]),

    showSevenDays() {
      const { latitude, longitude } = this.userLocation;
      this.getNextDaysWeather({ latitude, longitude });
    },

    getUserLocation() {
      if (!("geolocation" in navigator)) {
        alert("Geolocation is not available.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (response) => {
          const { latitude, longitude } = response.coords;
          this.updateUserLocation({ latitude, longitude });
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
  created() {
    this.getUserLocation();
  },
};
</script>
