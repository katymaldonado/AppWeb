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
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  
 
</style>