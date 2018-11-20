import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import EatingSite from './modules/EatingSite'
import BuildingSite from './modules/BuildingSite'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    EatingSite,
    BuildingSite
  },
  strict: debug
})

/**/
