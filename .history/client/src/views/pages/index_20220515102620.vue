<template>
  <div>index</div>
</template>

<script>
let apiUrl = '/api/user';
import axios from "axios";
export default {
  name: "StockDarleneIndex",

  data() {
    return {};
  },

  mounted() {
    this.get();
  },

  methods: {
    async get() {
      const instance = axios.create({baseURL: 'http://127.0.0.1:3000'})
      await instance.get(apiUrl)
      .then((response) => {console.log(response.data); })
      .catch((error) => {console.log(error.response.data)})
    },
  },
};

</script>

<style lang="scss" scoped></style>
