<template>
  <div>
    <b-list-group>
      <b-list-group-item class="d-flex justify-content-between list-group-item-success" href="login">
        <b-container>
          <b-row>
            <b-col align="start"><h5 class="font-weight-bold">Title Here</h5></b-col>
            <b-col lg="3" md="4" sm="5" align="start" class="font-weight-bold">testuser</b-col>
          </b-row>
          <b-row>
            <b-col align="start">this is a summery blah blah blah</b-col>
            <b-col lg="3" md="4" sm="5" align="start" class="font-weight-bold">Last update: 20m</b-col>
          </b-row>
        </b-container>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'ticketitem'
}
</script>

<style>
</style>
