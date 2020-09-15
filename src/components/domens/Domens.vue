<template>
  <section class="domens">
    <div class="domens__container content-container container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
        :btnText="blockDescription.btn.text"
        :btnSvg="blockDescription.btn.svg"
        @open="openDomenPopup"
      />
      <div class="domens__list">
        <ul>
          <li v-for="(domen, index) in domens" :key="index">
            <Domen :id="domen.id" :title="domen.title" :index="'domen' + index" />
          </li>
        </ul>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <DomenForm/>
    </transition>
  </section>
</template>

<script>

import BlockDesc from '../page-chunks/Block-description'
import Domen from './Domen'
import DomenForm from './Domen-form'

export default {
  name: 'Domens',
  components: {
    BlockDesc,
    Domen,
    DomenForm
  },

  data() {
    return {
      blockDescription: {
        title: "Домены",
        text: "Именные домены для использования в посадочных страницах",
        btn: {
          text: "Новый домен",
          svg: "plus"
        }
      }
    }
  },

  computed: {
    domens() {
      return this.$store.getters.getDomens;
    }
  },

  methods: {
    openDomenPopup() {
      this.$eventHub.$emit('openDomenPopup')
    }
  }
}
</script>

<style lang="sass" scoped>
.domens
  padding: 55px 0

  &__list
    min-width: 725px

    ul
      display: flex
      flex-wrap: wrap
      width: 100%
      margin-bottom: 32px

      li
        width: 100%

</style>
