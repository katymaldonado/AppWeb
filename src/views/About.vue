<template>
  <div class="about">
    <div class="info">
           <infoa/>
    </div>

   <iconchat/>

  </div>
  
</template>

<script>
// @ is an alias to /src

import infoa from "../components/infoa.vue"
import iconchat from "../components/iconchat.vue"

export default {
  name: 'About',
  components: {
      infoa,
      iconchat
  }
}
</script>

<style>
  
   .info{
     display: flex;
    position: relative;
    color: grey;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
     /* border-radius: 20px;
     padding: 5px 5px 5px 5px;
     margin-top: 80px; */ 

   }
</style>