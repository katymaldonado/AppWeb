<template>
  <div class="abinfo">
    <p class="h2">About us</p>
    <div >
      <b-card no-body>
        <b-tabs card >
         <b-tab title="MISSION">
           <b-card-text><p>To support young athletes living in Chicago´s northside neighborhoods, who have an interest 
               in learning and playing soccer, with opportunities to learn and practice skills related to the game 
               of soccer, specifically those skills around team cooperation and good sportsmanship.</p></b-card-text>
          </b-tab>
         <b-tab title="VISSION">
           <b-card-text><p>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful 
               athletes through the building of character, self-discipline, and leadership.</p></b-card-text>
         </b-tab>
         <b-tab title="GAME">
           <b-card-text><p>The Northside Youth Soccer League was established in 1996 to provide athletes residing in 
               Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member 
               of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. 
               NYSL is run by a small full-time staff, and relies on the generous volunteer time of parents and 
               previous league members.</p></b-card-text>
         </b-tab>
        </b-tabs>
      </b-card>
    </div>
</div>
</template>
<script>
 
  export default {
    name: 'infoa',
    data(){
      return {
        active: 0,
        visible: 'false'
      };
    }
  }
</script>
<style lang="scss">
  .abinfo{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 85vw;
      text-align: justify;
      

    }
   .h2{
       color: white;
    }
    
.card-header{
  background-color: #343a40 !important ;
  
}
.nav-link{
  color: white;
}

</style>