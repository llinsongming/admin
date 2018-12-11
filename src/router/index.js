import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/page/HomeView'
import AdminUser from '@/components/adminuser/AdminUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
      children: [
        {
          path: '/home',
          component: AdminUser
        },
      ]
    }
  ]
})
