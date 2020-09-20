import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicInfo from '../components/BasicInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'BasicInfo',
    component: BasicInfo
  },
  {
    path: '/Survey',
    name: 'Survey',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Survey.vue')
  },
  {
    path: '/Consultation',
    name: 'Consultation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Consultation.vue')
  },
  {
    path: '/Summarize',
    name: 'Summarize',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Summarize.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
