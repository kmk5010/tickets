import api from '@/api'
export default {
  async getAllTickets () {
    await api.authenticate()
    let tickets = await api.service('tickets').find({
      query: {
        $limit: 100,
        status: {
          $ne: 'closed'
        }
      }
    })
    return tickets.data
  },
  async getTicket (id) {
    await api.authenticate()
    let ticket = await api.service('tickets').get(id)
    return ticket
  }
}
