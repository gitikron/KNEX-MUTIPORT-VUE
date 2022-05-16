<template>
  <div>
    <button @click="get()">GET</button><button @click="getByID(1)">getByID</button>
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
       let response= await axios.get('http://localhost:3000/user')
       console.log({GET:response.data})
      } catch (error) {
        console.log(error)
      }
    },
    async getByID(ID) {
      try {
       let getByID= await axios.get(`http://localhost:3000/user/${ID}`)
       console.log({GETBYID:getByID.data})
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
