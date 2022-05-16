<template>
  <div>
    <button @click="get()">GET</button><button @click="getByID()">getByID</button>
  </div>
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
       const response= await axios.get('http://localhost:3000/user')
       console.log({GET:response.data})
      } catch (error) {
        console.log(error)
      }
    },
    async getByID() {
      try {
       const response= await axios.post('http://localhost:3000/user/1')
       console.log({GET:response.data})
      } catch (error) {
        console.log(error)
      }
    }
  },
    mounted() {

  },
};

</script>

<style lang="scss" scoped></style>
