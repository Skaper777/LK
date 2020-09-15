<template>
  <div class="balance">
    <div class="balance__left">
      <div>
        <p>{{balance}} р.</p>
        <span>Текущий баланс</span>
      </div>
      <div>
        <p>{{credit}} р.</p>
        <span>Кредитные средства</span>
      </div>
    </div>

    <div class="balance__right">
      <Input v-model="sum" plchldr="Сумма пополнения" />
      <div class="select-wrapper">
        <multiselect
          class="select"
          :show-labels="false"
          v-model="method"
          placeholder="Способ оплаты"
          :options="payMethods">
        </multiselect>
      </div>
      <Button @func="fillBalance" btnText="Пополнить" btnSvg="purse" wrapperClass="button-wrapper--green" />
    </div>
  </div>
</template>

<script>
import Input from '../forms/Input'
import Button from '../forms/Button'

export default {
  name: 'balance',
  components: {
    Input,
    Button
  },

  data() {
    return {
      payMethods: [
        'Банковская карта',
        'WebMoney',
        'Qiwi',
        'Яндекс Деньги'
      ],
      sum: 0,
      method: ''
    }
  },

  computed: {
    balance() {
      return this.$store.getters.getBalanceValue
    },

    credit() {
      return this.$store.getters.getCreditValue
    }
  },

  methods: {
    fillBalance() {
      this.$router.push({
        name: 'Finance-fill',
        params: {
          sum: this.sum,
          method: this.method
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.balance
  display: flex
  justify-content: space-between
  align-items: center
  padding: 25px
  background: $modal-bg
  margin: 20px 0 40px
  box-shadow: 0px 25px 54px #000000
  border-radius: 10px

  @media(max-width: 1024px)
    position: relative
    margin: 0 0 20px
    padding: 20px

  &__left,
  &__right
    display: flex
    align-items: center

  &__left
    @media(max-width: 1024px)
      display: flex
      flex-direction: column
      align-items: flex-start

    div:first-of-type
      margin-right: 80px

      @media(max-width: 1024px)
        margin-right: 40px

      @media(max-width: 560px)
        margin-bottom: 10px

      p
        font-size: 28px

    div:last-of-type
      @media(max-width: 1024px)
        display: flex

        p
          order: 4
          margin-left: 10px

    p
      font-size: 20px
      color: $title-color
      margin-bottom: 5px

    span
      @media(max-width: 1024px)
        font-size: 12px

  &__right
    .button-wrapper--green
      margin-left: 20px

      @media(max-width: 1024px)
        position: absolute
        right: 20px
        top: 20px
        margin-left: 0

    .select-wrapper
      margin-left: 20px
      min-width: 200px

      @media(max-width: 1280px)
        display: none

    .input-wrapper
      @media(max-width: 1280px)
        display: none

// WHite

.white
  .balance__left
    p
      color: $white-title-color


// SD

.sd
  .balance
    background: white
    box-shadow: $sd-shadow


// SP

.sp
  .balance
    background: white
    box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)

</style>
