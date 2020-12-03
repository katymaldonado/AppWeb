<template>
    <div class="user">
     <template v-if="user == null">
       
         <b-container class="bv-example-row" id="userst">
           <b-row class="text-center">
             <b-col></b-col>
             <b-col cols="6" ><b-icon icon="people-fill" font-scale="7.5" variant="dark" class="mt-5"></b-icon></b-col>
             <b-col></b-col>
           </b-row>
           <b-row class="mb-5 pb-5">
             <b-col cols="12" class="pb-3"><h2>Login</h2></b-col>
             <b-col cols="12" ><b-button block variant="dark" @click="login()">
               <b-container>
                 <b-row >
                   <b-col cols="2"><img src="../assets/googlee.png" alt="goo" id="goo"></b-col>
                   <b-col cols="10"><p>Login with Google</p></b-col>
                 </b-row>
               </b-container>              
               </b-button>
             </b-col>
           </b-row>
         </b-container>
       
       
     </template>

     <template v-else>
       <div class="inuser">
         <b-container class="bv-example-row pt-2 pb-2">
           <b-row>
             <b-col cols="6" md="4">
               <router-link to="/"><p class="h1 mb-2"><b-icon variant = "dark" icon="house" font-scale="2"></b-icon></p></router-link>
               <br><dl class="h5">HOME</dl>
             </b-col>
             <b-col cols="6" md="4">
               <router-link to="/user-info"><p class="h1 mb-2"><b-icon variant = "dark" icon="person" font-scale="2"></b-icon></p></router-link>
               <br><dl class="h5">MY PROFILE</dl>
             </b-col>
             <b-col cols="12" md="4">
               <button @click="logout()" class="bg-transparent" id="salir"><p class="h1 mb-2"><b-icon variant = "dark" icon="box-arrow-left" font-scale="2"></b-icon></p></button>
               <br><dl class="h5">LOGOUT</dl>
             </b-col>
           </b-row>
         </b-container>       
       </div>
     </template>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import {mapState} from 'vuex';
export default {
   name: 'User',
   computed: {
     ...mapState(['user'])
   },
   methods: {
      
      login(){
        let provider = new firebase.auth.GoogleAuthProvider()

        firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
           console.log('logged in' + result.user.email)

         })
         .catch(error => {
           console.log(error.code);
         })
      },
      logout(){
        
        firebase
        .auth()
        .signOut()
        .then(() => {
           console.log('logged out')
         })
         .catch(error => {
           console.log(error.code);
         })
      }
   }
}
</script>

<style>
.user{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
 #userst{
      width: 80vw;
      height: 65vh;
      background-color: rgba(255, 255, 255, 0.734);
      color: grey;
      border-radius: 20px;
      margin-top: 5vh;
      margin-bottom: 5vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      padding-top:5vh ;
   }
 #goo{
   width: 30px;
   height: 30px;
   
 }
 #salir{
   border-color: transparent;
 }
 .inuser{
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(255, 255, 255, 0.734);
   width: 80vw;
   border-radius: 20px;
   color: grey;
 }

</style>