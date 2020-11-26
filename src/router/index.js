import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Accueil from '../views/Accueil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/Product')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout'),
    beforeEnter: (from, to, next) => {
      if (store.state.cart.items.length > 0) {
        return next()
      } else {
        return next('/')
      }
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
