<template>
  <div class="container-fluid">
    <div class="d-flex mx-4 mt-4">
      <b-button class="btn btn-light btn-block mt-2 mr-2"
        :class="{ active: isActiveInProgress }"
        @click="changeStatus('inProgress')">
        In Progress
      </b-button>
      <b-button class="btn btn-light btn-block mt-2 mr-2"
        :class="{ active: isActiveQueued }"
        @click="changeStatus('queued')">
        Queued
      </b-button>
      <b-button class="btn btn-light btn-block mt-2"
        :class="{ active: isActivePending }"
        @click="changeStatus('pending')">
        Pending
      </b-button>
    </div>
    <div class="d-flex flex-column mt-4 mx-4">
        <span v-for="ticket in ticketsByStatus" :key="ticket._id">
          <ticketitem class="mb-2"
            :title="ticket.firstName"
            :update="ticket.issue"
            :updateUser="ticket.createdBy"
            :updateTime="ticket.createdAt"
            :priority="ticket.priority">
          </ticketitem>
        </span>
        <br>
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
      tickets: {},
      ticketsByStatus: {},
      currentStatus: 'inProgress',
      isActiveInProgress: true,
      isActiveQueued: false,
      isActivePending: false
    }
  },
  mounted () {
    ticketService.getTickets()
      .then(data => {
        this.tickets = data
        this.ticketsByStatus = data.filter(tickets => tickets.status === this.currentStatus)
      })
      .catch(error => console.log(error.message))
  },
  methods: {
    changeStatus (newStatus) {
      this.ticketsByStatus = this.tickets.filter(tickets => tickets.status === newStatus)
      if (newStatus === 'inProgress') {
        this.isActiveInProgress = true
        this.isActiveQueued = false
        this.isActivePending = false
      }
      if (newStatus === 'queued') {
        this.isActiveQueued = true
        this.isActiveInProgress = false
        this.isActivePending = false
      }
      if (newStatus === 'pending') {
        this.isActivePending = true
        this.isActiveQueued = false
        this.isActiveInProgress = false
      }
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
.active {
  background-color: lightskyblue !important;
}
.btn:focus, .btn:active:focus, .btn.active:focus{
    box-shadow:none !important;
}
</style>
