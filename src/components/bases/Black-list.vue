<template>
  <section class="black-list">
    <div class="content-container container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
        :btnText="blockDescription.btn.text"
        :wrapper="blockDescription.btn.wrapper"
        @open="addToBlackList"
      />
      <div class="black-list__list">
        <Tabs :tabs="tabs" />

        <transition name="fade" mode="out-in">
          <div v-if="tabs[0].show" key="left">
            <ul>
              <li v-for="(base, index) in bases" :key="index">
                <BaseMailing
                  :id="base.id"
                  :index="'black' + index"
                  :title="base.title"
                  :rating="base.rating"
                  :length="base.numbers.length"
                  :inBases="true"
                  :phones="base.numbers"
                />
              </li>
            </ul>
            <Button v-if="basesList.length > 3" @func="toggleBasesList" :btnText="allBases ? 'Свернуть' : 'Показать еще'" btnSvg="dots" wrapperClass="button-wrapper--narrow" />
          </div>

          <div v-else key="right">
            <Phones :phones="phones" :inBases="true" :toRemove="true" />
          </div>
        </transition>

      </div>
    </div>
  </section>
</template>

<script>

import BlockDesc from '../page-chunks/Block-description'
import BaseMailing from './Base-mailing'
import Phones from './Phones'
import Tabs from '../page-chunks/Tabs'
import Button from "../forms/Button"

export default {
  name: 'Black-list',
  components: {
    BlockDesc,
    BaseMailing,
    Phones,
    Tabs,
    Button
  },

  data() {
    return {
      tabs: [
        {
          name: "Базы",
          show: true
        },
        {
          name: "Номера",
          show: false
        }
      ],

      bases: '',
      phones: '',
      allBases: false,
      blockDescription: {
        title: "Черный список",
        text: "Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний",
        btn: {
          text: "Добавить в черный список",
          wrapper: 'button-wrapper--no-svg'
        }
      }
    }
  },

  methods: {
    addToBlackList() {

    },

    toggleBasesList() {
      this.allBases = !this.allBases
    }
  },

  computed: {
    basesList() {
      return this.$store.getters.getBlackBases
    },

    firstBasesList() {
      return this.$store.getters.getFirstBlackBases
    },

    phonesList() {
      return this.$store.getters.getPhones
    }
  },

  mounted() {
    this.bases = this.firstBasesList
    this.phones = this.phonesList
  },

  updated() {
    if (this.allBases) this.bases = this.basesList
    else this.bases = this.firstBasesList
  }
}
</script>

<style lang="sass" scoped>
.black-list
  padding: 40px 0

  ul
    margin-bottom: 20px

</style>
