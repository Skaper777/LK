<template>
  <main class="names-page">
    <div class="names-page__names">
      <Names/>
    </div>

    <div class="names-page__domens">
      <Domens/>
    </div>
  </main>
</template>

<script>

import Names from '@/components/names/Names.vue'
import Domens from '@/components/domens/Domens.vue'

export default {
  name: 'Names-page',
  components: {
    Names,
    Domens
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>

<style lang="sass" scoped>
.names-page
  &__names
    border-bottom: 1px solid #313131


// WHite

.white
  .names-page
    &__names
      border-bottom: 1px solid $sd-card-bg

</style>
