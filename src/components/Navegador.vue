<template>
  <div id="nav">
     <b-navbar toggleable type="dark" variant="dark" fixed="top">
    
         <b-navbar-toggle target="navbar-toggle-collapse">
             <template #default= "{ expanded }">
                 <b-icon v-if="expanded" icon="justify-left"></b-icon>
                 <b-icon v-else icon="justify-left"></b-icon>
             </template>
         </b-navbar-toggle>

         <b-collapse id="navbar-toggle-collapse" is-nav>
             <b-navbar-nav  class="ml-auto">
                  <b-nav-item ><router-link id = "nav1" to="/">HOME</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/about">ABOUT NYSL</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/calendar">CALENDAR</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/rules">RULES</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/contact">CONTACT</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/user">USER</router-link></b-nav-item>
             </b-navbar-nav>
         </b-collapse>

         <b-navbar-brand href="#"><h3>  NYSL </h3></b-navbar-brand>
         <b-navbar-brand href="#"><router-link id = "nav1" to="/"><img src="../assets/nysl_logo.png" alt="lgp" id="lgp"></router-link></b-navbar-brand>
     </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Navegador'
}
</script>

<style lang="scss">

#lgp{
    width: 40px;
    height: 40px;
}

#nav1{
    color: white;

}
</style>