import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import store from './store'

import 'common/stylus/index.styl'

Vue.config.productionTip = false
/* eslint-disable no-new */

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('common/image/default.png'),
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
