<template>
  <div class="nextdays">
      <NoLocation  v-if="!historicalWeather"/>
  </div>
</template>

<style lang="scss" scoped>
// #b8daff

</style>

<script>
import { mapGetters } from "vuex";
import NoLocation from "@/components/NoLocation.vue";

export default {
  name: "HistoricalWeather",
  components: {
    NoLocation
  },
  data() {
    return {
    };
  },
  props: {},
  computed: {
    ...mapGetters(['historicalWeather']),

  },
  methods: {
    //   ...mapActions(['updateTabView']),
  },
};
</script>
