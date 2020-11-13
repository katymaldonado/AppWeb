<template>
  <div class="rules">
      <div class="rinfo">
          <dl>RULES OF PLAY & POLICIES</dl> 
          <p>FIFA rules shall govern NYSL play except as modified herein.</p>
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
       height: 70vh;
       margin-top: 46vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .rinfo{
       width: 80vw;

   }
</style>