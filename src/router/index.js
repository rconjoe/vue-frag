import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import Servers from '../views/Servers.vue'
import Event from '../components/Event.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/event',
    name: 'Event',
    component: Event,
    props: route => ({ event: route.query.event }),
    async beforeEnter (to, from, next) {

    }
  },
  {
    path: '/servers',
    name: 'Servers',
    component: Servers
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
