
import Vue from 'vue'
import App from './app/App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import BackTop  from 'vue-backtop'

Vue.use(MintUI)
// Vue.use(BackTop)

new Vue({
  el: '#app',
  router,
  render: h =>h(App)
})
