import Vue from 'vue'
import VueRouter from 'vue-router'

import  Login from "../views/Login/Login.vue"
import  Home  from "../views/Home/index.vue"
import Layout from '../views/Layout/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component:Layout,
    children:[
      {
        path:'/',
        name:'Home',
        component:Home
      },
      {
        path:'/user',
        name:'User',
        component:() =>import('../views/User/index.vue')
      },
      {
        path:'/tools',
        name:'Tools',
        component:() =>import('../views/Tools/Tools.vue')
      },
      {
        path:'/configure',
        name:'Configure',
        component:() =>import('../views/Configure/Configure.vue')
      },
    
    ]
  },
  
  {
    path:'/login',
    name:'Login',
    component:Login
  }
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

const router = new VueRouter({
  routes
})



export default router

