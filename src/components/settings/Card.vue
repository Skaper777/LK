<template>
  <div class="card">
    <div class="card__container">
      <div class="card__wrapper">
        <h2>Банковская карта</h2>
        <Input v-model="card.number" inputId="cardNum" plchldr="Номер карты" />
        <div>
          <Input v-model="card.owner" inputId="cardOwner" plchldr="Держатель" />
          <Input v-model="card.date" inputId="cardDate" plchldr="ММ/ГГ" />
        </div>
      </div>
      <Input v-model="card.cvc" inputType="password" inputId="cardCvc" plchldr="CVC" wrapperClass="card__cvc" />
    </div>
    <Button btnText="Удалить карту" btnSvg="plus" wrapperClass="button-wrapper--error button-wrapper--text" />
    <Button @func="saveCard" btnText="Сохранить карту" wrapperClass="button-wrapper--green button-wrapper--no-svg" />
  </div>

</template>

<script>
import Button from '../forms/Button'
import Input from '../forms/Input'
import { setInputValue } from '../../mixins/setInputValue'

export default {
  name: 'Card',
  mixins: [setInputValue],
  components: {
    Button,
    Input
  },

  methods: {
    saveCard() {
      this.$store.dispatch('changeCard', this.card)
    }
  },

  computed: {
    card() {
      return this.$store.getters.getCard
    }
  },

  mounted() {
    this.setInputValue(cardNum, this.$store.getters.getCard.number)
    this.setInputValue(cardOwner, this.$store.getters.getCard.owner)
    this.setInputValue(cardDate, this.$store.getters.getCard.date)
    this.setInputValue(cardCvc, this.$store.getters.getCard.cvc)
  }
}
</script>

<style lang="sass" scoped>
.card
  &__container
    display: flex
    align-items: flex-start
    margin-bottom: 25px

  &__wrapper
    width: 436px
    padding: 25px 25px 52px
    box-sizing: border-box
    background: $modal-bg
    box-shadow: 0px 25px 54px #000000
    border-radius: 10px
    margin-right: 20px

    @media(max-width: 1024px)
      width: 100%
      padding: 30px 14px 25px

    h2
      margin-bottom: 23px

      @media(max-width: 1024px)
        display: none

    div
      display: flex
      margin-top: 20px

      @media(max-width: 1024px)
        margin-top: 15px

      .input-wrapper:first-of-type
        min-width: 260px
        margin-right: 20px

        @media(max-width: 1024px)
          min-width: 60%
          margin-right: 15px

  &__cvc
    margin-top: 70px
    width: 103px

    @media(max-width: 1024px)
      display: none

  .button-wrapper--green
    margin-left: 20px

    @media(max-width: 500px)
      margin-left: 10px


// SP

.sp
  .card
    &__wrapper
      background: white
      box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)


// SD

.sd
  .card
    &__wrapper
      background: white
      box-shadow: $sd-shadow

</style>
