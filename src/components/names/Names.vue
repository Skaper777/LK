<template>
  <section class="names">
    <div class="names__container content-container container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
        :btnText="blockDescription.btn.text"
        :btnSvg="blockDescription.btn.svg"
        @open="openNamePopup"
      />
      <div class="names__list">
        <ul>
          <li v-for="(name, index) in names" :key="index">
            <Name
              :id="name.id"
              :title="name.title"
              :index="'name' + index"
              :megafonStatus="name.operators.megafon"
              :beelineStatus="name.operators.beeline"
              :tele2Status="name.operators.tele2"
              :mtsStatus="name.operators.mts"
              :otherStatus="name.operators.others"
            />
          </li>
        </ul>
        <Button v-if="namesList.length > 3" @func="toggleNames" :btnText="allNames ? 'Свернуть' : 'Показать еще'" btnSvg="dots" wrapperClass="button-wrapper--narrow"  />
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <NameForm/>
    </transition>
  </section>
</template>

<script>
import BlockDesc from "../page-chunks/Block-description";
import Name from "./Name";
import Button from '../forms/Button'
import NameForm from './Name-form'

export default {
  name: "Names",
  components: {
    BlockDesc,
    Name,
    Button,
    NameForm
  },

  data() {
    return {
      allNames: false,
      names: '',
      blockDescription: {
        title: "Имена отправителей",
        text:
          "Отправляйте рассылки от имени своей организации После добавления имени, оно отправляется на модерацию к опреаторам. Модерация имеет следующие статусы:",
        btn: {
          text: "Новое имя",
          svg: "plus"
        }
      }
    };
  },

  methods: {
    toggleNames() {
      this.allNames = !this.allNames
    },

    openNamePopup() {
      this.$eventHub.$emit('openNamePopup')
    }
  },

  computed: {
    namesList() {
      return this.$store.getters.getNames
    },

    firstNamesList() {
      return this.$store.getters.getFirstNames
    }
  },

  mounted() {
    this.names = this.firstNamesList
  },

  updated() {
    if (this.allNames) this.names = this.namesList
    else this.names = this.firstNamesList
  }
};
</script>

<style lang="sass" scoped>
.names
  padding: 20px 0 40px

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
