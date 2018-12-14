import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    login () {
      this.state.loggedIn = true
    },
    logout () {
      this.state.loggedIn = false
    }
  },
  actions: {

  }
})
