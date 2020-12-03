<template>
  <div class="search-location">
    <b-form @submit="searchLocation">    
      <b-input-group size="lg">
        <b-form-input id="search" v-model="form.search" type="search" placeholder="Bruxellas"></b-form-input>
        <b-button variant="light" size="lg" @click="searchLocation"> <b-icon icon="search" aria-hidden="true"></b-icon></b-button>
      </b-input-group>
    </b-form>
  </div>
</template>

<style lang="scss" scoped>
  .search-location {
    margin: 0 auto;
    align-self: center;
    width: 70%;

    input {
      border-radius: 10px 0 0 10px;
    }
    button {
      border-radius: 0 10px 10px 0;
    }
  }
</style>

<script>
export default {
  name: "SearchLocation",
  components: { },
  data() { 
    return {
      form: { 
        search: ""
      }
    };
  },
  props: {},
  computed: {}, 
  methods: {
      searchLocation(evt) {
          evt.preventDefault()
          alert(this.form.search)
      }

  }

};
</script>
