/* 
  路由定义
  2020-2-14  田文杨
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 主页路由
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      // 泰智慧
      {
        path:'tillageintelligent',
        name:'tillageintelligent',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/tillageIntelligent')
      },
      // 智慧酒店
      {
        path:'hotel',
        name:'hotel',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/hotel')
      },
      // 智慧景区
      {
        path:'scenic',
        name:'scenic',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/scenic')
      },
      // 智慧商业
      {
        path:'business',
        name:'business',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/business')
      },
      // 三智新村
      {
        path:'country',
        name:'country',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/country')
      },
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
})

export function resetRouter () {
  router.replace('/login')
}

export default router
