<template>
  <div class="container">
    <b-card title="Login" class="m-4 rounded-10">
      <b-form>
        <label class="m-2 float-sm-left">Username</label>
        <b-form-input id="username" type="email" v-model="username"></b-form-input>
        <label class="m-2 float-sm-left">Password</label>
        <b-form-input id="password" type="password" v-model="password"></b-form-input>
        <b-button variant="dark" class="m-2" @click="Login">Login</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    Login () {
      console.log('login')
    }
  }
}
</script>

<style>

</style>
