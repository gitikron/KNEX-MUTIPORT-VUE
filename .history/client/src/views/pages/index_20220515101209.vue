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
      axios
        .request({
          method: "get",
          url: "/api/getAccountList",
          port: 81, // port options is not valid - this does not have the desired result
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
