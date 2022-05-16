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
    get() {
      const HTTP = axios.create({
        baseURL: "http://localhost:3000/api/",
      });
      const url = "user";
      HTTP.get(url).then((response) => {
        this.foods = response.data.report.foods;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
