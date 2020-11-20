import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart'
import product from './product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    product
  }
})
