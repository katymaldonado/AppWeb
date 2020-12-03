<template>
  <div id="chatroom" class="h-100">
      <template v-if="user == null">
         <div class="loguser">
        <b-container class="bv-example-row" id="userst">
           <b-row class="text-center">
             <b-col></b-col>
             <b-col cols="6" ><b-icon icon="people-fill" font-scale="7.5" variant="dark" class="mt-5"></b-icon></b-col>
             <b-col></b-col>
           </b-row>
           <b-row class="mb-5 pb-5">
             <b-col cols="12" class="pb-3"><h2>YOU NEED TO LOGIN TO YOUR USER</h2></b-col>
             <b-col cols="12" ><b-button variant="dark">  
                  <router-link to="/user">Go to Login</router-link>          
               </b-button>
             </b-col>
           </b-row>
         </b-container>
         </div>
      </template>
      <template v-else>
         <div id="body">
            <h4 class="mt-3" title="tchat"> vs.</h4>
            <div id="lector">
             <div v-for="(message,index) in messages" :key="index" class="bubble">
                <p id="name">
                   <strong>{{message.author}} said:</strong>
                </p>
                <p>
                   {{message.body}}
                </p>
             </div>
             </div>    
             <form @submit.prevent="post()" id="writer">
                <b-container>
                   <b-row>
                      <b-col cols="9"><b-form-input type="text" placeholder="Enter your message..." id="box" v-model="input"></b-form-input></b-col>
                      <b-col cols="3"><b-button type="submit" variant="dark">Send</b-button></b-col> 
                    </b-row>
                </b-container>
             </form>
         </div>
      </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {db} from "../firebase/db.js"
export default {
   name:'Chat',
   data(){
      return{
        messages:[],
        input:null
      }
   }, 
   methods:{
      post: function(){
        let folder = db.ref("forum/game" + this.$route.params.index);
        
        let message = {
           body: this.input,
           author: this.user.displayName,
           date: new Date()
        }
        folder.push(message)

        this.input=null
      }
   },
   computed: {
      ...mapState(['user','gameselect'])
   },
   mounted(){
      this.messages =[];
      db.ref("forum/game" + this.$route.params.index).on("child_added",(snapshop) =>{
         this.messages.push(snapshop.val())
      })
   }
}
</script>

<style>
  #body{
     width: 100vw;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
  }
  .bubble{
     padding: 10px;
     margin: 15px;
     width: 90vw;
     border-radius: 20px;
     background-color: rgba(138,255,212,1);;
  }
  #writer{
     position: absolute;
     bottom: 0;
  }
  #name{
     color: grey;
  }
   #lector{
     height: 69vh;
     overflow-y: scroll;
  }
  #tchat{
     position: fixed;
  }
  .loguser{
     height: 100%;
     display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
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
   b-button{
      text-decoration: none;
   }
</style>