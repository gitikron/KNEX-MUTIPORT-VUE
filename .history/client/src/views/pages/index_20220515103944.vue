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
      console.log(__dir__)
      await axios.get(`${__dirname}/api/user`)
      .then((response) => {console.log(response); })
      .catch((error) => {console.log(error)})
    },
  },
};

</script>

<style lang="scss" scoped></style>
