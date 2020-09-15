<template>
  <main>
    <section class="landing-form">
      <div class="container">
        <div class="content-container">
          <BlockDesc
            :title="blockDescription.title"
            :text="blockDescription.text"
          />
          <form>
            <div class="landing-form__steps steps">
              <p>{{step}} шаг из 3</p>
              <div class="landing-form__dots dots">
                <span
                  class="dots__dot"
                  v-for="(i, index) of 3"
                  :key="index"
                  :class="index < step ? 'dots__dot--active' : false"
                ></span>
              </div>
            </div>

            <div class="landing-form__step landing-form__step--first" v-show="step === 1" style="max-width: 400px">
              <h3>Введите название для страницы</h3>
              <Input v-model="landing.name" inputId="landingName" plchldr="Название страницы" />
            </div>

            <div class="landing-form__step landing-form__step--with-mobile" v-show="step === 2">
              <div class="landing-form__step-mobile mobile">
                <div class="mobile__wrapper">
                  <div>
                    <div class="mobile__image">
                      <svg width="224" height="154" viewBox="0 0 224 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M205.46 0.133057H18.5487C8.31885 0.133057 0 8.44917 0 18.6911V135.33C0 145.56 8.31885 153.867 18.5487 153.867H205.459C215.689 153.867 223.999 145.56 223.999 135.33V18.6911C224 8.44917 215.69 0.133057 205.46 0.133057ZM136.051 27.7325C145.944 27.7325 153.966 35.756 153.966 45.6482C153.966 55.5405 145.943 63.564 136.051 63.564C126.155 63.564 118.135 55.5405 118.135 45.6482C118.135 35.756 126.155 27.7325 136.051 27.7325ZM169.643 136.721H111.998H56.922C51.9739 136.721 49.7703 133.141 52.0008 128.725L82.7476 67.8253C84.9754 63.4092 89.2213 63.015 92.2281 66.9441L123.145 107.348C126.152 111.277 131.407 111.612 134.886 108.091L142.449 100.432C145.925 96.9113 151.046 97.3472 153.882 101.399L173.468 129.375C176.299 133.434 174.591 136.721 169.643 136.721Z" fill="#C4C4C4"/>
                      </svg>
                      <File :file="landing.image" text="Добавить изображение" id="mobileImg" name="mobile-img" accept="image/*" />
                    </div>
                    <div class="mobile__titles">
                      <textarea  v-model="landing.title" placeholder="Введите текст заголовка"></textarea>
                      <textarea  v-model="landing.subtitle" placeholder="Введите текст подзаголовка"></textarea>
                    </div>
                    <div class="mobile__inputs">
                      <div class="select-wrapper">
                        <multiselect
                          class="select"
                          :show-labels="false"
                          :options="inputs"
                          v-model="landing.inputs[0]"
                          placeholder="Выберете поле"
                        >
                        </multiselect>
                      </div>
                      <div class="select-wrapper" v-show="secondInput">
                        <multiselect
                          class="select"
                          :show-labels="false"
                          :options="inputs"
                          v-model="landing.inputs[1]"
                          placeholder="Выберете поле"
                        >
                        </multiselect>
                      </div>
                      <Button @func="addInput" :btnText="secondInput ? 'Удалить поле' : 'Добавить поле ввода'" btnSvg="plus" :wrapperClass="secondInput ? 'button-wrapper--text button-wrapper--error' : 'button-wrapper--text'" />
                    </div>
                  </div>
                  <div class="mobile__button">
                    <input :style="`background: ${landing.btn.color}`" type="text" v-model="landing.btn.text" placeholder="Надпись на кнопке">
                  </div>
                </div>
              </div>
              <div class="landing-form__step-options landing-form__step-options--first">
                <div class="landing-form__step-options-img">
                  <h3>Загрузите изображение</h3>
                  <p>Загружайте изображения для лучшей визуальной идентификации Вашего предложения пользователями</p>
                </div>
                <div class="landing-form__step-options-title">
                  <h3>Измените текст заголовка</h3>
                  <p>Сформулируйте Ваше предложение для пользователей</p>
                </div>
                <div class="landing-form__step-options-inputs">
                  <h3>Выберете поля ввода</h3>
                  <p>Выбрете и добвьте необходимые поля ввода для данных пользователей которых заинтересовало предложение</p>
                </div>
                <div class="landing-form__step-options-colors">
                  <h3>Измените текст и цвет кнопки</h3>
                  <div>
                    <input type="radio" v-model="landing.btn.color" name="btnColor" value="#496EB7" id="btn-blue" checked>
                    <label for="btn-blue" style="background-color: #496EB7"></label>
                    <input type="radio" v-model="landing.btn.color" name="btnColor" value="#EF3E33" id="btn-red">
                    <label for="btn-red" style="background-color: #EF3E33"></label>
                    <input type="radio" v-model="landing.btn.color" name="btnColor" value="#EFC633" id="btn-yellow">
                    <label for="btn-yellow" style="background-color: #EFC633"></label>
                    <input type="radio" v-model="landing.btn.color" name="btnColor" value="#90B04C" id="btn-green">
                    <label for="btn-green" style="background-color: #90B04C"></label>
                    <input type="radio" v-model="landing.btn.color" name="btnColor" value="#AF51F9" id="btn-violet">
                    <label for="btn-violet" style="background-color: #AF51F9"></label>
                    <input type="radio" v-model="landing.btn.color" name="btnColor" value="#A4BDFF" id="btn-light-blue">
                    <label for="btn-light-blue" style="background-color: #A4BDFF"></label>
                  </div>
                </div>
              </div>
            </div>

            <div class="landing-form__step landing-form__step--with-mobile" v-show="step === 3">
              <div class="landing-form__step-mobile mobile">
                <div class="mobile__wrapper mobile__wrapper--last">
                  <div class="mobile__icon" :style="`background-color: ${landing.iconColor}`">
                  </div>
                  <div class="mobile__titles">
                    <textarea  v-model="landing.success.title"></textarea>
                    <textarea class="mobile__titles-successText" v-model="landing.success.text"></textarea>
                  </div>
                </div>
              </div>
              <div class="landing-form__step-options landing-form__step-options--last">
                <div class="landing-form__step-options-colors">
                  <h3>Измените цвет иконки</h3>
                  <div>
                    <input type="radio" v-model="landing.iconColor" name="iconColor" value="#496EB7" id="icon-blue" checked>
                    <label for="icon-blue" style="background-color: #496EB7"></label>
                    <input type="radio" v-model="landing.iconColor" name="iconColor" value="#EF3E33" id="icon-red">
                    <label for="icon-red" style="background-color: #EF3E33"></label>
                    <input type="radio" v-model="landing.iconColor" name="iconColor" value="#EFC633" id="icon-yellow">
                    <label for="icon-yellow" style="background-color: #EFC633"></label>
                    <input type="radio" v-model="landing.iconColor" name="iconColor" value="#90B04C" id="icon-green">
                    <label for="icon-green" style="background-color: #90B04C"></label>
                    <input type="radio" v-model="landing.iconColor" name="iconColor" value="#AF51F9" id="icon-violet">
                    <label for="icon-violet" style="background-color: #AF51F9"></label>
                    <input type="radio" v-model="landing.iconColor" name="iconColor" value="#A4BDFF" id="icon-light-blue">
                    <label for="icon-light-blue" style="background-color: #A4BDFF"></label>
                  </div>
                </div>
                <div class="landing-form__step-options-successText">
                  <h3>Измените текст</h3>
                  <p>Введите текст для страницы успешной отправки</p>
                </div>
              </div>
            </div>

            <div class="landing-form__btns">
              <Button @func="stepBack" btnText="Назад" btnSvg="arrow" wrapperClass="button-wrapper--text" />
              <Button @func="stepPlus" :btnText="step < 3 ? 'Продолжить' : 'Создать страницу'" :btnSvg="step < 3 ? 'arrow' : ''" :wrapperClass="step === 3 ? 'button-wrapper--green button-wrapper--no-svg' : ''" />
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import BlockDesc from '@/components/page-chunks/Block-description'
import Button from "@/components/forms/Button"
import Input from "@/components/forms/Input"
import File from '@/components/forms/File-button'

