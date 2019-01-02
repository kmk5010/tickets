<template>
<div>
  <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/">Tickets</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="/new" v-if="this.$store.state.loggedIn">Create Ticket</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right v-if="this.$store.state.loggedIn">
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>{{ this.$store.state.username }}</em>
        </template>
        <b-dropdown-item href="/account">My Account</b-dropdown-item>
        <b-dropdown-item href="/admin" v-if="this.$store.state.roles.indexOf('admin') !== -1">Admin</b-dropdown-item>
        <b-dropdown-item @click="logout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>
</template>

<script>
import api from '@/api'
export default {
  name: 'navbar',
  methods: {
    logout () {
      api.logout()
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
