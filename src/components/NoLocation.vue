<template>
  <div class="no-location">
    <img
      class="no-location__icon"
      src="../assets/icons/animated/weather.svg"
      alt="general icon weather"
    />
    <p>No location selected</p>
  </div>
</template>

<style lang="scss" scoped>
// #b8daff
.no-location__icon {
  height: auto;
  width: 100%;
  max-width: 400px;
}
</style>

<script>
export default {
  name: "NoLocation",
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
};
</script>
