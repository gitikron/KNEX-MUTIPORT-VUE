<template>
  <div>index</div>
</template>

<script>
let apiUrl = 'http://localhost:3000/api/user/';
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
      axios.get(apiUrl)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
