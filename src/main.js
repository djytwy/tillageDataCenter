/* 
  优化并定义各种将要使用工具
  2020-2-14 田文杨
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 配合动态引入，若不需要动态引入，则babel进行配置，这里就不需要引入了
import 'element-ui/lib/theme-chalk/index.css'
import SvgIcon from 'components/SvgIcon' // SVG
import '@/icons' // icon
// 权限模块待用
// import '@/utils/permission'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)

Vue.config.productionTip = false
Vue.component('svg-icon', SvgIcon)

// 性能优化(动态引入elementUI)
if(process.env.NODE_ENV === 'development') {
  import('element-ui').then(_ => {
    Vue.use(_)

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }) 
}  