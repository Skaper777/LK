<template>
  <section class="finance-docs">
    <div class="content-container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
        :btnText="blockDescription.btn.text"
        :btnSvg="blockDescription.btn.svg"
        :hint="blockDescription.hint"
      />

      <div class="finance-docs__list">
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
          <li v-for="(doc, index) in docs" :key="index" class="finance-item finance-item--docs">
            <div>
              <span>Дата</span>
              <p>{{doc.date | moment('DD.MM.YYYY')}}</p>
            </div>
            <div>
              <span>Наименования документа</span>
              <p>{{doc.title}}</p>
            </div>
            <div class="finance-item__actions">
              <Button btnText="Скачать документы" btnSvg="arrow" wrapperClass="button-wrapper--text" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../forms/Button'
import BlockDesc from '../page-chunks/Block-description'
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'

export default {
  name: 'Finance-docs',
  components: {
    Button,
    BlockDesc,
    Datepicker
  },

  data() {
    return {
      ru: ru,
      date: '',
      options: ['Все документы', 'Не все документы'],
      option: '',
      blockDescription: {
        title: "Счета и акты",
        text: "Перечень счетов и актов",
        btn: {
          text: "Скачать все документы",
          svg: "arrow"
        },
        hint: "Скачать все документы за выбранный период"
      },
    }
  },

  computed: {
    docs() {
      return this.$store.getters.getHistoryDocs
    }
  }
}
</script>

<style lang="sass" scoped>
.finance-docs
  padding-top: 30px

  &__list
    @media(max-width: 1024px)
      width: 100%

    header
      display: flex
      justify-content: flex-end
      margin-bottom: 20px

    .select-wrapper
      margin-right: 20px

      @media(max-width: 1024px)
        display: none

    .vdp-datepicker
      @media(max-width: 1024px)
        width: 100%

</style>
