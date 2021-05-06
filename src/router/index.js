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
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: () => import('../views/Pictures.vue')
  },
   {
    path: '/pictures/album/:id',
    name: 'Picture',
    component: () => import('../components/Picture.vue')
  } 
]
/* {
  path: "/shop",
  name: "Shop",
  component: () => import("../views/Shop.vue"),
  children: [
    { path: "/shop/food", component: Food },
    { path: "/shop/drinks", component: Drinks },
  ],
}, */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
