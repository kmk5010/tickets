<template>
  <div>
    <b-list-group>
      <b-list-group-item class="d-flex justify-content-between list-group-item-success">
        <b-container>
          <b-row>
            <b-col align="start"><h5 class="font-weight-bold">{{ title }}</h5></b-col>
            <b-col lg="3" md="4" sm="5" align="start" class="font-weight-bold">{{ updateUser }}</b-col>
          </b-row>
          <b-row>
            <b-col align="start">{{ update }}</b-col>
            <b-col lg="3" md="4" sm="5" align="start" class="font-weight-bold">Last update: {{ updateTime }}</b-col>
          </b-row>
        </b-container>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'ticketitem',
  props: ['title', 'update', 'updateUser', 'updateTime']
}
</script>

<style>
</style>
