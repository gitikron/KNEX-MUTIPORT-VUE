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
       axios.request({
        method: 'get',
        url:'/api/getAccountList',
        port: 8000, // port options is not valid - this does not have the desired result
    })
        .then(({ data }) => {
          console.warn("success", data);
        })
        .catch((err) => {
          let message =
            typeof err.response !== "undefined"
              ? err.response.data.message
              : err.message;
          console.warn("error", message);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
