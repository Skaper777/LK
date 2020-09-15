<template>
  <main>
    <LandingBlock/>
  </main>
</template>

<script>

import LandingBlock from '@/components/landings/Landing-block'

export default {
  name: 'Landings-home',
  components: {
    LandingBlock
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>

<style lang="sass" scoped>

</style>
