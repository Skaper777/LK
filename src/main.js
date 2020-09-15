import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import mainStyles from './assets/main.sass'
import Menu from './components/page-chunks/Menu.vue'
import Header from './components/page-chunks/Header.vue'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import axios from 'axios'

axios.defaults.headers.common = {'Content-Type': 'application/json'}

import VueAxios from 'vue-axios'

const moment = require('moment')
require('moment/locale/ru')


Vue.component('Multiselect', Multiselect)
Vue.component('Menu', Menu)
Vue.component('Header', Header)

Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'), {
  moment
})

Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue()

new Vue({
  router,
  store,
  mainStyles,
  render: h => h(App)
}).$mount('#app')
