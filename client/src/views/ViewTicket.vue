<template>
  <div class="container-fluid">
    <b-card class="mt-4 rounded-10">
      <b-container>
        <b-row class="mt-2">
          <b-col align="center">
            <h4>{{ this.ticket._id }}</h4>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col align="left">
            Name: {{ this.ticket.firstName}} {{ this.ticket.lastName }}
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col align="left">
            Email: {{ this.ticket.email}}
          </b-col>
          <b-col align="left">
            Phone: {{ this.ticket.phone }}
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col align="left" align-self="center">
            Model: {{ this.ticket.model }}
          </b-col>
          <b-col align="left" align-self="center">
            Serial: {{ this.ticket.serial }}
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col align="left">
            Issue Descrption: {{ this.ticket.issue }}
          </b-col>
        </b-row>
      </b-container>
    </b-card>
      <b-card class="mt-4 mb-4 rounded-10">
      <b-container>
        <b-form-group>
          <b-row class="mt-2">
            <b-col>
              <b-form-select/>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col>
              <b-form-input id="model" type="text" placeholder="Model"></b-form-input>
            </b-col>
            <b-col>
              <b-form-input id="serial" type="text" placeholder="Serial Number"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col>
              <b-form-textarea id="issue" type="textarea" placeholder="Issue Description" :rows="3"></b-form-textarea>
            </b-col>
          </b-row>
          <b-button class="m-2" variant="dark">Submit</b-button>
        </b-form-group>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import ticketService from '@/services/ticketService'
export default {
  name: 'ViewTicket',
  data () {
    return {
      ticket: {}
    }
  },
  mounted () {
    ticketService.getTicket(this.$route.params.id)
      .then(data => {
        this.ticket = data
      })
      .catch(error => console.log(error.message))
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
