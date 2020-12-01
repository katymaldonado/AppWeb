<template>
  <div class="calenview" id= "cal">
    <b-calendar   block 
      :date-format-options="{year: 'numeric', month: 'numeric', day: 'numeric' }"
      locale="en" @selected="SelectDate" v-model='date'
    >
     
    </b-calendar>
    
  </div>
</template>

<script>

  import {mapState,mapMutations} from 'vuex'

  export default {
    name: 'viewcalen',
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
     ...mapState(['myGames'])
   },
   methods: {
       ...mapMutations(['dateselected', 'gamesfiltrados', 'selectdate']),
       SelectDate() {
          console.log(this.date)
          this.ms = new Date(this.date + 'GMT-03:00');
          this.fecha = this.ms.getDate();
          console.log(this.fecha)
          this.mes = this.ms.getMonth() + 1;
          console.log(this.mes)
          this.dateselected(this.date);
          
         console.log(this.myGames.length);
         console.log(this.myGames);

         for (let i = 0; i < this.myGames.length; i++) {
           if (this.myGames[i].mounth == this.mes && this.myGames[i].day == this.fecha) {
                this.gamesday.push(this.myGames[i])
                this.$router.push('/detail')  
           }
             else{
              window.alert("No hay Partidos para esta fecha");
             }
         }
          this.gamesfiltrados(this.gamesday)
          //this.$router.push('/detail')   
       }
   }
    
  }
</script>
  


<style lang = "scss">
   .calenview{
      width: 80vw;
      background-color: rgba(255, 255, 255, 0.734);
   }
   #cal{
      background-color: rgba(255, 255, 255, 0.734);
   }
</style>