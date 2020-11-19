export default {
  setDestinations({ destinations }, value) {
    destinations.splice(0, destinations.length)
    destinations.push(...value)
  },
  setTickets({ tickets }, value) {
    tickets.splice(0, tickets.length)
    tickets.push(...value)
  },
  setDestination({ destination }, value) {
    if (destination) Object.assign(destination, value)
    else destination = value
  },
}
