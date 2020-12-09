<template>
 <div id="app">
    <template v-if="!landscape">
       <div class="wrapped">
         <Navegador/>      
       </div>

      <div class="main-view" id="body-content">
      <router-view/>
      </div>
      <div class="footer">
        <fter/> 
   </div>
    </template>
   <template v-else>
     <div class="wrappedland">
        <Nav2/>
       </div>
      <div class="main-viewland" id="body-content">
      <router-view/>
      </div>
      <div class="footer">
        <fter/> 
     </div>
   </template>
    
 </div>   
</template>


<script>

import Navegador from "./components/Navegador.vue"
import Nav2 from "./components/Nav2.vue"
import fter from "./components/footer.vue"
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'App',
  components: {
    Navegador,
    Nav2,
    fter
  },
  computed:{
    ...mapState(['landscape'])
  },
  methods: {
        ...mapMutations(['insertGames','listenUser','listenResize']),
        getGames: async function(api){
         let promise = await fetch(api)
         let isOk = promise.ok
         let json
         if (isOk) {
           json = await promise.json();
         } else{
           alert(promise.status)
           return 0;
         }
         console.log(json);
         this.insertGames(json);
       }
  },
  
  beforeMount(){
    this.getGames('data-nysl.json');
    this.listenResize();
    this.listenUser();
  }
};
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
   height: 84vh;
   top: 9vh;
   background-color: #0000;
   margin-bottom: 8vh;
}


.wrapped{
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, rgba(92,255,97,1) 0%, rgba(111,255,145,1) 38%, rgba(126,255,182,1) 68%, rgba(138,255,212,1) 92%, rgba(138,255,212,1) 100%);
  display: flex;
  justify-content: center;
  position: absolute;


 div{
    
    width: 100%; 
   
 }
 
}
.footer{
   bottom: 0;
   position: fixed;
   width: 100vw;
   height: 9vh;
 }
.wrappedland{
   width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(92,255,97,1) 0%, rgba(111,255,145,1) 38%, rgba(126,255,182,1) 68%, rgba(138,255,212,1) 92%, rgba(138,255,212,1) 100%);
  display: flex;
  justify-content: center;
  position: absolute; 
}
.main-viewland{
    position: fixed;
   overflow-y: scroll;
   z-index: 999;
   width: 100%;
   height: 82vh;
   background-color: #0000;
   
}
.main-view::-webkit-scrollbar,.main-viewland::-webkit-scrollbar{
  width: 7px;
}
.main-view::-webkit-scrollbar-thumb,.main-viewland::-webkit-scrollbar-thumb{
  background: #343a40;
  border-radius: 5px;
}
</style>
