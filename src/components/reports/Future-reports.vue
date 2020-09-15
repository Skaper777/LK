<template>
  <section class="future-reports">
    <div class="content-container container">
      <BlockDesc :title="blockDescription.title" />
      <div class="future-reports__header">
        <Button @func="toggle" btnText="Добавить этапы воронки" btnSvg="plus" />
        <p ref="toggle" class="future-reports__toggle" @click="toggle">
          На очереди {{futureMailings.length}}
          <span>рассылки</span>
        </p>
      </div>
    </div>

    <transition name="fade">
      <div v-if="show" ref="futureList" class="container">
        <ul>
          <li v-for="mail in futureMailings" :key="mail.id">
            <Mailing
              :compact="mob ? true : false"
              :mailing="mail"
            />
          </li>
        </ul>
      </div>
    </transition>
  </section>
</template>

<script>
import BlockDesc from "../page-chunks/Block-description";
import Button from "../forms/Button";
import Mailing from "../mailing/Future-mailing";

export default {
  name: "Future-reports",
  components: {
    BlockDesc,
    Button,
    Mailing
  },

  data() {
    return {
      mob: false,
      show: false,
      blockDescription: {
        title: "Предстоящие рассылки"
      }
    };
  },

  methods: {
    toggle() {
      this.$refs.toggle.classList.toggle('future-reports__toggle--show')
      this.show = !this.show
    }
  },

  computed: {
    futureMailings() {
      return this.$store.getters.getFutureMailings;
    }
  },

  mounted() {
    if (window.innerWidth < 1024) this.mob = true
  }
};
</script>

<style lang="sass" scoped>
.future-reports
  padding-top: 24px
  padding-bottom: 30px
  border-bottom: 1px solid #313131

  @media(max-width: 1024px)
    border-bottom: none
    padding-bottom: 0

  .block-description
    @media(max-width: 1024px)
      margin-bottom: 0

  .content-container
    align-items: center
    margin-bottom: 24px

    @media(max-width: 1240px)
      align-items: flex-start

  &__header
    display: flex
    justify-content: space-between
    align-items: center

    .button-wrapper
      @media(max-width: 1240px)
        display: none

    .future-reports__toggle
      position: relative
      padding-right: 50px
      padding-left: 15px
      font-size: 12px
      cursor: pointer

      &::before
        content: ''
        position: absolute
        top: 7px
        left: 0
        width: 8px
        height: 8px
        border-radius: 50%
        background: #757575

      &::after
        position: absolute
        right: 0
        top: 5px
        content: ''
        width: 20px
        height: 11px
        background: url(../../assets/img/icons/input-arrow.png) no-repeat 0 50%
        background-size: cover
        transition: .2s

      span
        color: $main-color

      &--show
        &::after
          transform: rotate(180deg)

// White

.white
  .future-reports
    border-bottom: 1px solid #F4F4F4


// SP

.sp
  .future-reports__toggle
    &::after
      background: url(../../assets/img/icons/sp-input-arrow.png) no-repeat 0 50%
      background-size: cover

    span
      color: $sp-color

// SD

.sd
  .future-reports__toggle
    &::after
      background: url(../../assets/img/icons/sd-input-arrow.png) no-repeat 0 50%
      background-size: cover

    span
      color: $sd-color


</style>
