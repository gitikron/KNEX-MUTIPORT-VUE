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
          url: "/api/user",
          port: '3000',
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
