<template>
  <main class="tarifs">
    <div class="container">
      <Banner/>
      <Table/>
    </div>
  </main>
</template>

<script>
import Banner from '@/components/settings/Tarifs-banner'
import Table from '@/components/settings/Tarifs-table'

export default {
  name: 'Settings-tarifs',
  components: {
    Banner,
    Table
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>

<style lang="sass" scoped>
.tarifs
  padding-top: 20px

</style>
