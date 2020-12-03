<template>
 <div class="home">    
   <div class="header">
     <img src="../assets/image1.jpg" alt="imi" id="imi">
     <h3 class="t2">UPCOMING EVENTS</h3>
   </div>
     
   <div class="events">
     <div id="e-fst">
       <b-container class="bv-example-row" >
         <b-row>
           <b-col cols="1" class="pl-0">
             <div  id="st-1">
               <h6> 08/04</h6>
             </div></b-col>
           <b-col cols="11" class="pt-3"><p>NYSL Fundraiser</p></b-col>
         </b-row>
       </b-container>
     </div>        
     <div>
          <b-container class="bv-example-row">
           <b-row>
             <b-col cols="1" class="pl-0">
                <div id="st-1"><h6>08/16</h6></div></b-col>
             <b-col cols="11" class="pt-1 pl-4"><p>Season Kick-off: Meet the Teams</p></b-col>
           </b-row>
         </b-container>
       </div>
           
       <div>
          <b-container class="bv-example-row">
           <b-row>
             <b-col cols="1" class="pl-0 pt-1">
               <div id="st-1"><h6>09/01</h6></div></b-col>
             <b-col cols="11" class="pl-3"><p>First Game of the Season (Check Game Schedule for details)</p></b-col>
           </b-row>
         </b-container>
         
        </div>
     </div>
 </div>
</template>

<script>
export default {
    name: 'homeview'
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
    height: 30vh;
    position: relative;
  }
  #imi{
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  
  
  .t2{
    position: absolute;
    bottom: 0;
    margin: 8px;
    opacity: 0.7;
  }
  .events{
    display: flex;
    height: 50vh;
    
    color: grey;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
  }
  .events > div{
    display: flex;
    align-items: center;
    position: relative;
    background-color: rgba(255, 255, 255, 0.734);
    margin-bottom: 10px;
    width: 85vw;
    padding: 5px 0px 5px 10px;
    border-radius: 20px;
  }
   #st-1{
    /* padding:14px 13px 10px 2px; */
    height: 55px; width: 55px; border-radius: 50%;
    color: white;
    margin: 0;
     display: flex;
     justify-content: center;
    align-items: center;
     background-color: rgba(138,255,212,1);
  }
  
  div p{
      padding: 0px 0px 0px 5px;
      font-weight:700;
      margin-bottom: 0;
      
  }
  @media only screen and (orientation: landscape){
     .home{
          height: 60vh;
     }
     .header{
       height: 60vh;
     }
      
     .events{
       margin-top: 10vh;
       
     }
     
   } 
</style>