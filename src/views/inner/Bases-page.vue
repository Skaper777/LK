<template>
  <main>
    <BaseMailing/>
    <BlackList/>
  </main>
</template>

<script>

import BaseMailing from '@/components/bases/Bases-mailing'
import BlackList from '@/components/bases/Black-list'

export default {
  name: 'Bases',
  components: {
    BaseMailing,
    BlackList
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>

<style lang="sass" scoped>

</style>
