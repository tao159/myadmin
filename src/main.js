import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueAnimateNumber from 'vue-animate-number'
import ECharts from 'vue-echarts'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'

import store from './store'
import router from './router'
import '@/assets/font/iconfont.css'

Vue.config.productionTip = false


Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(VueAnimateNumber)
Vue.component('v-chart', ECharts)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
