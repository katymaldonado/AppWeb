<template>
  <div class="rules">
            <div class="rinfo">
          
         <rulesinfo/>       
      </div>
     <iconchat/>
  </div>
</template>

<script>
import rulesinfo from '../components/rulesinfo.vue'
import iconchat from "../components/iconchat.vue"

export default {
    name: 'Rules',
    components: {
        rulesinfo,
        iconchat
    }
}
</script>

<style>
   .rules{
      height: 90vh;
      margin-top: 8vh;
   }
   
   
</style>