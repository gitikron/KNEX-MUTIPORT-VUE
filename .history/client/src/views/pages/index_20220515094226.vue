<template>
  <div>index</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "StockDarleneIndex",

  data() {
    return {};
  },

  mounted() {this.get()},
  
  methods: {
    get(){
      axios.get('/api/user').then(({ data }) => {
  // doing something with success
  })
  .catch((err) => {
  let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
  console.warn("error", message);
});
    }
  },
};
</script>

<style lang="scss" scoped></style>
