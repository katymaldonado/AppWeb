<template>
 <div class="icono">
     <b-col class="mb-2">
         <router-link to="/chat"><p class="h1 mb-2"><b-icon variant = "dark" icon="chat-right-text"></b-icon></p></router-link>
     </b-col>
 </div>
</template>

<script>
export default {
   name: 'iconchat',
  
}
</script>

<style lang="scss">
    .icono{
        display: flex;
        position: fixed;
        z-index: 999;
        right: 3vw;
        bottom: 8vh;
        
    }
</style>