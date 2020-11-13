<template>
    <div class="contact">
        <div id="ic">
        <continfo/>
        </div>
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
         height: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
     }
     #ic{
         width: 80vw;
     }
</style>