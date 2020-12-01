<template>
  <div id="h">
      <homeview/>
      <iconchat/>
  </div>
</template>

<script>
// @ is an alias to /src

import iconchat from "../components/iconchat.vue"
import homeview from "../components/homeview.vue"

export default {
  name: 'Home',
  components: {
    homeview,
    iconchat
  }
}
</script>

<style>
  #h{
      height: 100%;
  }
     @media only screen and (orientation: landscape){
     
     .header{
       height: 90%;
     }
      
     .events{
       margin-top: 10vh;
       margin-bottom: 10vh;
     }
  
   }
</style>