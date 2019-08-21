import Vue from 'vue'
import Vuex from 'vuex'

import character from './modules/character'
import enemy from './modules/enemy'
import item from './modules/item'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    character,
    enemy,
    item
  }
})
