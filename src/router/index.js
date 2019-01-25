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
import ArtList from '@/components/article/ArtList'
import CreateArt from '@/components/article/CreateArt'
import CreateChannel from '@/components/article/CreateChannel'
import CourseList from '@/components/article/CourseList'
import DhyanaList from '@/components/dhyanalist/DhyanaList'
import QaList from '@/components/qalist/QaList'
import ActivityList from '@/components/activity/ActivityList'
import CreateAct from '@/components/activity/CreateAct'
import Examine from '@/components/examine/Examine'
import Temples from '@/components/temple/Temples'
import CreateTemple from '@/components/temple/CreateTemple'
import CroList from '@/components/crowdfunding/CroList'
import CreateDogood from '@/components/crowdfunding/CreateDogood'
import Order from '@/components/order/Order'
import Withdrawals from '@/components/withdrawals/Withdrawals'
import PushList from '@/components/push/PushList'
import ReleasePush from '@/components/push/ReleasePush'
import CreateMenu from '@/components/meuns/CreateMenu'
import AllComments from '@/components/comment/AllComments'

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
        },
        {
          path: 'article/artList',
          component: ArtList
        },
        {
          path: 'article/createArt',
          component: CreateArt
        },
        {
          path: 'article/createChannel',
          component: CreateChannel
        },
        {
          path: 'article/courseList',
          component: CourseList
        },
        {
          path: 'dhyanaList',
          component: DhyanaList
        },
        {
          path: 'qaList',
          component: QaList
        },
        {
          path: 'activity/activityList',
          component: ActivityList
        },
        {
          path: 'activity/createAct',
          component: CreateAct
        },
        {
          path: 'examine',
          component: Examine
        },
        {
          path: 'temple/temples',
          component: Temples
        },
        {
          path: 'temple/createTemple',
          component: CreateTemple
        },
        {
          path: 'crowdfunding/croList',
          component: CroList
        },
        {
          path: 'crowdfunding/CreateDogood',
          component: CreateDogood
        },
        {
          path: 'order',
          component: Order
        },
        {
          path: 'withdrawals',
          component: Withdrawals
        },
        {
          path: 'push/pushList',
          component: PushList
        },
        {
          path: 'push/releasePush',
          component: ReleasePush
        },
        {
          path: 'menus',
          component: CreateMenu
        },
        {
          path: 'comment/allComments',
          component: AllComments
        }
      ]
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('access_token');
    if (to.path == '/login') {
      if(token){
        next('/home');
      } else{
        next();
      }
  } else {
    if (!token) {
      next('/login');
    } else {
      next();
    }
  }
});
export default router;