<template>
   <div class = "footr">
      <b-navbar toggleable type="dark" variant="dark" fixed="bottom" class="p-0 pl-5">
         <b-navbar-brand href="#"><router-link id = "nav1" to="/"><img src="../assets/face.png" class="ml-1" alt="ft" id="fc"></router-link></b-navbar-brand>
         <b-navbar-brand href="#"><router-link id = "nav1" to="/"><img src="../assets/tw.png" alt="ft" id="fc"></router-link></b-navbar-brand>
         <b-navbar-brand href="#"><router-link id = "nav1" to="/"><img src="../assets/ig.png" alt="ft" id="fc"></router-link></b-navbar-brand>
         <b-navbar-brand href="#"><router-link id = "nav1" to="/"><img src="../assets/g+.png" class="mr-5" alt="ft" id="fc"></router-link></b-navbar-brand>
     </b-navbar>
   </div>
  
</template>

<script>
export default {
   name: 'fter'
}
</script>

<style lang = "scss">
  .footr{
      background-color: black;
      padding-top: 0;
  }
  #fc{
      width: 15px;
      height: 15px;
      padding: 0;
  }
</style>