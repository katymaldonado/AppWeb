import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
 
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDC-Q6YZu3xYgMLt9A3aEDAKTvB1fpIMwo",
  authDomain: "app-web-8527a.firebaseapp.com",
  databaseURL: "https://app-web-8527a.firebaseio.com",
  projectId: "app-web-8527a",
  storageBucket: "app-web-8527a.appspot.com",
  messagingSenderId: "571089949193",
  appId: "1:571089949193:web:ffd7848b307b64f8b41ed8",
  measurementId: "G-XG87ZJX6D7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
