import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import './assets/scss/main.scss'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false
Vue.use(elementUi, locale)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
