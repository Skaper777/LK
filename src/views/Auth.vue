<template>
  <div class="auth">
    <div class="auth__logo"></div>
    <div class="auth__modal">

      <Tabs :tabs="tabs" />

      <transition name="fade" mode="out-in">
        <div v-if="tabs[0].show" key="login">
          <form class="auth__main" v-for="step in login.steps" v-show="step.show" :key="step.title" autocomplete="off">
            <h1>{{step.title}}</h1>
            <p>{{step.description}}</p>
            <Input v-for="input in step.inputs" :inputId="input.id" :inputType="input.type" :key="input.id" :plchldr="input.placeholder" />
            <a href="" v-show="login.steps[0].show" @click.prevent="recover">Забыли пароль?</a>
            <Button :btnText="step.btn" @func="toLogin" :btnSvg="step.btnSvg" />
          </form>
        </div>

        <div v-else key="registration">
          <form class="auth__main" autocomplete="off">
            <h1>Регистрация в личном кабинете</h1>
            <p>Выберете канал через который вы хотите совершить рассылку.</p>
            <Input v-for="input in registration.inputs" :inputId="input.id" :inputType="input.type" :key="input.id" :plchldr="input.placeholder" />
            <Button btnText="Зарегистрироваться" btnSvg="arrow" />
          </form>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>

import Tabs from '@/components/page-chunks/Tabs'
import Button from '@/components/forms/Button'
import Input from '@/components/forms/Input'
import Api from '@/api'

export default {
  name: 'Auth',

  components: {
    Tabs,
    Button,
    Input
  },

  data() {
    return {
      tabs: [
        {
          name: 'Войти',
          show: true
        },
        {
          name: 'Зарегестрироваться',
          show: false
        }
      ],
      login: {
        steps: [
          {
            show: true,
            title: 'Вход в личный кабинет',
            description: 'Выберете канал через который вы хотите совершить рассылку.',
            inputs: [
              {
                type: 'text',
                id: 'email',
                placeholder: 'Email'
              },
              {
                type: 'password',
                id: 'password',
                placeholder: 'Пароль'
              }
            ],
            btn: 'Войти',
            btnSvg: 'arrow'
          },
          {
            show: false,
            title: 'Восстановление пароля',
            description: 'Введите свой почтовый адрес и мы отправим на него инструкции по восстановлению пароля',
            inputs: [
              {
                type: 'text',
                id: 'recEmail',
                placeholder: 'Email'
              }
            ],
            btn: 'Восстановить пароль',
            btnSvg: 'recover'
          }
        ]
      },

      registration: {
        inputs: [
          {
            type: 'text',
            id: 'regEmail',
            placeholder: 'Email'
          },
          {
            type: 'text',
            id: 'regName',
            placeholder: 'Имя'
          },
          {
            type: 'text',
            id: 'regPhone',
            placeholder: 'Телефон'
          }
        ]
      },

      loginData: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    recover() {
      this.login.steps[0].show = false
      this.login.steps[1].show = true
      document.querySelector('.tabs__item--active').classList.remove('tabs__item--active')
    },

    toLogin() {
      this.axios.post(Api.LOGIN, this.loginData)
      .then(res => console.log(res))
    }
  },

  mounted() {
    document.querySelectorAll('.tabs__item')[0].addEventListener('click', (e) => {
      e.target.classList.add('tabs__item--active')
      this.login.steps[0].show = true
      this.login.steps[1].show = false
    })

    if (this.$route.query.sp === 'true') {
      app.classList.add('sp')
      app.classList.add('white')
      app.classList.remove('zm')
      app.classList.remove('sd')
    } else if (this.$route.query.sd === 'true') {
      app.classList.add('sd')
      app.classList.add('white')
      app.classList.remove('zm')
      app.classList.remove('sp')
    }
  }
}
</script>

<style lang="sass" scoped>
.auth
  background: $login-bg
  min-width: 100%
  min-height: 100vh
  padding-top: 60px

  &__logo
    background: url(../assets/img/zm/logo.png) no-repeat 50%
    opacity: .6
    width: 127px
    height: 125px
    margin: 0 auto
    margin-bottom: 48px

  &__modal
    background-color: $modal-bg
    padding: 50px 105px
    max-width: 610px
    box-sizing: border-box
    margin: 0 auto
    box-shadow: $modal-shadow
    border-radius: 10px

  .tabs
    margin-bottom: 40px

  &__main
    text-align: center
    display: flex
    flex-direction: column
    align-items: flex-end

    h1
      width: 100%
      margin-bottom: 18px

    p
      margin-bottom: 30px

    .input-wrapper:not(:last-of-type)
      margin-bottom: 20px

    a
      font-size: 12px
      color: $text-blur
      transition: .2s

      &:hover
        color: $main-color

    .button-wrapper
      margin: 30px auto 0


// White

.white
  .auth
    &__main
      a
        color: $white-text-blur


// SD

.sd
  .auth
    background: $sd-login-bg

    &__modal
      background-color: white
      box-shadow: $sd-shadow
    &__main
      a
        &:hover
          color: $sd-color

    &__logo
      width: auto
      opacity: .8
      background: url(../assets/img/sd/auth-logo.png) no-repeat 50%


// SP

.sp
  .auth
    background: $sp-login-bg

    &__modal
      background-color: white
      box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)

    &__main
      a
        &:hover
          color: $sp-color

    &__logo
      width: auto
      background: url(../assets/img/sp/auth-logo.png) no-repeat 50%


</style>
