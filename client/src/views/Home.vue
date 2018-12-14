<template>
  <div class="container-fluid">
    <div class="d-flex mx-4 mt-4">
      <b-button class="btn btn-light btn-block mt-2 mr-2">In Progress</b-button>
      <b-button class="btn btn-light btn-block mt-2 mr-2">Queued</b-button>
      <b-button class="btn btn-light btn-block mt-2">Pending</b-button>
    </div>
    <div class="d-flex flex-column mt-4 mx-4">
      <ticketitem class="mb-2"></ticketitem>
      <ticketitem class="mb-2"></ticketitem>
      <ticketitem class="mb-2"></ticketitem>
      <ticketitem class="mb-2"></ticketitem>
    </div>
  </div>
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
.container-fluid {
  margin-right: auto;
  margin-left: auto;
  max-width: 800px;
}
</style>
