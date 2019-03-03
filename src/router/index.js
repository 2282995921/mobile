import Vue from 'vue'
import Router from 'vue-router'
// import { Indicator } from 'mint-ui'

//1、懒加载缓解首页加载速度  2、图片压缩优化  3、缓存  4、带宽

Vue.use(Router)

export default new Router({
  // mode: 'history', //hash模式
  routes: [{
      path: '/',
      name: '',
      redirect: '/index',
      component: resolve => require(['@/components/index/index.vue'], resolve),
      meta: { title: '首页' }
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/components/index/index.vue'], resolve),
      meta: { title: '首页' }
    },
    {
      path: '/find',
      name: 'find',
      component: resolve => require(['@/components/find/find.vue'], resolve),
      meta: { title: '发现' }
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['@/components/User/user.vue'], resolve),
      meta: { title: '我的', auth: true }
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['@/components/Order/order.vue'], resolve),
      meta: { title: '订单', auth: true }
    },

    {
      path: '/search',
      name: 'search',
      component: resolve => require(['@/components/search.vue'], resolve),
      meta: { title: '搜索' }
    },
    {
      path: '/news_details',
      name: 'news-details',
      component: resolve => require(['@/components/news-details.vue'], resolve),
      meta: { title: '新闻详情' }
    },
    {
      path: '/news_list',
      name: 'news_list',
      component: resolve => require(['@/components/news-list.vue'], resolve),
      meta: {
        title: '新闻头条'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/Login/login.vue'], resolve),
      meta: {
        title: '用户登录',
      }
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/Login/register.vue'], resolve),
      meta: {
        title: '注册',
      }
    },
    {
      path: '/map',
      name: 'map',
      component: resolve => require(['@/components/User/map.vue'], resolve),
      meta: {
        title: '位置'
      }
    },
    {
      path: '/info',
      name: 'info',
      component: resolve => require(['@/components/User/info.vue'], resolve),
      meta: {
        title: '我的资料'
      }
    },
    {
      path: '/weather',
      name: 'weather',
      component: resolve => require(['@/components/weather.vue'], resolve),
      meta: {
        title: '天气'
      }
    },
    {
      path: '/app_details',
      name: 'app_details',
      component: resolve => require(['@/components/app_details.vue'], resolve),
      meta: {
        title: '应用介绍'
      }
    },
    {
      path: '/histroyOrder',
      name: 'histroyOrder',
      component: resolve => require(['@/components/user/histroyOrder.vue'], resolve),
      meta: {
        title: '历史订单'
      }
    },
    {
      path: '/solution',
      name: 'solution',
      component: resolve => require(['@/components/solution.vue'], resolve),
      meta: {
        title: '解决方案'
      }
    },
    {
      path: '/500',
      name: 'error-500',
      meta: {
        title: '500-服务端错误'
      },
      component: resolve => require(['@/views/error-page/500.vue'], resolve),
    },
    {
      path: '/*',
      name: 'error-404',
      meta: {
        title: '404-页面不存在'
      },
      component: resolve => require(['@/views/error-page/404.vue'], resolve),
    },
  ]
})
