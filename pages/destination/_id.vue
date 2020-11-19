<template>
  <DestinationDetail />
</template>

<script>
import { mapGetters } from 'vuex'
import DestinationDetail from '../../components/destination/DestinationDetail'

export default {
  components: {
    DestinationDetail,
  },
  async asyncData({ store }) {
    await store.dispatch('loadDestination')
  },
  computed: {
    ...mapGetters({
      destination: 'getDestination',
    }),
  },
}
</script>
