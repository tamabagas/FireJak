import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router
