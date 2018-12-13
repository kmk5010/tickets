<template>
  <b-container class="pt-4">
    <b-row align-h="center">
      <b-col>
        <b-row align-h="start" class="mb-2">
          <b-button-group>
            <b-button class="btn btn-outline-light block">In Progress</b-button>
            <b-button class="btn btn-outline-light block">Queued</b-button>
            <b-button class="btn btn-outline-light">Pending</b-button>
          </b-button-group>
        </b-row>
        <b-row>
          <b-col align="start">
            <ticketlist></ticketlist>
            <ticketlist></ticketlist>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ticketlist from '@/components/TicketList.vue'
export default {
  name: 'home',
  components: {
    ticketlist
  }
}
</script>

<style scoped>
.col {
  padding-left: 0px;
  padding-right: 15px;
}
.row {
  margin-left: 0px;
}

</style>
