<template>
  <div>index</div>
</template>

<script>
import {HTTP} from "../../axios";
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

      const HTTP = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 1000,
});
      const url = 'user'
      HTTP.get(url).then((response) => {
        this.foods = response.data.report.foods;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
