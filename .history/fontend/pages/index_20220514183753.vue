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
    
  },

  methods: {
    get(){
     this.$axios.get('/db/api/user').then((result) => {
       console.log(result)
     }).catch((err) => {
       
     });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
