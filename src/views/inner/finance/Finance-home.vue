<template>
  <main class="finance">
    <div class="container">
      <Balance/>
      <Tabs :tabs="tabs" />
      <transition name="fade" mode="out-in">
        <section v-if="tabs[0].show" key="left">
          <History/>
        </section>

        <section v-else key="right">
          <Docs/>
        </section>
      </transition>
    </div>
  </main>
</template>

<script>
import Tabs from '@/components/page-chunks/Tabs'
import History from '@/components/finance/History'
import Docs from '@/components/finance/Docs'
import Balance from '@/components/finance/Balance'

export default {
  name: 'Finance-home',
  components: {
    Tabs,
    History,
    Docs,
    Balance
  },

  data() {
    return {
      tabs: [
        {
          name: "История и детализация",
          show: true
        },
        {
          name: "Документы",
          show: false
        }
      ]
    };
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>
