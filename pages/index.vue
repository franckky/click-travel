<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <h1 class="title">Choose your dream destination...</h1>
        <div class="links">
          <!-- <nuxt-link :to="`${data.destination.code}`"> -->
          <nuxt-link :to="`1`">
            <b-button class="giant-button" variant="outline-primary">
              Test Button nuxt link
            </b-button>
          </nuxt-link>
          <a href="#" class="giant-button"> San Francisco, USA </a>
          <a href="#" class="giant-button"> Québec, Canada </a>
          <a href="#" class="giant-button"> Bora Bora, Polynésie </a>
          <a href="#" class="giant-button"> Torres del Paine, Chile </a>
          <!-- <Destination :destinations="destinations" /> -->
          <ul class="giant-button">
            <li v-for="destination in destinations" :key="destination.code">
              {{ destination.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('loadDestinations')
  },
  computed: {
    ...mapGetters({
      destinations: 'getDestinations',
    }),
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>
