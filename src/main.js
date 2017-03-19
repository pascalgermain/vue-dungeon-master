import Vue from 'vue'
import App from './App'
import './theme/main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
