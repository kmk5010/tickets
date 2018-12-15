<template>
  <div class="container-fluid">
    <br>
    <b-card title="Login" class="mt-4 rounded-10">
      <b-form>
        <label class="m-2 float-sm-left">Username</label>
        <b-form-input id="username" type="email" v-model="username"></b-form-input>
        <label class="m-2 float-sm-left">Password</label>
        <b-form-input id="password" type="password" v-model="password"></b-form-input>
        <div class="mt-2 text-danger">{{ errorMsg }}<br></div>
        <b-button variant="dark" class="m-2" @click="Login">Login</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    Login () {
      console.log('logging in')
      api.authenticate({ strategy: 'local', username: this.username, password: this.password })
        .then(response => {
          console.log(response)
          this.$store.commit('login')
          this.$router.push('/')
        }).catch(error => {
          this.username = ''
          this.password = ''
          this.errorMsg = error.message
          console.log(error)
        })
    }
  }
}
</script>

<style>
.container-fluid {
  margin-right: auto;
  margin-left: auto;
  max-width: 400px;
}
</style>
