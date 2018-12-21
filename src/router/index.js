import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/page/HomeView'
import LoginView from '@/page/LoginView'
import AdminUser from '@/components/adminuser/AdminUser'
import RoleList from '@/components/adminuser/RoleList'
import UserAccount from '@/components/useraccount/UserAccount'
import Advertise from '@/components/ad/Advertise'
import AdvertisingList from '@/components/ad/AdvertisingList'
import UserMsg from '@/components/usermsg/UserMsg'
import NewsList from '@/components/news/NewsList'
import CreateNews from '@/components/news/CreateNews'

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
      redirect: '/login',
      children: [
        {
          path: 'home',
          component: AdminUser,
          name: 'home'
        },
        {
          path: 'home/roleList',
          component: RoleList
        },
        {
          path: 'user',
          component: UserAccount
        },
        {
          path: 'ad/advertise',
          component: Advertise
        },
        {
          path: 'ad/advertisingList',
          component: AdvertisingList
        },
        {
          path: 'userMsg',
          component: UserMsg
        },
        {
          path: 'news/newsList',
          component: NewsList
        },
        {
          path: 'news/createNews',
          component: CreateNews
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