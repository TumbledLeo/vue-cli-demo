import Vue from 'vue'
import Router from 'vue-router'

// import center from '@/components/center/center'


import login from '@/components/login/login'

import inde from '@/components/index/index'


Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'inde',
    component: inde,
     meta: {
       requireAuth: true
      }  
  }, {
    path: '/login',
    name: 'login',
    component: login
  }
]
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
