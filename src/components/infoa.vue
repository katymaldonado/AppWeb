<template>
  <div class="abinfo">
    <p class="h2">About us</p>
  <b-card no-body class="cards"> 
    <b-card-header header-tag="nav" class="barra">
      <b-nav card-header tabs>
        <b-nav-item  class="pr-0" id="navi" ><b-button v-b-toggle= "'collapse-a'" visible class="p-0 bg-transparent border-0 active visible" id="b"><p>MISSION</p></b-button></b-nav-item>
        <b-nav-item id="navi"><b-button v-b-toggle= "'collapse-b'" class="p-0  bg-transparent border-0" id="b"><p>VISSION</p></b-button></b-nav-item>
        <b-nav-item id="navi"><b-button v-b-toggle= "'collapse-c'" class="p-0  bg-transparent border-0" id="b"><p>GAME</p></b-button></b-nav-item>
      </b-nav>
    </b-card-header>
 <div class="cards1">
   <b-card-body class="text-justify" :visible = "true">
     

      <b-card-text>
        <b-collapse id="collapse-a" class="mt-2">
             <b-card><p>To support young athletes living in Chicago´s northside neighborhoods, who have an interest 
               in learning and playing soccer, with opportunities to learn and practice skills related to the game 
               of soccer, specifically those skills around team cooperation and good sportsmanship.</p></b-card>
        </b-collapse>    
      </b-card-text>

      <b-card-text>
        <b-collapse id="collapse-b" class="mt-2">
             <b-card><p>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful 
               athletes through the building of character, self-discipline, and leadership.</p></b-card>
        </b-collapse>    
      </b-card-text>

      <b-card-text>
        <b-collapse id="collapse-c" class="mt-2">
             <b-card><p>The Northside Youth Soccer League was established in 1996 to provide athletes residing in 
               Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member 
               of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. 
               NYSL is run by a small full-time staff, and relies on the generous volunteer time of parents and 
               previous league members.</p></b-card>
        </b-collapse>    
      </b-card-text>
    
      
    </b-card-body>
    </div>

  </b-card>
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
      width: 90vw;
      text-align: justify;
      padding-bottom: 20px;

    }
    .cards{
      background-color: transparent;
    }
    .cards1{
       background-color: rgba(255, 255, 255, 0.734);
    }
    p{
       color: grey
    }
    #navi{
      background-color:rgba(255, 255, 255, 0.734);
    }
    .h2{
       color: white;
    }
</style>