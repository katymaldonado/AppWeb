<template>
  <div class="detail">
      <h1 >{{dates}}</h1>
       <div v-for="(filtered, index) in filteredByDate" :key="index" class="game">
         <b-container class="bv-example-row" >
           <b-row>
             <b-col cols="3" class="pl-0 pl-4" ><h5 id="circle">{{filtered.time}}</h5></b-col>
             <b-col cols="9" class="pt-3 pl-0" id="infogames">
               <b-container class="bv-example-row">
                 <b-row>
                   <b-col cols="4">
                     <b-icon icon="shield-shaded" font-scale="3" variant="dark"></b-icon>
                     <br> <h4>{{filtered.team1}}</h4>
                   </b-col>
                   <b-col cols="4" align-self="end">VS.</b-col>
                   <b-col  cols="4">
                     <b-icon icon="shield-shaded" font-scale="3" variant="dark"></b-icon>
                      <h4>{{filtered.team2}}</h4>
                   </b-col>
                 </b-row>
                  </b-container >
                 <br><dl>{{filtered.location}}</dl>
                 <dl>{{filtered.address}}</dl>
             </b-col>
             <b-col cols="12" class="pt-3 pb-1">
               <div>
                 <b-container>
                   <b-row align-v="center">
                     <b-col></b-col>
                     <b-col>
                       <b-button v-b-toggle.collapse-1 variant="dark">View Map</b-button>
                     </b-col>
                     <b-col ><router-link :to="'/chat/'+ index" v-model="filtered.id" @click="SelectGame()" ><b-icon icon="chat-left-text-fill" font-scale="2.5" variant="dark" class="mt-2"></b-icon></router-link></b-col>
                     <b-col cols="12">
                               <b-collapse id="collapse-1" class="mt-2">
                     <b-card bg-variant="transparent" >
                         <template v-if="filtered.codLocation == 1">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6540604261627!2d-
                        87.63123908505526!3d41.900296372004725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88
                        0fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C
                        %20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594830556291!5m2!1ses-419!2sar" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                         </template>
                         <template v-else-if="filtered.codLocation == 2">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745426!2d-
                        87.64002798505479!3d41.91380627115881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88
                        0fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C
                        %20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594830478659!5m2!1ses-419!2sar" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                         </template>
                         <template  v-else-if="filtered.codLocation == 3">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846845!2d-
                        87.66511458505448!3d41.92326857056615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88
                        0fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C
                        %20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594830414084!5m2!1ses-419!2sar" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                         </template>
                         <template v-else-if="filtered.codLocation == 4">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2917289530833!2d-
                        87.64808628505426!3d41.929582270170805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88
                        0fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C
                        %20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594830356948!5m2!1ses-419!2sar" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                         </template>
                         <template v-else-if="filtered.codLocation == 5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3562837030017!2d-
                        87.64765898505507!3d41.90669907160378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88
                        0fd33a674ca85d%3A0x9940c7163c4950c5!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C
                        %20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594830079698!5m2!1ses-419!2sar" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                         </template>
                         <template v-else>
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7477648265644!2d-
                        87.65355538505459!3d41.91978077078475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88
                        0fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C
                        %20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594830143084!5m2!1ses-419!2sar" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                         </template>
                     </b-card>
                   </b-collapse>
                     </b-col>
                   </b-row>
                 </b-container>  
               </div>
             </b-col>
           </b-row>
         </b-container>
       </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
    name: 'Detail',
    data(){
      return{
        

      }
    },
    computed: {
        ...mapState(['filteredByDate'])
    },
    methods: {
        ...mapMutations(['gamechat']),
         SelectGame() {
          console.log("aparece el game")
          // this.num = 
          const games = this.filteredByDate.filter(game => game.id == this.filtered.id)
          this.gamechat(games)
          console.log(games);
    }
    }}
</script>

<style lang="scss">
  .detail{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .game{
    display: block;
    align-items: center;
    position: relative;
    background-color: rgba(255, 255, 255, 0.734);
    margin-bottom: 10px;
    width: 100%;
    padding: 5px 0px 5px 0px;
    border-radius: 20px;
  }
  #circle{
    padding:10px 8px 8px 2px;
    height: 62px; width: 62px; border-radius: 50%;
    color: white;
    margin: 0;
    text-align: center;
    background-color: rgba(138,255,212,1);
  }
  .pl-0{
    padding-top: 10px;
  }
  #infogames{
    color: grey;
  }
  .card-body{
    padding: 10px;
  }
  iframe{
    width: 100%;
    height: 100%;
  }
</style>