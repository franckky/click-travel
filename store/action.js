import service from './service'

export default {
  async loadDestinations({ commit }) {
    const data = await service.getAll()
    commit('setDestinations', data.destinations)
  },
  async loadTickets({ commit }) {
    const data = await service.getAll()
    commit('setTickets', data.tickets)
  },
  async loadDestination({ commit, state }, id) {
    const destination = await service.getById(id)
    commit('setDestination', destination)
  },
}
