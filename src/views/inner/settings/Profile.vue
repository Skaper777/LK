<template>
  <main>
    <Main/>
    <Pay/>
    <Hook/>
  </main>
</template>

<script>
import Main from '@/components/settings/Main'
import Pay from '@/components/settings/Pay'
import Hook from '@/components/settings/Web-hook'

export default {
  name: 'Settings-profile',
  components: {
    Main,
    Pay,
    Hook
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>
