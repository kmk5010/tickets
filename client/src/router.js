import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import NewTicket from './views/NewTicket.vue'
import ViewTicket from './views/ViewTicket.vue'
import User from './views/User.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/new',
      name: 'newticket',
      component: NewTicket
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: ViewTicket
    },
    {
      path: '/account',
      name: 'account',
      component: User
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
