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
     this.$axios.get('/api/user').then((result) => {
       console.log(result)
     }).catch((err) => {
       
     });
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
