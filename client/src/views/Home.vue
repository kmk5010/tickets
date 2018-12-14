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
            <ticketitem></ticketitem>
            <ticketitem></ticketitem>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ticketitem from '@/components/TicketItem.vue'
export default {
  name: 'home',
  components: {
    ticketitem
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
