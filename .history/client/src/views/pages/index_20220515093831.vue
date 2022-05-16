<template>
  <div>index</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "StockDarleneIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    get(){
      axios.get('/api/user').then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>
