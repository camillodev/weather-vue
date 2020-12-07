<template>
  <b-nav tabs fill>
    <b-nav-item
      :active="tabView == 'historical'"
      @click="updateTabView('historical')"
      >Historical</b-nav-item
    >
    <b-nav-item :active="tabView == 'today'" @click="updateTabView('today')"
      >Today</b-nav-item
    >
    <b-nav-item
      :active="tabView == 'nextDays'"
      @click="updateTabView('nextDays')"
      >Next Days</b-nav-item
    >
  </b-nav>
</template>

<style lang="scss" scoped>
// #b8daff
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      activeTab: "today",
    };
  },
  props: {},
  computed: {
    ...mapGetters(["tabView"]),
  },
  methods: {
    ...mapActions(["updateTab"]),

    updateTabView(view) {
      console.log(view);
      this.updateTab(view);
    },
  },
};
</script>