export default {
  name: 'New-landing',
  props: ['editData'],
  components: {
    BlockDesc,
    Button,
    Input,
    File
  },

  data() {
    return {
      step: 1,
      blockDescription: {
        title: "Новый лендинг",
        text: "Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний",
      },

      secondInput: false,

      inputs: [
        'Ваше имя',
        'Ваш e-mail'
      ],

      landing: {
        name: '',
        inputs: [],
        btn: {
          color: '#496EB7'
        },
        iconColor: '#496EB7',
        success: {
          title: 'Благодарим за заявку',
          text: 'Ваша заявка отправлена. В ближайшее время с Вами свяжется наш менеджер'
        },
        conversion: 0,
        transitions: 0,
        requests: 0
      }
    }
  },

  methods: {
    stepBack() {
      if (this.step < 2) this.$router.go(-1)
      else this.step--
    },

    addInput() {
      this.secondInput = !this.secondInput
    },

    stepPlus() {
      if (this.step < 3) this.step++
      else {
        if (this.$route.name === 'new-landing') {
          if (!this.landing.id) this.landing.id = 'land' + Math.random().toString(36).substr(2, 9)
          this.landing.image = mobileImg.files['0'] ? mobileImg.files['0'].name : ''
          this.$store.dispatch('addLanding', this.landing)
          .then(() => {
            this.$router.push(this.landing.id)
          })
        } else {
          this.$store.dispatch('editLanding', this.landing)
          .then(() => {
            this.$router.go(-2)
          })
        }
      }
    }
  },

  mounted() {
    if (this.$route.params.id) {
      this.landing = this.$store.getters.getLanding(this.$route.params.id)

      landingName.value = this.landing.name
      this.$eventHub.$emit('onFocus', landingName)
    }

    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>

<style lang="sass" scoped>
.landing-form
  padding-top: 20px

  h3
    font-weight: 500

  &__steps
    width: 145px

  &__step
    &--first
      h3
        margin-bottom: 30px

    &-options
      width: 300px
      margin-left: 35px

      h3
        font-size: 16px
        margin-bottom: 10px
        padding-left: 30px
        background: url(../../../assets/img/icons/mobile-arrow.png) no-repeat 0 50%

      &--first
        margin-top: 80px

      &--last
        margin-top: 190px

        .landing-form__step-options-colors
          margin-bottom: 20px

      &-img
        margin-bottom: 43px

        h3
          background: none
          position: relative

          &::after
            position: absolute
            left: 0
            content: ''
            width: 22px
            height: 22px
            border-radius: 50%
            background-color: $main-color
            background-image: url('../../../assets/img/icons/check.png')
            background-repeat: no-repeat
            background-position: 50%

      &-title
        margin-bottom: 30px

      &-inputs
        margin-bottom: 50px

      &-colors
        div
          display: flex
          justify-content: space-between

        input
          position: absolute
          left: -999px
          opacity: 0
          z-index: -90

        label
          display: inline-block
          width: 38px
          height: 38px
          border-radius: 50%
          border: 2px solid white
          cursor: pointer

        input:checked + label
          background: url(../../../assets/img/icons/white-check.png) no-repeat 50%

    &--with-mobile
      display: flex

  &__btns
    margin-top: 50px

    .button-wrapper--text
      margin-right: 20px


// SP

.sp
  .landing-form
    &__step
      &-options
        &-img
          h3
            &::after
              background-color: $sp-color
              background-image: url('../../../assets/img/icons/white-check.png')


// SD

.sd
  .landing-form
    &__step
      &-options
        &-img
          h3
            &::after
              background-color: $sd-color
              background-image: url('../../../assets/img/icons/white-check.png')

</style>
