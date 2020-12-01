<template>
    <div>
        <img id="user-photo" :src="user.photoURL" alt="">
        <h2>{{user.displayName}}</h2>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
   name: 'UserInfo',
   computed:{
       ...mapState(['user'])
   }
}
</script>

<style>
  #user-photo{
      width: 100px;
      border-radius: 50%;
  }
</style>