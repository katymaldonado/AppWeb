import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myGames: [],
    dates: '',
    filteredByDate: [],
    user:null,
    landscape: window.matchMedia("(min-width: 600px)").matches,
    gameselect: null
  },
  mutations: {
    insertGames(state,payload){
      state.myGames = payload
    },
    listenResize(state){
      window.addEventListener(
        'resize', 
        () => state.landscape = window.matchMedia('(min-width: 600px)').matches);
    },
    dateselected(state, payload){
      state.dates = payload
    },
    selectdate(state,payload){
        state.date = payload.date
        state.month = payload.month
    },
    gamesfiltrados(state, payload){
      state.filteredByDate = payload
    },
    listenUser(state){
      firebase.auth().onAuthStateChanged(user =>{
        if (user) {
          state.user = user
        }
        else{
          state.user = null
        }
      });
    },
    gamechat(state,payload){
      state.gameselect = payload[0]
    }
  },
  actions: {
  },
  modules: {
  }
})
