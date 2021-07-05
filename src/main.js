import Vue from 'vue'
import App from './App'
import router from "./router"

import AvueFormDesign from '../packages/';
import AvueUeditor from 'avue-plugin-ueditor'

Vue.use(window.AVUE)
Vue.use(AvueFormDesign)
Vue.use(AvueUeditor)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
