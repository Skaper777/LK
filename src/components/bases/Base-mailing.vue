<template>
  <div :id='id'>
    <div ref="base" class="base toggle-block">
      <div class="base__left">
        <Toggle :isChecked="true" v-if="!noToggle" :num="index" @toggle="toggle" />
        <div v-if="rating" class="base__rating">
          <img :src="require(`@/assets/img/rating/${rating}.png`)" alt="rating">
        </div>
        <div @click="details = true" class="base__title">
          <span>Название базы</span>
          <h3>{{title}}</h3>
        </div>
      </div>

      <div class="base__right">
        <div class="base__numbers">
          <span>Кол-во номеров</span>
          <p>{{length}}</p>
        </div>
        <div class="base__actions">
          <Button v-if="toRestore" btnText="Восстановить" btnSvg="arrow" wrapperClass="button-wrapper--text button-wrapper--download" />
          <Button v-if="createMailing" btnText="Создать рассылку" btnSvg="rocket" wrapperClass="button-wrapper--text" />
          <Button v-if="inBlackList" btnText="В черный список" btnSvg="arrow" wrapperClass="button-wrapper--text button-wrapper--error" />
          <Button v-if="inBases" btnText="В базы рассылок" btnSvg="arrow" wrapperClass="button-wrapper--text button-wrapper--download" />
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div ref="basePopup" class="base-popup popup" v-show="details">
        <div class="popup__blur" @click="details = false"></div>
        <div class="popup__wrapper popup__wrapper--big">
          <div class="popup__close" @click="details = false"></div>
          <header class="base-popup__header">
            <div class="base-popup__header-left">
              <Toggle :isChecked="true" :num="'popup' + index" @toggle="togglePopup" />
              <div v-if="rating" class="base-popup__rating">
                <img :src="require(`@/assets/img/rating/${rating}.png`)" alt="rating">
              </div>
              <div class="base-popup__title">
                <h2>{{title}}</h2>
                <span>{{length}} номеров</span>
              </div>
            </div>
            <div class="base-popup__header-right">
              <Button btnText="Добавить номер" btnSvg="plus" wrapperClass="button-wrapper--text" />
              <Button btnText="Проверка базы" btnSvg="recover" wrapperClass="button-wrapper--text" />
              <Button v-if="inBlackList" btnText="В черный список" btnSvg="arrow" wrapperClass="button-wrapper--text button-wrapper--error" />
              <Button btnText="Удалить базу" btnSvg="plus" wrapperClass="button-wrapper--text button-wrapper--error" />
            </div>
          </header>
          <Phones :phones="phones" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import Toggle from "../others/Toggle";
import Button from "../forms/Button";
import Phones from './Phones'

export default {
  name: 'Base-mailing',
  components: {
    Toggle,
    Button,
    Phones
  },
  props: ['id', 'noToggle', 'index', 'title', 'rating', 'length', 'createMailing', 'inBlackList', 'inBases', 'toRestore', 'phones'],
  data() {
    return {
      details: false
    }
  },
  methods: {
    toggle() {
      this.$refs.base.classList.toggle("blur");
      this.$refs.basePopup.querySelector('input').checked = !this.$refs.basePopup.querySelector('input').checked
    },

    togglePopup() {
      this.$refs.base.classList.toggle("blur");
      this.$refs.base.querySelector('input').checked = !this.$refs.base.querySelector('input').checked
    }
  }
}
</script>

<style lang="sass" scoped>
.base
  &__title
    cursor: pointer

  &__left,
  &__right
    display: flex
    align-items: center

    span
      font-size: 12px
      color: $text-blur

  &__numbers
    text-align: center
    p
      font-size: 16px

  &__left
    div
      margin-left: 20px

  &__right
    div
      margin-left: 24px


.base-popup
  &__header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 35px

    span
      font-size: 12px
      color: $text-blur

    &-left
      display: flex
      align-items: center

      h2
        margin-bottom: 0

      div
        margin-right: 20px

    &-right
      div
        margin-left: 24px

</style>
