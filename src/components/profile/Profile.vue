<template>
  <div class="profile">
    <div ref="profile" class="profile__visible" @click="menu = true">
      <div class="profile__logo">
        <img src="@/assets/img/header/profile.png" alt="profile">
      </div>
      <div class="profile__info">
        <p class="profile__name">{{userName}}</p>
        <p class="profile__balance">{{balance}} р.</p>
      </div>
      <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5.5 5L10 1" stroke-width="2"/>
      </svg>
    </div>

    <transition name="fade">
      <div ref="profileMenu" class="profile__menu" v-show="menu">
        <ul>
          <li @click="menu = false" v-for="item in menuList" :key="item.title">
            <router-link :to="{name: item.link}">{{item.title}}</router-link>
          </li>
        </ul>
        <Button @func="toLogin" btnText="Выйти" btnSvg="off" wrapperClass="button-wrapper--error button-wrapper--error-bg button-wrapper--narrow" />
      </div>
    </transition>
  </div>
</template>

<script>
import Button from '../forms/Button'

export default {
  name: 'Profile',
  components: {
    Button
  },

  data() {
    return {
      menu: false,
      menuList: [
        {
          title: 'Профиль',
          link: 'Profile'
        },
        {
          title: 'Документы',
          link: 'Docs'
        },
        {
          title: 'Тарифы',
          link: 'Tarifs'
        }
      ]
    }
  },

  methods: {
    toLogin() {
      this.$router.push('auth')
    }
  },

  computed: {
    balance() {
      return this.$store.getters.getBalanceValue
    },

    userName() {
      return this.$store.getters.getFullName
    }
  },

  mounted() {
    document.addEventListener('click', (e) => {
      const targ1 = e.target.closest('.profile__visible')
      const targ2 = e.target.closest('.profile__menu')

      if (targ1 !== this.$refs.profile && targ2 !== this.$refs.profileMenu) this.menu = false
    })
  }
}
</script>

<style lang="sass" scoped>
.profile
  position: relative

  &__visible
    position: relative
    display: flex
    cursor: pointer
    font-size: 16px
    padding-right: 15px
    margin-right: 41px

    @media(max-width: 1024px)
      margin-right: 0
      margin-left: 30px

    path
      fill: $main-color

  &__logo
    margin-right: 16px

    @media(max-width: 1024px)
      margin-right: 7px

  &__name
    color: $title-color
    margin-bottom: 5px

  &__info
    @media(max-width: 1024px)
      display: none

  svg
    position: absolute
    top: 8px
    right: 0

    @media(max-width: 1024px)
      top: 20px

  &__menu
    position: absolute
    left: 0
    top: 55px
    width: 200px
    box-sizing: border-box
    padding: 15px 15px 20px
    background: white
    border-radius: 10px
    z-index: 5

    @media(max-width: 1024px)
      left: initial
      right: 0

    ul
      margin-bottom: 20px

      li
        color: black
        margin-bottom: 10px

        &:nth-of-type(2)
          @media(max-width: 1024px)
            display: none

        a
          display: block
          width: 100%
          background: url(../../assets/img/icons/menu-arrow.svg) no-repeat 100% 50%

// White

.white
  .profile
    &__name
      color: $white-title-color

// SP

.sp
  .profile
    &__visible
      path
        fill: $sp-color

    &__menu
      ul
        li
          a
            background: url(../../assets/img/sp/menu-arrow.svg) no-repeat 100% 50%


// SD

.sd
  .profile
    &__visible
      path
        fill: $sd-color

    &__menu
      ul
        li
          a
            background: url(../../assets/img/sd/menu-arrow.svg) no-repeat 100% 50%

</style>
