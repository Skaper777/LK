<template>
  <section class="autoMailings content-container">

    <BlockDesc
      :title="autoDescription.title"
      :text="autoDescription.text"
      :btnText="autoDescription.btn.text"
      :btnSvg="autoDescription.btn.svg"
      @open="newAutoMailing"
    />

    <ul class="autoMailings__list">
      <li class="autoMailings__item" v-for="(mail, index) in mailings" :key="mail.title">
        <header>
          <div>
            <Toggle :isChecked="true" :num="index + 1" @toggle="() => toggleMailing(index)" />
            <h3>{{mail.title}}</h3>
          </div>
          <Button btnText="Изменить" wrapperClass="button-wrapper--text" btnSvg="edit" @func="() => editAutoMailing(mail.id)" />
        </header>
        <div class="autoMailings__item-body">
          <div class="autoMailings__item-event autoMailings__item-event--condition">
            <span>Условие</span>
            <p>{{mail.condition}}</p>
          </div>
          <div class="autoMailings__item-event" v-for="(event, index) in mail.events" :key="index">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.375 1.09375H7.65625C7.95829 1.09375 8.20312 0.848914 8.20312 0.546875C8.20312 0.244836 7.95829 0 7.65625 0H4.375C4.07296 0 3.82812 0.244836 3.82812 0.546875C3.82812 0.848914 4.07296 1.09375 4.375 1.09375Z"/>
              <path d="M6.01562 1.96875C2.69052 1.96875 0 4.65973 0 7.98438C0 11.3094 2.6909 14 6.01562 14C9.34076 14 12.0312 11.309 12.0312 7.98438C12.0312 4.65927 9.34027 1.96875 6.01562 1.96875ZM6.01562 12.9062C3.3017 12.9062 1.09375 10.6983 1.09375 7.98438C1.09375 5.27045 3.3017 3.0625 6.01562 3.0625C8.72955 3.0625 10.9375 5.27045 10.9375 7.98438C10.9375 10.6983 8.72955 12.9062 6.01562 12.9062Z"/>
              <path d="M6.01562 4.70312C5.71359 4.70312 5.46875 4.94796 5.46875 5.25V7.98438C5.46875 8.28641 5.71359 8.53125 6.01562 8.53125C6.31766 8.53125 6.5625 8.28641 6.5625 7.98438V5.25C6.5625 4.94796 6.31766 4.70312 6.01562 4.70312Z"/>
            </svg>
            <span>{{event.delay}}</span>
            <p>{{event.name}}</p>
          </div>
        </div>
      </li>
    </ul>

    <transition name="fade" mode="out-in">
      <AutoNew/>
    </transition>


  </section>
</template>

<script>

import BlockDesc from "../page-chunks/Block-description";
import Toggle from '../others/Toggle'
import Button from '../forms/Button'
import Input from '../forms/Input'
import AutoNew from './Auto-new'

export default {
  name: 'Auto-mailings',

  components: {
    BlockDesc,
    Toggle,
    Button,
    Input,
    AutoNew
  },

  data() {
    return {
      popup: false,

      autoDescription: {
        title: "Авто рассылки",
        text: "Описания того, что такое задания на рассылку",
        btn: {
          text: "Новая авто рассылка",
          svg: "plus"
        }
      }
    }
  },

  computed: {
    mailings() {
      return this.$store.getters.getAutoMailings
    }
  },

  methods: {
    toggleMailing(i) {
      document.querySelectorAll('.autoMailings__item')[i].classList.toggle('blur')
    },

    editAutoMailing(id) {
      const data = this.$store.getters.getAutoMailing(id)
      this.$eventHub.$emit('editAutoMailing', data)
    },

    newAutoMailing() {
      this.$eventHub.$emit('newAutoMailing')
    }
  }
}
</script>

<style lang="sass" scoped>
.autoMailings
  margin-top: 30px

  &__list
    width: 100%

  &__item
    box-sizing: border-box
    padding: 16px 20px 13px
    background: $modal-bg
    border-radius: 10px
    margin-bottom: 10px

    header
      display: flex
      justify-content: space-between
      margin-bottom: 20px

      div
        display: flex
        align-items: center

        h3
          margin-left: 25px
          font-size: 16px
          font-weight: 500

    &-body
      position: relative
      display: grid
      grid-template-columns: repeat(3, 1fr)
      grid-column-gap: 20px

    &-event
      position: relative
      padding: 7px 10px
      border-radius: 6px
      background: #313131
      margin-bottom: 10px

      svg
        position: absolute
        top: 10px

        path
          fill: #82C198

      span
        font-size: 12px
        color: $text-blur
        padding-left: 20px

      &--condition
        position: relative
        background: #425FA9

        &::after
          position: absolute
          right: -20px
          top: calc(50% - 5px)
          content: ''
          width: 20px
          height: 10px
          background: url(../../assets/img/icons/arrow.png) no-repeat 50%

        span
          opacity: .6
          font-size: 12px
          color: white
          padding: 0
          background: none

        p
          color: white

    &:nth-of-type(2n)
      .autoMailings__item-event--condition
        background: #7C9547

    &:nth-of-type(3n)
      .autoMailings__item-event--condition
        background: #C0714F


// SP

.sp
  .autoMailings
    &__item
      background: $sp-card-bg

      &-event
        background: $sp-modal-bg

        svg
          path
            fill: $sp-color

        &--condition
          background: #425FA9


// SD

.sd
  .autoMailings
    &__item
      background: white

      &-event
        background: $sd-modal-bg

        svg
          path
            fill: $sd-color

        &--condition
          background: #6D9AD8

      &:nth-of-type(2n)
        .autoMailings__item-event--condition
          background: #A7BD79

      &:nth-of-type(3n)
        .autoMailings__item-event--condition
          background: #CA9782

</style>
