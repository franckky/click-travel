<template>
  <!-- <TicketList /> -->
  <ul id="example-1">
    <li v-for="ticket in tickets" :key="ticket.class">
      {{ ticket.flight }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('loadTickets')
  },
  computed: {
    ...mapGetters({
      destination: 'getTickets',
    }),
  },
}
</script>
