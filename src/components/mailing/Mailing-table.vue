<template>
  <div class="mailing-table">
    <h2 v-if="noChecking">Информация о рассылке {{mailing.date | moment('DD MMMM')}}</h2>
    <p class="mailing-table__message">{{mailing.message ? mailing.message : 'Сообщение'}}</p>
    <p class="mailing-table__zazu">Сообщение отправлено через сервис Zazu Media</p>
    <ul class="mailing-table__tables">
      <li
        v-for="(mail, index) in mailing.operators"
        v-show="mail.method.name !== 'Не отправлять' && mail.method.name"
        :key="index"
      >
        <h3>{{mail.title}}</h3>
        <div class="mailing-table__table">
          <div class="mailing-table__table-col">
            <span>Цена</span>
            <p>{{mail.method.price}} р.</p>
          </div>
          <div class="mailing-table__table-col">
            <span>Кол-во</span>
            <p>{{mailing.total}}</p>
          </div>
          <div class="mailing-table__table-col">
            <span>Сумма</span>
            <p>{{mail.method.price * mailing.total}} р.</p>
          </div>
        </div>
        <div class="mailing-table__circle">
          <CircleBlock :data="circleData" :options="circleOptions" />
          <span>25%</span>
        </div>
      </li>
    </ul>
    <div v-if="!noChecking" class="mailing-table__base-checking">
      <div>
        <Checkbox
          text="Чекинг базы"
          @func="toggleBaseChecking"
          checkId="checkingBase"
          :noMarginTop="true"
          :isChecked="true"
        />
        <div class="mailing-table__table">
          <div class="mailing-table__table-col">
            <span>Цена</span>
            <p>0.5 р.</p>
          </div>
          <div class="mailing-table__table-col">
            <span>Кол-во</span>
            <p>{{mailing.total}}</p>
          </div>
          <div class="mailing-table__table-col">
            <span>Сумма</span>
            <p>{{0.5 * mailing.total}} р.</p>
          </div>
        </div>
      </div>
      <p
        class="mailing-table__base-checking-text"
      >Проверка базы на предмет наличия номеров телефонов в мессаджерах. Таким образом это позволит сохранить вам бюджет на рассылку при отправке сообщений через мессаджеры</p>
    </div>
    <div class="mailing-table__total">
      <h3>Итого</h3>
      <div class="mailing-table__total-table">
        <div class="mailing-table__total-table-col">
          <span>Цена</span>
          <p>2.29 р.</p>
        </div>
        <div class="mailing-table__total-table-col">
          <span>Кол-во</span>
          <p>{{mailing.total}}</p>
        </div>
        <div class="mailing-table__total-table-col">
          <span>Предв. стоимость</span>
          <p>{{getTotalPrice}} р.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleBlock from '@/mixins/circle.js'
import Checkbox from '@/components/forms/Checkbox'

export default {
  name: "Mailing-table",
  props: ['mailing', 'noChecking'],
  components: {
    Checkbox,
    CircleBlock
  },

  data() {
    return {
      circleData: {
        labels: ['', ''],
        datasets: [
          {
            backgroundColor: [this.getFirstCircleColor(), this.getSecondCircleColor()],
            borderWidth: 0,
            data: [25, (100 - 25)]
          }
        ]
      },

      circleOptions: {
        cutoutPercentage: 80,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false
        }
      }
    }
  },

  computed: {
    getTotalPrice() {
      let total = 0;

      for (let i = 0; i < this.mailing.operators.length; i++) {
        const price = this.mailing.operators[i].method.price
        if (price) total += price * this.mailing.total
      }

      if (this.mailing.baseChecking) total += (0.5 * this.mailing.total)

      this.mailing.totalPrice = total;

      return Math.round(total)
    }
  },

  methods: {
    getFirstCircleColor() {
      if (app.classList.contains('zm')) return '#82C198'
      else if (app.classList.contains('sd')) return '#3F8DF6'
      else return '#DF2E2E'
    },

    getSecondCircleColor() {
      if (app.classList.contains('zm')) return '#444745'
      else return '#C4C4C4'
    },

    toggleBaseChecking() {
      this.mailing.baseChecking = !this.mailing.baseChecking
    },
  }
};
</script>

<style lang="sass" scoped>
.mailing-table
  &__message
    font-size: 16px
    color: $title-color
    margin-bottom: 7px

  h3
    font-weight: 500
    width: 100%

  &__zazu
    font-size: 16px
    margin-bottom: 22px

  &__tables
    display: flex
    flex-wrap: wrap
    justify-content: space-between

    li
      width: 48%
      padding: 12px 18px
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      background: $modal-bg
      border-radius: 10px
      margin-bottom: 20px
      box-sizing: border-box

      @media(max-width: 500px)
        width: 100%

  &__table
    display: flex

    div:not(:last-of-type)
      margin-right: 18px

    span
      font-size: 12px
      color: $text-blur

  &__circle
    position: relative
    width: 40px
    height: 40px

    span
      position: absolute
      top: 13px
      left: 8px
      font-size: 12px
      line-height: 12px
      color: $main-color
      font-weight: 500

  &__base-checking
    padding: 12px 18px
    background: $modal-bg
    border-radius: 10px
    display: flex
    justify-content: space-between
    margin-bottom: 21px

    @media(max-width: 500px)
      flex-wrap: wrap

    &-text
      width: 60%
      font-size: 12px

      @media(max-width: 500px)
        width: 100%

  &__total
    display: flex
    flex-wrap: wrap
    justify-content: space-between

    h3
      width: 100%
      margin-bottom: 6px

    &-table
      display: flex

      &-col
        margin-right: 45px

        @media(max-width: 500px)
          margin-right: 20px

      span
        font-size: 12px
        color: $text-blur

      p
        font-weight: 500
        font-size: 16px
        color: $title-color


// White

.white
  .mailing-table
    &__message
      color: $white-title-color

    &__table
      span
        color: $white-text-blur

    &__total
      &-table
        span
          color: $white-text-blur

        p
          color: $white-title-color


// SP

.sp
  .mailing-table
    &__tables
      li
        background: $sp-card-bg

    &__circle
      span
        color: $sp-color

    &__base-checking
      background: $sp-card-bg


// SD

.sd
  .mailing-table
    &__tables
      li
        background: white

    &__circle
      span
        color: $sd-color

    &__base-checking
      background: white


</style>
