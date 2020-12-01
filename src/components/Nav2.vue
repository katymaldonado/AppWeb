<template>
  <div >
      <b-navbar toggleable type="dark" variant="dark" fixed="top">
         <b-navbar-toggle>
             <template #default= "{ expanded }">
                  <b-button v-b-toggle.sidebar-variant variant="transparent"><b-icon v-if= "expanded" variant ="secondary" icon="justify-left"></b-icon></b-button>
             </template>
         </b-navbar-toggle>
    
           
   
        <b-sidebar id="sidebar-variant" title="NYSL" bg-variant="dark" text-variant="light" shadow>
            <div class="px-3 py-2">
       
        <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item ><router-link id = "nav1" to="/">HOME</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/about">ABOUT NYSL</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/calendar">CALENDAR</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/rules">RULES</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/contact">CONTACT</router-link></b-nav-item>
                  <b-nav-item ><router-link id = "nav1" to="/user">USER</router-link></b-nav-item>
            </b-nav>
          </nav>
      </div>
    </b-sidebar>
  
  
     
         

         <b-navbar-brand href="#"><h3>  NYSL </h3></b-navbar-brand>
         <b-navbar-brand href="#"><router-link id = "nav1" to="/"><img src="../assets/nysl_logo.png" alt="lgp" id="lgp"></router-link></b-navbar-brand>
     </b-navbar>
     
  </div>
</template>

<script>
export default {
    name: 'Nav2'
}
</script>

<style lang="scss">
  #sidebar-variant{
    width: 25vw;
    
  }
  .b-sidebar-body{
    background-color:#343a40;;
  }
</style>