<template>
  <div class="calenview" id= "cal">
    <b-calendar   block 
      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
      locale="en"
    ></b-calendar>
  </div>
</template>

<script>
  export default {
    name: 'viewcalen'
    
  }
</script>
  


<style lang = "scss">
   .calenview{
      width: 80vw;
      
   }
   #cal{
      background-color: rgba(255, 255, 255, 0.734);
   }
</style>