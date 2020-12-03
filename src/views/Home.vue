<template>
  <div class="home">
    <div class="container d-flex">
        <SearchLocation />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home {
    display: flex;
    height: 100vh;
    background: url("../assets/cloudly-rj.jpg") no-repeat center center fixed; 
    background-size: cover;
  }
</style>

<script>
// @ is an alias to /src
import SearchLocation from "@/components/SearchLocation.vue";

export default {
  name: "Home",
  components: {
    SearchLocation
  }
};
</script>
