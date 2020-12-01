<template>
    <div>
      <template v-if="user == null">
        <button @click="login()">Login with Google</button>
      </template>
      <template v-else>
          <button>Home</button>
          <button>
            <router-link to="user-info">
             My Profile
            </router-link>
            </button>
          <button @click="logout()">Logout</button>
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

</style>