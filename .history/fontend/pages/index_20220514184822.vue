<template>
  <div>
    
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: 'StockDarleneIndex',

  data() {
    return {
      
    };
  },

  mounted() {
    this.get()
  },

  methods: {
    get(){
     axios.get('http://localhost:8000/api/user').then((result) => {
       console.log(result)
     }).catch((err) => {
       
     });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
