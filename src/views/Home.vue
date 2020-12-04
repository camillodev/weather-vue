<template>
  <div class="weather">
    <div class="container">
      <SearchLocation />
      <div class="weather__result">
        <span class="weather__result__temperature">{{temperature}}</span>
        <img class="weather__result__icons" :src="iconUrl" alt="cloudy day">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .weather {
    height: 100vh;

    &__result{
      display: flex;
      align-items: center;
      &__temperature { 
        font-size: 60px;
        width: 60%;
      }
      &__icons {
        height: auto;
        width: 40%;
      }
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
     ...mapGetters(['temperature', 'iconUrl']),
  }, 
  methods: {
     
  }

};
</script>
