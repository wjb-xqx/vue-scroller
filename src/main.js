import Vue from 'vue'
import App from './App'
import router from './router'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
