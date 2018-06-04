import VueRouter from 'vue-router'
import Vue from 'vue'
import ToDo from "../components/to-do/ToDo"
import Pomadoro from "../components/pomadoro/Pomadoro"

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/to-do' },
  { path: '/to-do', component: ToDo },
  { path: '/pomadoro', component: Pomadoro }
]

export const router = new VueRouter({
  routes
})
