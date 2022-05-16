<template>
  <div>index</div>
</template>

<script>
import axios from "axios";
export default {
  name: "StockDarleneIndex",

  data() {
    return {
    };
  },
  methods: {
    async get() {
      try {
       const response= await axios.get('http://localhost:3000/api/user/').data
       console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  },
    mounted() {
    this.get()
  },
};

</script>

<style lang="scss" scoped></style>
