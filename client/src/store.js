import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: !!localStorage.getItem('feathers-jwt'),
    username: '',
    roles: ['']
  },
  mutations: {
    login (state) {
      state.loggedIn = !!localStorage.getItem('feathers-jwt')
    },
    logout (state) {
      state.loggedIn = false
    },
    getUserInfo (state, payload) {
      state.username = payload.username
      state.roles = payload.roles
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})
