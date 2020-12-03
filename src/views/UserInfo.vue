<template>
    <div class="infouser">
        <div id="user1" class="pt-4">
         <img id="user-photo" :src="user.photoURL">
         <h2 class="pt-4">{{user.displayName}}</h2>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
   name: 'UserInfo',
   computed:{
       ...mapState(['user'])
   },
   methods: {
      verAlgo(){
       console.log(this.user);
      }
   }
}
</script>

<style>
.infouser{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
#user1{
     width: 80vw;
     height: 60vh;
     background-color: rgba(255, 255, 255, 0.734);
     color: grey;
     border-radius: 20px;
     
     
}
  #user-photo{
      width: 100px;
      border-radius: 50%;
  }
</style>