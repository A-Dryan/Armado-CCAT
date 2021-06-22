import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue')
  },
  {
    path: '/miembros',
    name: 'miembros',
    component: () => import(/* webpackChunkName: "miembros" */ '../views/Miembros.vue')
  },
  {
    path: '/proxEventos',
    name: 'ProximosEventos',
    component: () => import(/* webpackChunkName: "proxeventos" */ '../views/ProxEvent.vue')
  },
  {
    path: '/addEventos',
    name: 'AgregarEventos',
    component: () => import(/* webpackChunkName: "addEventos" */ '../views/AddEvent.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/modHome',
    name: 'modHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/modHome.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
