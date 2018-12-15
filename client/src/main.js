import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.loggedIn
  const roles = store.state.roles.indexOf('admin')
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
  if (requiresAuth && !loggedIn) {
    next('/login')
  } else {
    next()
  }
  if (requiresAdmin && roles === -1) {
    next('/')
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
