<template>
  <div class="detail">
      <h1 >{{dates}}</h1>
      
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'Detail',
   
    computed: {
        ...mapState(['dates','myGames'])
     
    },
    methods: {
        
    }
}
</script>

<style lang="scss">
  .detail{
      height: 100%;
      display: flex;
      justify-content: center;
      
  }
  h1{
      color: black;
      
  }
</style>