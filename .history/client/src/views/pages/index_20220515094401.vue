<template>
  <div>index</div>
</template>

<script>
const axios = require('axios')
export default {
  name: "StockDarleneIndex",

  data() {
    return {};
  },

  mounted() {this.get()},
  
  methods: {
    get(){
      axios.get('http://localhost:8000/api/user').then(({ data }) => {
  console.warn("success", data);
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
