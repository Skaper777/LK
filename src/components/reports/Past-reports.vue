<template>
  <section class="past-reports">
    <div class="content-container container">
      <BlockDesc :title="blockDescription.title" />
      <div class="past-reports__header">
        <Datepicker :language="ru" placeholder="Текущий месяц" :monday-first="true" v-model="date" input-class="input input--date" calendar-class="calendar" />
        <div class="select-wrapper">
          <multiselect
            class="select"
            :show-labels="false"
            :options="channels"
            v-model="channel"
            :value="channels[0]"
          >
          </multiselect>
        </div>
      </div>
    </div>

    <div class="container">
      <ul>
        <li v-for="mailing in pastMailings" :key="mailing.id">
          <Mailing
            :mailing="mailing"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import BlockDesc from "../page-chunks/Block-description";
import Mailing from "../mailing/Past-mailing";
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'
import Input from '@/components/forms/Input'

export default {
  name: 'Past-reports',
  components: {
    BlockDesc,
    Mailing,
    Datepicker,
    Input
  },

  data() {
    return {
      blockDescription: {
        title: "Прошедшие рассылки"
      },
      ru: ru,
      date: '',
      channel: 'Все каналы отправки',
      channels: [
        'Все каналы отправки',
        'Не все каналы отправки'
      ]
    }
  },

  computed: {
    pastMailings() {
      return this.$store.getters.getPastMailings;
    }
  }
}
</script>

<style lang="sass" scoped>
.past-reports
  padding-top: 40px

  @media(max-width: 1240px)
    padding-top: 20px

  .content-container
    margin-bottom: 26px
    align-items: center

    @media(max-width: 1240px)
      margin-bottom: 0
      align-items: flex-start

  &__header
    display: flex
    justify-content: flex-end

    @media(max-width: 1240px)
      display: none

    .select-wrapper
      margin-left: 20px

</style>
