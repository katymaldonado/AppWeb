<template>
  <div class="about">
    
           <infoa/>
    

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
  
   .about{
     display: flex;
     position: relative;
     color: grey;
     justify-content: center;
     top: 6vh;
   }
   @media only screen and (orientation: landscape){
     .about{
       height: 88vh;
     }
     
*::-webkit-scrollbar{
   width: 5px;
}
*::-webkit-scrollbar-thumb{
   background: #343a40;
  border-radius: 5px;
}
   }
</style>