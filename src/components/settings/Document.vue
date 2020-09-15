<template>
  <div class="document">
    <h3>{{doc.title}}</h3>
    <div class="document__right">

      <p v-if="doc.status">
        <span class="document__right-lamp" :style="`background-color: ${doc.status === 'Не подписан' ? '#D26C66' : '#82C198'}`"></span>
        {{doc.status}}
      </p>
      <Button v-if="doc.status === 'Не подписан'" @func="form = true" btnText="Подписать договор" btnSvg="edit" wrapperClass="button-wrapper--narrow" />
      <Button v-else btnText="Просмотреть" btnSvg="details"  wrapperClass="button-wrapper--text" />
    </div>

    <transition name="fade">
      <div v-if="form" class="document-form popup">
        <div class="popup__blur" @click="closeForm"></div>
        <div class="popup__wrapper popup__wrapper--small">
          <div class="popup__close" @click="closeForm"></div>
          <div class="document-form__steps steps">
            <p>{{step}} шаг из 3</p>
            <div class="document-form__dots dots">
              <span
                class="dots__dot"
                v-for="(i, index) of 3"
                :key="index"
                :class="index < step ? 'dots__dot--active' : false"
              ></span>
            </div>
          </div>

          <div class="document-form__step" v-show="step === 1">
            <h2>Добавьте реквизиты</h2>
            <Reqs :reqs="reqs" />
            <Button @func="stepPlus" btnText="Продолжить" btnSvg="arrow" />
          </div>

          <div class="document-form__step" v-show="step === 2">
            <h2>Скачайте и подпишите договор</h2>
            <div class="document-form__doc">
              <img src="../../assets/img/settings/contract.png" alt="">
              <p>pdf, 345 кб</p>
            </div>
            <div class="document-form__step-btns">
              <Button @func="stepMinus" btnText="Назад" btnSvg="arrow" wrapperClass="button-wrapper--text" />
              <a href="" download="">
                <Button @func="stepPlus" btnText="Скачать договор" btnSvg="arrow" wrapperClass="button-wrapper--download" />
              </a>
            </div>
          </div>

          <div class="document-form__step document-form__step--last" v-show="step === 3">
            <h2>Загрузите подписанный договор</h2>
            <div class="document-form__step-btns">
              <Button @func="stepMinus" btnText="Назад" btnSvg="arrow" wrapperClass="button-wrapper--text" />
              <File @func="closeForm" id="docFile" svg="arrow" text="Загрузить договор" fileClass="big file-button--like-btn" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from '../forms/Button'
import File from '../forms/File-button'
import Reqs from './Requisites'

export default {
  name: 'Doc',
  props: ['doc'],
  components: {
    Button,
    Reqs,
    File
  },

  data() {
    return {
      form: false,
      step: 1,
      reqs: {}
    }
  },

  methods: {
    stepPlus() {
      this.step++
    },

    stepMinus() {
      this.step--
    },

    closeForm() {
      this.$store.dispatch('changeStatus', this.doc.id)
      this.form = false
      this.step = 1
      this.reqs = {}
    }
  }
}
</script>

<style lang="sass" scoped>
.document
  display: flex
  align-items: center
  justify-content: space-between
  height: 70px
  padding: 0 30px
  background: $modal-bg
  border-radius: 10px
  margin-bottom: 5px

  &__right
    width: 38%
    max-width: 450px
    display: flex
    align-items: center

    &-lamp
      display: inline-block
      width: 8px
      height: 8px
      border-radius: 50%

    p
      font-size: 12px

    .button-wrapper
      margin-left: auto

  &-form
    .popup__wrapper--small
      width: 670px

    &__steps
      width: 145px
      margin: 0 auto
      margin-bottom: 20px

    &__step
      display: flex
      flex-wrap: wrap
      justify-content: center

      .button-wrapper
        margin-top: 20px

      .button-wrapper--text
        margin-right: 20px

      &--last
        .document-form__step-btns
          display: flex

    &__doc
      text-align: center

      p
        margin-bottom: 20px

    h2
      margin-bottom: 37px


// SP

.sp
  .document
    background: $sp-card-bg

// SD

.sd
  .document
    background: white

</style>
