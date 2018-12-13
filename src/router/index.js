import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/page/HomeView'
import LoginView from '@/page/LoginView'
import AdminUser from '@/components/adminuser/AdminUser'
import RoleList from '@/components/adminuser/RoleList'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
      children: [
        {
          path: 'home',
          component: AdminUser,
          name: 'home'
        },
        {
          path: 'home/roleList',
          component: RoleList
        }
      ]
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('access_token');
 
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default router;