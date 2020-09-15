<template>
  <main>
    <Contracts/>
    <Other/>
  </main>
</template>

<script>
import Contracts from '@/components/settings/Contracts'
import Other from '@/components/settings/Other-docs'

export default {
  name: 'Settings-docs',
  components: {
    Contracts,
    Other
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>
