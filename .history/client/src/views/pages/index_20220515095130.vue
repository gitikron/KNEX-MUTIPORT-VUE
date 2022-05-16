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
    const result = await axios.get('/api/user');
    }
  },
};
</script>

<style lang="scss" scoped></style>
