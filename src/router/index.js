import Vue from 'vue'
import Router from 'vue-router'

// import center from '@/components/center/center'


import login from '@/components/login/login'

import inde from '@/components/index/index'


Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'index',
    component:inde,
     meta: {
       requireAuth: true
      }  
   /*  ,

      children: [{
        path: '/centers',
        name: 'centers',
        component: centers
      }, {
        path: '/card',
        name: 'card',
        component: card
      },{
        // 代理
        path: '/agent',
        name: 'agent',
        component: agent
      }, {
        // 实名认证
        path: '/realName',
        name: 'realName',
        component: realName
      }]
 */
  }, {
    path: '/login',
    name: 'login',
    component: login
  }]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    if (sessionStorage.getItem('userId')) { // 判断是否登录
      next()
    } else { // 没登录则跳转到登录界面
      next({
        path: '/login',
      })
    }
  } else {
    next()
  }
})

export default router
