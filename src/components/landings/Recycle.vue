<template>
  <div class="recycle popup" v-if="show">
    <div class="popup__blur" @click="show = false"></div>
    <div class="popup__wrapper popup__wrapper--big">
      <div class="popup__close" @click="show = false"></div>
      <div class="recycle__title">
        <h2>Корзина</h2>
        <span>{{`${landings.length} лендингов`}}</span>
      </div>

      <ul>
        <li v-for="land in landings" :key="land.id">
          <Landing
            :noToggle="true"
            :id=land.id
            :conversion=land.conversion
            :name=land.name
            :transitions=land.transitions
            :isRecycle="true"
            :requests=land.requests
            :recover="true"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import Landing from './Landing'

export default {
  name: 'Recycle-landings',
  components: {
    Landing
  },

  data() {
    return {
      show: false
    }
  },

  mounted() {
    this.$eventHub.$on('openLandingsRecycle', () => {
      this.show = true
    })
  },

  computed: {
    landings() {
      return this.$store.getters.getLandingsRecycle
    }
  }
}
</script>
