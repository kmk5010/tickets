<template>
  <div class="container-fluid">
    <div class="d-flex mx-4 mt-4">
      <b-button class="btn btn-light btn-block mt-2 mr-2">In Progress</b-button>
      <b-button class="btn btn-light btn-block mt-2 mr-2">Queued</b-button>
      <b-button class="btn btn-light btn-block mt-2">Pending</b-button>
    </div>
    <div class="d-flex flex-column mt-4 mx-4">
        <span v-for="ticket in tickets" :key="ticket._id">
          <ticketitem class="mb-2"
            :title="ticket.firstName"
            :update="ticket.issue"
            :updateUser="ticket.createdBy">
          </ticketitem>
        </span>
    </div>
  </div>
</template>

<script>
import ticketitem from '@/components/TicketItem.vue'
import ticketService from '@/services/ticketService'
export default {
  name: 'home',
  components: {
    ticketitem
  },
  data () {
    return {
      tickets: {}
    }
  },
  mounted () {
    ticketService.getTickets()
      .then(data => {
        this.tickets = data
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
