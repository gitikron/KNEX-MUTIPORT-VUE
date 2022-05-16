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

      axios
        .request({
          method: "get",
          url: "/api/user",
          port: 8000,
        })
        .then((response) => {
          console.log(response);
          const data = response.data;
          const errors = data.errors ? data.errors : false;
          if (errors) {
            setErrors(errors);
          }
        })
        .catch((reason) => {
          console.log(reason);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
