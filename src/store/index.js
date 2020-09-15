import Vue from 'vue'
import Vuex from 'vuex'
import AutoMailings from './auto-mailings'
import Mailings from './mailings'
import Names from './names'
import Domens from './domens'
import Bases from './bases'
import Landings from './landings'
import Finance from './finance'
import Settings from './settings'
import Chat from './chat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AutoMailings,
    Mailings,
    Names,
    Domens,
    Bases,
    Landings,
    Finance,
    Settings,
    Chat
  }
})
