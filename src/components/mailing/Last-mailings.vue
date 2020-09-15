<template>
  <div class="last-mailings" :class="!pastMailingsList.length ? 'last-mailings--empty' : false">
    <h2>Предыдущие рассылки</h2>
    <ul class="last-mailings__list">
      <li class="last-mailings__item" v-for="mail in pastMailingsList" :key="mail.fact">
        <Item :mail="mail" />
      </li>
    </ul>
    <Button v-if="pastMailingsList.length" btnText="Все рассылки" wrapperClass="button-wrapper--narrow" btnSvg="dots" @func="openAllMailings" />
    <p class="last-mailings__empty-message" v-else>
      У вас пока нет ни одной рассылки
    </p>
  </div>
</template>

<script>

import Button from '@/components/forms/Button'
import Item from './Last-item'

export default {
  name: 'Last-mailings',
  components: {
    Button,
    Item
  },

  computed: {
    pastMailingsList() {
      return this.$store.getters.getPastMailings
    }
  },

  methods: {
    openAllMailings() {
      this.$router.push('mailing/all')
    }
  }
}
</script>

<style lang="sass" scoped>

.last-mailings
  padding: 20px 0
  box-sizing: border-box
  box-shadow: 0px 25px 54px #000000
  border-radius: 10px
  background: $modal-bg

  h2
    margin-bottom: 10px
    padding: 0 20px

  &__list
    margin-bottom: 20px

  &__item
    padding: 15px 0
    border-bottom: 1px solid #141414

  &__empty-message
    padding: 150px 20px 220px
    text-align: center
    font-size: 20px
    line-height: 24px
    color: $title-color
    opacity: .3

  .button-wrapper--narrow
    margin-left: 20px


// SP

.sp
  .last-mailings
    background: white
    box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)

    &__item
      border-bottom: 1px solid $sp-modal-bg


// SD

.sd
  .last-mailings
    background: white
    box-shadow: $sd-shadow

    &__item
      border-bottom: 1px solid $sd-modal-bg

</style>
