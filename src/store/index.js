import Vue from 'vue'
import Vuex from 'vuex'
import cardBasket from './card-basket'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cardBasket
  }
})
