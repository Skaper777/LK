<template>
  <section class="current-reports">
    <div class="content-container container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
      />
      <ul class="current-reports__list">
        <li v-for="mailing in complitedMailings" :key="mailing.id">
          <Complited :mailing="mailing" />
        </li>
        <li v-for="mailing in currentMailings" :key="mailing.id">
          <Current :mailing="mailing" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

import BlockDesc from '../page-chunks/Block-description'
import Complited from '@/components/mailing/Complited-mailing'
import Current from '@/components/mailing/Current-mailing'

export default {
  name: 'Current-reports',
  components: {
    BlockDesc,
    Complited,
    Current
  },

  data() {
    return {
      blockDescription: {
        title: "Текущие рассылки",
        text: "Статистика отправки рассылок"
      }
    }
  },

  computed: {
    complitedMailings() {
      return this.$store.getters.getComplitedMailings
    },

    currentMailings() {
      return this.$store.getters.getCurrentMailings
    }
  }
}
</script>

<style lang="sass" scoped>
.current-reports
  padding-top: 20px
  padding-bottom: 35px
  border-bottom: 1px solid #313131

  @media(max-width: 1024px)
    border-bottom: none
    padding-top: 0
    padding-bottom: 0

  &__list
    @media(max-width: 1240px)
      width: 100%


// White

.white
  .current-reports
    border-bottom: 1px solid #F4F4F4

</style>
