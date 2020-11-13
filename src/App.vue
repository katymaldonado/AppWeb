<template>
 <div id="app">
   <div class="wrapped">
        <Navegador/>      
    </div>

   <div class="main-view" id="body-content">
      <router-view/>
   </div>
   <div class="footer">
        <fter/> 
   </div>
    
 </div>   
</template>

<script>

import Navegador from "./components/Navegador.vue"
import fter from "./components/footer.vue"


export default {
  name: 'App',
  components: {
    Navegador,
    fter
  }
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

body{
    margin: 0;
}


.main-view{
   position: fixed;
   overflow-y: scroll;
   z-index: 999;
   width: 100%;
   height: 90vh;
   top: 6vh;
   background-color: #0000;
    

}


.wrapped{
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, rgba(92,255,97,1) 0%, rgba(111,255,145,1) 38%, rgba(126,255,182,1) 68%, rgba(138,255,212,1) 92%, rgba(138,255,212,1) 100%);
  display: flex;
  position: absolute;


 div{
    
    width: 100%; 
   
 }
 

 
 

 }
.footer{
   bottom: 0;
   
   position: fixed;
   width: 100vw;
   
 }

</style>
