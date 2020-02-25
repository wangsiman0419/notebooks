import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/data',
    name: 'data',
    component: ()=>import('@/views/Data.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: ()=>import('@/views/Test.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: ()=>import('@/views/Detail.vue'),
    // core code
    props:true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
