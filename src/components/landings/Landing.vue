<template>
  <div ref="landing" class="landing toggle-block" :id="id">
    <div class="landing__left">
      <Toggle :isChecked="true" v-if="!noToggle" :num="index" @toggle="toggle" />
      <div class="landing__rating" :style="`background: ${getRatingColor()}`">
        <span>{{conversion}}%</span>
      </div>
      <div class="rating__title">
        <span>Название</span>
        <h3 @click="goToLanding">{{name}}</h3>
      </div>
    </div>

    <div class="landing__right">
      <div class="landing__info">
        <div class="landing__transitions">
        <span>Переходов</span>
        <p>{{transitions}}</p>
        </div>
        <div class="landing__requests">
          <span>Заявок</span>
          <p>{{requests}}</p>
        </div>
      </div>

      <div class="landing__actions">
        <Button v-if="mailing" btnText="Создать рассылку" btnSvg="rocket" wrapperClass="button-wrapper--text" />
        <Button v-if="details" @func="goToLanding" btnText="Просмотреть" btnSvg="details" wrapperClass="button-wrapper--text" />
        <Button v-if="recover" @func="recoverLanding" btnText="Восстановить" btnSvg="arrow" wrapperClass="button-wrapper--text button-wrapper--download" />
      </div>
    </div>
  </div>
</template>

<script>

import Toggle from '../others/Toggle'
import Button from '../forms/Button'

export default {
  name: 'Landing',
  props: ['id', 'index', 'conversion', 'name', 'transitions', 'requests', 'noToggle', 'isRecycle', 'mailing', 'details', 'recover'],
  components: {
    Toggle,
    Button
  },

  methods: {
    toggle() {
      this.$refs.landing.classList.toggle('blur')
    },

    goToLanding() {
      this.$router.push({
        path: `landings/${this.id}`
      })
    },

    recoverLanding() {
      this.$store.dispatch('recoverLanding', this.id)
    },

    getRatingColor() {
      if (this.conversion < 5) return '#EA6363'
      else if (this.conversion < 12) return '#EFC633'
      else if (this.conversion < 16) return '#90B04C'
      else return '#439D4C'
    }
  }
}
</script>

<style lang="sass" scoped>
.landing
  &__left,
  &__right
    display: flex
    width: 50%
    align-items: center

    span
      font-size: 12px
      color: $text-blur

    h3
      cursor: pointer

    p
      font-size: 16px

  &__right
    justify-content: space-between

  .toggle
    margin-right: 25px

  &__info
    display: flex

  &__transitions
    margin-right: 20px

  &__rating
    display: flex
    align-items: center
    justify-content: center
    width: 40px
    height: 40px
    border-radius: 50%
    margin-right: 20px

    span
      font-weight: 500
      color: $title-color

  &__actions
    .button-wrapper:last-of-type
      margin-left: 30px


</style>
