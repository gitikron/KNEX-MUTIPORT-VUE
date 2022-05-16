<template>
  <div>index</div>
</template>

<script>
import axios, { Axios } from "axios";
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
      const instance = axios.create({baseURL: 'http://localhost:3000'})
      await Axios.get(`${__dirname}/api/user`)
      .then((response) => {console.log(response); })
      .catch((error) => {console.log(error)})
    },
  },
};

</script>

<style lang="scss" scoped></style>
