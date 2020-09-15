<template>
  <section class="settings-block">
    <div class="content-container container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
      />

      <div class="payments-block">
        <Tabs :tabs="tabs" />
        <transition name="fade" mode="out-in">
          <div v-if="tabs[0].show" key="left" class="payments-block__card">
            <Card/>
          </div>

          <div v-else key="right" class="payments-block__requisites">
            <Reqs :reqs="reqs" :isEdit="true" />
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import BlockDesc from '../page-chunks/Block-description'
import Tabs from '../page-chunks/Tabs'
import Card from './Card'
import Reqs from './Requisites'

export default {
  name: 'Pay-settings',
  components: {
    BlockDesc,
    Tabs,
    Card,
    Reqs
  },

  data() {
    return {
      tabs: [
        {
          name: 'Банковская карта',
          show: true
        },
        {
          name: 'Реквизиты юр.лица',
          show: false
        }
      ],

      blockDescription: {
        title: "Платежная информация",
        text: "Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний"
      },
    }
  },

  computed: {
    reqs() {
      return this.$store.getters.getReqs
    }
  }
}
</script>

<style lang="sass" scoped>
.payments-block
  .tabs
    margin-bottom: 30px

</style>
