import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -60,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})


new Vue({
  render: h => h(App)
}).$mount('#app')