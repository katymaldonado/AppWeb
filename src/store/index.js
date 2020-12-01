import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myGames: [],
    dates: '',
    month: null,
    date: null,
    gamesfil: [],
    user:null
  },
  mutations: {
    insertGames(state,payload){
      state.myGames = payload
    },
    dateselected(state, payload){
      state.dates = payload
    },
    selectdate(state,payload){
        state.date = payload.date
        state.month = payload.month
    },
    gamesfiltrados(state, payload){
      state.gamesfil = payload
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
    }
  },
  actions: {
  },
  modules: {
  }
})
