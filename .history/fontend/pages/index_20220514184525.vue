<template>
  <div>
    
  </div>
</template>

<script>
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
     axios.get('localhost:8000/db/api/user').then((result) => {
       console.log(result)
     }).catch((err) => {
       
     });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
