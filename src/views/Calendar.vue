<template>
      <div class="calendar">
          
               <viewcalen/>
          

          <iconchat/>
      </div>
</template>

<script>
import viewcalen from '../components/viewcalen.vue'
import iconchat from '../components/iconchat.vue'



export default {
   name: 'Calendar',
   components: {
       viewcalen,
       iconchat
   }
   

}
</script>

<style>
  .calendar{
      display: flex;
      justify-content: center;
     align-items: center;
      height: 100%;
    }
   @media only screen and (orientation: landscape) {
     .calendar{
        margin-top: 12vh;
      }
   }
 
</style>