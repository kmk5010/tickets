import api from '@/api'
export default {
  async getTickets () {
    await api.authenticate()
    let tickets = await api.service('tickets').find({
      query: {
        status: {
          $ne: 'closed'
        }
      }
    })
    return tickets.data
  }
}
