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
     this.$axios.get('http://localhost:8000//api/user')
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
