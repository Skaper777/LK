<template>
  <main>
    <section class="finance-fill">
      <div class="container">
        <Button @func="$router.go(-1)" btnText="Назад" btnSvg="arrow" class="finance-fill__back" wrapperClass="button-wrapper--text" />
        <div class="finance-fill__wrapper">
          <h2>Пополнение баланса</h2>
          <div class="finance-fill__info">
            <div>
              <p>{{balance}} р.</p>
              <span>Текущий баланс</span>
            </div>
            <div>
              <p>{{credit}} р.</p>
              <span>Кредитные средства</span>
            </div>
          </div>
          <Input plchldr="Сумма пополнения" inputId="fillMoney" v-model="fill.sum" />
          <div class="finance-fill__entity">
            <Toggle @toggle="fill.entity = !fill.entity" num="0" />
            <span>Через юридическое лицо</span>
          </div>
          <div class="finance-fill__methods">
            <h3>Способ пополнения</h3>
            <ul class="finance-fill__methods-list">
              <li v-for="(method, index) in methods" :key="index">
                <input type="radio" name="method" :value="method.title" v-model="fill.method" :id="method.id">
                <label :for="method.id">{{method.title}}</label>
              </li>
            </ul>
          </div>
          <Button @func="fillBalance" btnText="Пополнить" btnSvg="purse" wrapperClass="button-wrapper--green" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import Toggle from "@/components/others/Toggle";

export default {
  name: 'Finance-fill',
  components: {
    Button,
    Input,
    Toggle
  },

  data() {
    return {
      fill: {
        sum: 0,
        entity: false,
        method: ''
      },

      methods: [
        {
          title: 'Банковская карта',
          id: 'method1'
        },
        {
          title: 'WebMoney',
          id: 'method2'
        },
        {
          title: 'Qiwi',
          id: 'method3'
        },
        {
          title: 'Яндекс Деньги',
          id: 'method4'
        }
      ]
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
      this.fill.date = Date.now()
      this.fill.text = 'Пополение баланса личного кабинета ' + this.fill.method
      this.$store.dispatch('changeBalance', this.fill)
      .then(() => this.$router.push('.'))
    }
  },

  mounted() {
    this.fill.sum = this.$route.params.sum ? +this.$route.params.sum : 1000
    this.fill.method = this.$route.params.method ? this.$route.params.method : 'Банковская карта'
    fillMoney.value = this.$route.params.sum ? this.$route.params.sum : 1000
    this.$eventHub.$emit('onFocus', fillMoney)

    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
}
</script>

<style lang="sass" scoped>
.finance-fill
  padding-top: 20px

  .container
    position: relative

  &__back
    position: absolute
    left: 150px
    top: 20px

  &__wrapper
    width: 610px
    margin: 0 auto
    background: $modal-bg
    padding: 23px 36px 43px 36px
    box-shadow: 0px 25px 54px #000000
    border-radius: 10px

    h2
      margin-bottom: 40px

    h3
      font-weight: 500
      margin-bottom: 20px

  &__info
    display: flex
    align-items: center
    margin-bottom: 40px

    div:first-of-type
      margin-right: 70px

      p
        font-size: 28px

    p
      font-size: 20px
      color: $title-color
      margin-bottom: 5px

  .input-wrapper
    width: 260px
    margin-bottom: 30px

  &__entity
    display: flex
    align-items: center
    margin-bottom: 20px

    span
      margin-left: 15px

  &__methods
    margin-bottom: 20px

  &__methods-list
    display: flex
    flex-wrap: wrap
    max-width: 400px

    li
      margin-right: 20px
      margin-bottom: 20px

      input
        position: absolute
        opacity: 0
        z-index: -500

      label
        display: block
        padding: 18px 28px
        cursor: pointer
        font-weight: 500
        border: 1px solid $icon-blur
        border-radius: 10px

      input:checked + label
        background: $main-color-trans
        border: 1px solid $main-color

// SP

.sp
  .finance-fill
    &__wrapper
      background: white
      box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)

    &__methods-list
      li
        label
          color: $sp-color
          border: 1px solid $sp-icon-blur

        input:checked + label
          background: $sp-color-trans
          border: 1px solid $sp-color


// SD

.sd
  .finance-fill
    &__wrapper
      background: white
      box-shadow: $sd-shadow

    &__methods-list
      li
        label
          color: $sd-color
          border: 1px solid $sd-icon-blur

        input:checked + label
          background: $sd-color-trans
          border: 1px solid $sd-color


// white

.white
  .finance-fill
    &__info
      p
        color: $white-title-color

</style>
