<template>
  <div class="home">
     
       <!-- <img src="../assets/nysl_logo.png" alt="logo" id="lg1"> -->

      <div class="header">
        <img src="../assets/image1.jpg" alt="imi" id="imi">

        <div class="title">
          
          <img src="../assets/nysl_logo.png" alt="logo" id="lg">
        </div>   

        <h3 class="t2">UPCOMING EVENTS</h3>
      </div>
     
     <div class="events">
       <div>
         <b-container class="bv-example-row">
           <b-row>
             <b-col cols="1" class="pl-0"><h5 id="st-1"> 08/04</h5></b-col>
             <b-col cols="11" class="pt-3"><p>NYSL Fundraiser</p></b-col>
           </b-row>
         </b-container>
       </div>
         
       <div>
          <b-container class="bv-example-row">
           <b-row>
             <b-col cols="1" class="pl-0"> <h5 id="st-2">08/16</h5></b-col>
             <b-col cols="11" class="pt-1 pl-4"><p>Season Kick-off: Meet the Teams</p></b-col>
           </b-row>
         </b-container>
       </div>
           
       <div>
          <b-container class="bv-example-row">
           <b-row>
             <b-col cols="1" class="pl-0 pt-1"><h5 id="st-1">09/01</h5></b-col>
             <b-col cols="11" class="pl-3"><p>First Game of the Season (Check Game Schedule for details)</p></b-col>
           </b-row>
         </b-container>
         
        </div>
     </div>

     <iconchat/>
    
  </div>
</template>

<script>
// @ is an alias to /src

import iconchat from "../components/iconchat.vue"


export default {
  name: 'Home',
  components: {
    iconchat
  }
}
</script>

<style>
  .home{
      height: 100%;
  }
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    position: relative;
  }
  #imi{
   
    width: 100%;
    height: 100%;
    background-size: cover;
    left: 0;
    top: 10%;
  }
  #lg{
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 12px;
    right: 3;
    opacity: 0.7;
  }
  .t1{
    
    top: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    left: 41%;
  }
  .title{
     display: flex;
     position: absolute;
     height: 15vh;
     width: 100%;
     align-items: center;
     justify-content: center;
     top: 23vh;
     opacity: 0.4;
     

  }
  
  .t2{
    position: absolute;
    bottom: 0;
    margin: 8px;
    opacity: 0.7;
  }
  .events{
    display: flex;
    height: 50%;
    position: relative;
    color: grey;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
  .events > div{
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.734);
    margin-bottom: 10px;
    width: 85vw;
    padding: 5px 0px 5px 10px;
    border-radius: 20px;
  }
  div h5{
    padding:14px 10px 10px 2px;
    height: 55px; width: 55px; border-radius: 50%;
    color: white;
    margin: 0;
  }
  #st-1{
     background-color: rgba(138,255,212,1);
  }
  #st-2{
    background-color: rgba(126,255,182,1);
  }
  #st-3{
    background-color: rgba(92,255,97,1);
  }
  div p{
      padding: 0px 0px 0px 5px;
      font-weight:700;
      margin-bottom: 0;
      
  }   

</style>