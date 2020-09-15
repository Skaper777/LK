<template>
  <div class="recycle popup" v-if="show">
    <div class="popup__blur" @click="show = false"></div>
    <div class="popup__wrapper popup__wrapper--big">
      <div class="popup__close" @click="show = false"></div>
      <div class="recycle__title">
        <h2>Корзина</h2>
        <span>{{tabs[0].show ? `${bases.length} баз` : `${phones.length} номеров`}}</span>
      </div>
      <Tabs :tabs="tabs" />

      <transition name="fade" mode="out-in">
        <div v-if="tabs[0].show" key="left">
          <ul>
            <li v-for="(base, index) in bases" :key="index">
              <BaseMailing
                :id="base.id"
                :index="index"
                :title="base.title"
                :rating="base.rating"
                :length="base.numbers.length"
                :toRestore="true"
                :phones="base.numbers"
                :noToggle="true"
              />
            </li>
          </ul>
        </div>

        <div v-else key="right">
          <Phones :phones="phones" :toRestore="true" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

import Tabs from '../page-chunks/Tabs'
import BaseMailing from './Base-mailing'
import Phones from './Phones'

export default {
  name: 'Recycle-bases',
  components: {
    Tabs,
    BaseMailing,
    Phones
  },
  data() {
    return {
      show: false,
      bases: [],
      phones: [],
      tabs: [
        {
          name: 'Базы',
          show: true
        },
        {
          name: 'Номера',
          show: false
        }
      ]
    }
  },

  computed: {
    basesList() {
      return this.$store.getters.getRecycleBases
    },

    phonesList() {
      return this.$store.getters.getRecyclePhones
    }
  },

  mounted() {
    this.$eventHub.$on('openBasesRecycle', () => {
      this.show = true
    })

    this.bases = this.basesList
    this.phones = this.phonesList
  }
}
</script>

<style lang="sass" scoped>
.recycle
  .tabs
    margin-bottom: 25px

</style>
