<template>
  <div>index</div>
</template>

<script>
import axios, { Axios } from "axios";
export default {
  name: "StockDarleneIndex",

  data() {
    return {
    };
  },

  mounted() {
    this.get();
  },

  methods: {
    async get() {
      await axios.get(`http://localhost:3000/api/user/`)
      .then((response) => {console.log(response); })
      .catch((error) => {console.log(error)})
    },
  },
};

</script>

<style lang="scss" scoped></style>
