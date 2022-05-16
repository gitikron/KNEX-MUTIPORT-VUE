<template>
  <div>index</div>
</template>

<script>
let apiUrl = 'http://localhost:3000/api/user';
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
      await instance.get(apiUrl)
      .then((response) => {console.log(res.json(response)); })
      .catch((error) => {res.json(error)})
    },
  },
};
</script>

<style lang="scss" scoped></style>
