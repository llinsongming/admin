import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/page/HomeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    }
  ]
})
