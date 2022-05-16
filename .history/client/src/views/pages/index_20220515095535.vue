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
      const url = 'http://localhost:8000'
      axios.get(url).then((response) => {
        this.foods = response.data.report.foods;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
