<template>
    <div class="contact">
        
           <continfo/>
        
        <iconchat/>
    </div>
</template>

<script>
import continfo from '../components/continfo.vue'
import iconchat from '../components/iconchat.vue'

export default {
 name:'Contact',
 components: {
      continfo,
      iconchat
 }
}
</script>

<style lang = "scss">
     .contact{
         height: 65vh;
         margin-top: 10vh;
     }
     
*::-webkit-scrollbar{
   width: 5px;
}
*::-webkit-scrollbar-thumb{
   background: #343a40;
  border-radius: 5px;
}
</style>