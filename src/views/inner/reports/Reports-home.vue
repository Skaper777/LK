<template>
  <main>
    <Current/>
    <Future/>
    <Past/>
  </main>
</template>

<script>

import Current from '@/components/reports/Current-reports'
import Future from '@/components/reports/Future-reports'
import Past from '@/components/reports/Past-reports'

export default {
  name: 'Reports-home',
  components: {
    Current,
    Future,
    Past
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>

<style lang="sass" scoped>

</style>
