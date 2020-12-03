<template>
  <div class="h-100 align-items-center" id="viewc">
     <template v-if="landscape" >
        <b-container class="pt-3 mt-3 pb-2 mb-2">
          <b-row>
             <b-col cols="12"><p class="h3">GAME CALENDAR</p></b-col>
          </b-row>
         <b-row >
           <b-col cols="6">
             <b-calendar   block 
               :date-format-options="{year: 'numeric', month: 'numeric', day: 'numeric' }"
               locale="en" @selected="SelectDate" v-model='date'>
             </b-calendar>
           </b-col>
           <b-col cols="6" >
               <template id="littledetail">
                   <Detail/>
               </template>             
           </b-col>
         </b-row>
       </b-container>   
     </template>
     <template v-else>
       <div  id= "cal">
       <p class="h3">GAME CALENDAR</p>
       <div>
         <b-calendar   block 
           :date-format-options="{year: 'numeric', month: 'numeric', day: 'numeric' }"
           locale="en" @selected="SelectDate" v-model='date'>
         </b-calendar>
       </div>
       </div>
     </template>
     
  </div>
</template>

<script>
  import Detail from '../views/Detail.vue'
  import {mapState,mapMutations} from 'vuex'

  export default {
    name: 'viewcalen',
    components:{
     Detail 
    },
    data(){
      return{
        date:'',
        ms: Date,
        fecha: Number,
        mes: Number,
        gamesday: []  
      }
    },
    computed: {
     ...mapState(['myGames','landscape'])
   },
   methods: {
       ...mapMutations(['dateselected', 'gamesfiltrados']),
       SelectDate() {
          console.log(this.date)
          this.ms = new Date(this.date + 'GMT-03:00');
          this.fecha = this.ms.getDate();
          console.log(this.fecha)
          this.mes = this.ms.getMonth() + 1;
          console.log(this.mes)
          this.dateselected(this.date);
          
         console.log(this.myGames.Games.length);
         console.log(this.myGames);

         const aux = this.myGames.Games.filter(game => game.mounth == this.mes && game.day == this.fecha)
         
         if (aux == 0) {
           alert("No hay Partidos para esta fecha");
         }
         else{
           this.gamesfiltrados(aux)
           console.log(aux)
           if(this.landscape == false){
               this.$router.push('/detail')
           }
         }
          //this.$router.push('/detail')   
       }
   }
    
  }
</script>
  


<style lang = "scss">
   #viewc{
     width: 80vw;
   }
  #cal{
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  #littedetail{
    overflow-y: scroll;
  }
</style>