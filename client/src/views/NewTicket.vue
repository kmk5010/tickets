<template>
  <div class="container-fluid">
    <b-card class="mt-4 rounded-10" title="Customer Information">
      <b-container>
        <b-form-group>
          <b-row class="mt-2">
            <b-col>
              <b-form-input id="firstName" type="text" placeholder="First Name" v-model="firstName"></b-form-input>
            </b-col>
            <b-col>
              <b-form-input id="lastName" type="text" placeholder="Last Name" v-model="lastName"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col>
              <b-form-input id="phoneNumber" type="number" placeholder="Phone Number" v-model="phone"></b-form-input>
            </b-col>
            <b-col>
              <b-form-input id="email" type="email" placeholder="Email" v-model="email"></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
      </b-container>
    </b-card>
      <b-card class="mt-4 mb-4 rounded-10" title="Computer Information">
      <b-container>
        <b-form-group>
          <b-row class="mt-2">
            <b-col>
              <b-form-select v-model="priority" :options="priorityOptions"/>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col>
              <b-form-input id="model" type="text" placeholder="Model" v-model="model"></b-form-input>
            </b-col>
            <b-col>
              <b-form-input id="serial" type="text" placeholder="Serial Number" v-model="serial"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col>
              <b-form-textarea id="issue" type="textarea" placeholder="Issue Description" :rows="3" v-model="issue"></b-form-textarea>
            </b-col>
          </b-row>
          <b-button class="m-2" @click="submitTicket" variant="dark">Submit</b-button>
        </b-form-group>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'NewTicket',
  data () {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      model: '',
      serial: '',
      issue: '',
      priority: null,
      priorityOptions: [
        { value: null, text: 'Priority' },
        { value: 'low', text: 'Low' },
        { value: 'medium', text: 'Medium' },
        { value: 'high', text: 'High' }
      ]
    }
  },
  methods: {
    submitTicket () {
      api.authenticate().then(() =>
        api.service('tickets').create({
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          model: this.model,
          serial: this.serial,
          issue: this.issue,
          status: 'queued',
          priority: this.priority,
          createdBy: this.$store.state.username
        }))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container-fluid {
  margin-right: auto;
  margin-left: auto;
  max-width: 800px;
}
</style>
