import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('../views/Rules.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
  ,
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  }
  ,
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/user-info',
    name: 'UserInfo',
    component: () => import('../views/UserInfo.vue')
  },
  {
    path: '/chat/:index',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/chatall',
    name: 'ChatAll',
    component: () => import('../views/ChatAll.vue')
  }
  // ,
  // {
  //   path: '/gamessave',
  //   name: 'GamesSave',
  //   component: () => import('../views/GamesSaves.vue')
  // }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
