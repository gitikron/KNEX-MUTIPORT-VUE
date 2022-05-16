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
      const url = '/api/user'
      HTTP.get(url).then((response) => {
        this.foods = response.data.report.foods;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
