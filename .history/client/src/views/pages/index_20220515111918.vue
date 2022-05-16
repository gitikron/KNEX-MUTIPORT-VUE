<template>
  <div>index</div>
</template>

<script>
const con = require('../../../database/index')
import axios from "axios";
export default {
  name: "StockDarleneIndex",

  data() {
    return {
    };
  },

  mounted() {

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
