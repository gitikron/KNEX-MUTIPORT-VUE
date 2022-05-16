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
    axios.defaults.baseURL = window.location.protocol + "//" + window.location.hostname + ":8000";
    const result = await axios('/api/user');
    }
  },
};
</script>

<style lang="scss" scoped></style>
