<template>
  <div>index</div>
</template>

<script>
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
      const instance = axios.create({baseURL: 'http://localhost:3000'})
      const apiUrl = '/api/user';
      await instance.get(apiUrl)
      .then((response) => {console.log(response.data); })
      .catch((error) => {console.log(error.response.data)})
    },
  },
};

</script>

<style lang="scss" scoped></style>
