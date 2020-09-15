<template>
  <section class="finance-history">
    <div class="content-container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
        :btnText="blockDescription.btn.text"
        :btnSvg="blockDescription.btn.svg"
        :hint="blockDescription.hint"
      />

      <div class="finance-history__info">
        <div class="finance-history__info-list">
          <header>
            <div class="select-wrapper">
              <multiselect
                class="select"
                v-model="option"
                :show-labels="false"
                :placeholder="options[0]"
                :options="options"
              ></multiselect>
            </div>
            <Datepicker
              :language="ru"
              placeholder="Текущий месяц"
              :monday-first="true"
              v-model="date"
              input-class="input input--date"
              calendar-class="calendar"
            />
          </header>
          <ul>
            <li
              v-for="(event) in events"
              :key="event.sum"
            >
              <HistoryItem :event="event" />
            </li>
          </ul>
        </div>

        <div class="finance-history__info-total">
          <h3 class="finance-history__info-total-title">Итого за выбранный период</h3>
          <div class="finance-history__info-total-block finance-history__info-total-block--plus">
            <h3>Пополнения</h3>
            <ul>
              <li v-for="(item, index) in total.plus" :key="index">
                <span>{{item.title}}</span>
                <p>+ {{item.sum}} р.</p>
              </li>
            </ul>
            <footer>
              <span>Итого</span>
              <p>+ 24 000 р.</p>
            </footer>
          </div>
          <div class="finance-history__info-total-block finance-history__info-total-block--minus">
            <h3>Списания</h3>
            <ul>
              <li v-for="(item, index) in total.minus" :key="index">
                <span>{{item.title}}</span>
                <p>- {{item.sum}} р.</p>
              </li>
            </ul>
            <footer>
              <span>Итого</span>
              <p>- 24 000 р.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlockDesc from "../page-chunks/Block-description";
import Datepicker from "vuejs-datepicker";
import { ru } from "vuejs-datepicker/dist/locale";
import HistoryItem from "./History-item";

export default {
  name: "finance-history",
  components: {
    BlockDesc,
    Datepicker,
    HistoryItem
  },

  data() {
    return {
      date: "",
      ru: ru,
      options: [
        'По всем услугам', 'Не по всем услугам'
      ],
      option: '',
      blockDescription: {
        title: "История пополнений и списаний",
        text: "История финансовых операций по Вашему счету",
        btn: {
          text: "Выгрузить в CSV",
          svg: "arrow"
        },
        hint: "Выгрузить все транзакции за выбранный период"
      },

      total: {
        plus: [
          {
            title: "Zazu group (бонусное зачисление)",
            sum: "12 000"
          },
          {
            title: "Компенсация за сервисный трафик",
            sum: "24 000"
          }
        ],

        minus: [
          {
            title: "Zazu group (бонусное зачисление)",
            sum: "12 000"
          },
          {
            title: "Компенсация за сервисный трафик",
            sum: "24 000"
          },
          {
            title: "Zazu group (бонусное зачисление)",
            sum: "12 000"
          }
        ]
      }
    };
  },

  computed: {
    events() {
      return this.$store.getters.getHistoryEvents;
    }
  }
};
</script>

<style lang="sass" scoped>
.finance-history
  padding-top: 30px

  @media(max-width: 1024px)
    padding-top: 20px

  &__info
    display: flex
    justify-content: space-between
    align-items: flex-start

    @media(max-width: 1024px)
      width: 100%

    &-list
      width: 65%

      @media(max-width: 1024px)
        width: 100%

      header
        display: flex
        justify-content: flex-end
        margin-bottom: 20px

      .vdp-datepicker
        @media(max-width: 1024px)
          width: 100%

      .select-wrapper
        margin-right: 20px

        @media(max-width: 1024px)
          display: none

    &-total
      width: 32%
      min-width: 255px
      background: $modal-bg
      box-shadow: 0px 25px 54px #000000
      border-radius: 10px

      @media(max-width: 1024px)
        display: none

      h3
        font-weight: 500
        font-size: 16px

      &-title
        padding: 25px 20px 0

      &-block
        h3
          padding: 20px 20px 9px

        p
          font-weight: 500

        ul
          padding: 0 20px

          li
            display: flex
            justify-content: space-between
            margin-bottom: 10px

            span
              font-size: 12px
              max-width: 60%

            p
              white-space: nowrap

        footer
          display: flex
          justify-content: space-between
          background: rgba(255, 255, 255, 0.04)
          padding: 15px 20px

        &--plus
          h3,
          p
            color: $main-color

        &--minus
          h3,
          p
            color: $text-error


// SP

.sp
  .finance-history
    &__info-total
      background: white
      box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)

      &-block
        footer
          background: $sp-modal-bg

        &--plus
          h3
            color: $sp-color

          p
            color: $main-color


// SD

.sd
  .finance-history
    &__info-total
      background: white
      box-shadow: $sd-shadow

      &-block
        footer
          background: $sd-card-bg

        &--plus
          h3
            color: $sd-color

          p
            color: $sd-color


</style>
