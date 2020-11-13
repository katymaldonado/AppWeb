<template>
      <div class="calendar">
          <div class="view-c">
               <viewcalen/>
          </div>

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
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

  }
  .view-c{
      margin-top: 10vh;
  }
</style>