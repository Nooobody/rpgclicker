import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { Drag, Drop } from 'vue-drag-drop';

library.add(faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component("drag", Drag);
Vue.component("drop", Drop)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
