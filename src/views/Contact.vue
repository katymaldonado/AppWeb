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
         height: 80%;
         margin-top: 10vh;
         
     }
     
</style>