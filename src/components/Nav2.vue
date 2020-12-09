<template>
 <div>
   <b-navbar type="dark" variant="dark" fixed="top">
     <b-container id="con-nav2" class="bv-example-row" fluid>
       <b-row class="w-100">
         <b-col cols="4">
           <b-navbar-brand href="#"><router-link id = "nav1" to="/"><img src="../assets/nysl_logo.png" alt="lgp" id="lgp"></router-link></b-navbar-brand>
         </b-col>
       </b-row>
  
       <b-row class="w-100" align-h="center">
         <b-col><b-navbar-brand href="#"><h3>  NYSL </h3></b-navbar-brand></b-col>
       </b-row>
  
        <b-row class="w-100" align-h="end"> 
         <b-col cols="6">
           <b-button v-b-toggle.sidebar-right id="buttom-nav" class="bg-transparent"> <b-icon class="bg-dark" icon="justify-left"></b-icon></b-button>
             <b-sidebar id="sidebar-right" title="NYSL" right shadow>
               <div class="px-3 py-2" id="nav-text">
                 <b-navbar-nav  class="ml-auto" >
                   <b-nav-item ><router-link id = "nav1" to="/">HOME</router-link></b-nav-item>
                   <b-nav-item ><router-link id = "nav1" to="/about">ABOUT NYSL</router-link></b-nav-item>
                   <b-nav-item ><router-link id = "nav1" to="/calendar">CALENDAR</router-link></b-nav-item>
                   <b-nav-item ><router-link id = "nav1" to="/rules">RULES</router-link></b-nav-item>
                   <b-nav-item ><router-link id = "nav1" to="/contact">CONTACT</router-link></b-nav-item>
                   <b-nav-item ><router-link id = "nav1" to="/user">USER</router-link></b-nav-item>
                 </b-navbar-nav>
               </div>
             </b-sidebar>   
         </b-col>
       </b-row>
     </b-container>
   </b-navbar>       
 </div>
</template>

<script>
export default {
    name: 'Nav2'
}
</script>

<style lang="scss">
  #sidebar-right{
    width: 30vw;
    height: 100vh;
  }
  #buttom-nav{
    background-color: none !important;
    
  }
  .b-sidebar-body{
    background-color:#343a40;;
  }
  .navbar-expand, .navbar-nav{
    flex-direction: column  !important;
  }
</style>