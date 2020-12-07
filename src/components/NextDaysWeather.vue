<template>
  <div class="nextdays">
      <NoLocation  v-if="!nextSevenDaysWeather"/>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import { mapGetters } from "vuex";
import NoLocation from "@/components/NoLocation.vue";

export default {
  name: "NextDaysWeather",
  components: {
    NoLocation
  },
  data() {
    return {
    };
  },
  props: {},
  computed: {
    ...mapGetters(['nextSevenDaysWeather']),

  },
  methods: {
    //   ...mapActions(['updateTabView']),
  },
};
</script>
