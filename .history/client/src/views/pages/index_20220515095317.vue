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
    await axios.get('http://localhost:8000/api/user')
    }
  },
};
</script>

<style lang="scss" scoped></style>
