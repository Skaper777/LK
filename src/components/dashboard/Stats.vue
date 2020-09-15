<template>
  <div class="dashboard-stats">
    <div class="dashboard-stats__left">
      <header>
        <h2>Статистика по воронке продаж</h2>
        <div class="dashboard-stats__selects">
          <div class="select-wrapper">
            <multiselect
              class="select select--narrow"
              :show-labels="false"
              :options="timeRanges"
              v-model="timeRange"
              placeholder="За последний год"
            >
            </multiselect>
          </div>
          <div class="select-wrapper">
            <multiselect
              class="select select--narrow"
              :show-labels="false"
              :options="channels"
              v-model="channel"
              placeholder="По всем каналам"
            >
            </multiselect>
          </div>
        </div>
      </header>
      <div class="dashboard-stats__graph">
        <Graph :data="graphData" :options="graphOptions" />
      </div>
    </div>

    <div class="dashboard-stats__right">
      <ul>
        <li v-for="(stat) in stats" :key="stat.title">
          <div>
            <img :src="require(`@/assets/img/icons/${getIcon(stat.title)}.svg`)" alt="icon">
            <p :style="'color: ' + stat.color">{{stat.title}}</p>
            <span>{{stat.msgs}} сообщений</span>
          </div>
          <Button @func="form = true" btnText="Создать рассылку" btnSvg="rocket" wrapperClass="button-wrapper--text" />
        </li>
      </ul>
    </div>

    <transition name="fade">
      <div class="popup" v-if="form">
        <div class="popup__blur" @click="form = false"></div>
        <div class="popup__wrapper">
          <div class="popup__close" @click="form = false"></div>
          <Form/>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import Button from '../forms/Button'
import Form from '../mailing/Mailing-form'
import { getIcon } from '@/mixins/getIcon'
import Graph from "@/mixins/graph.js";

export default {
  name: 'Dashboard-stats',
  mixins: [getIcon],
  components: {
    Button,
    Form,
    Graph
  },

  data() {
    return {
      graphData: {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Сентябрь', 'Ноябрь', 'Декабрь'],
        datasets: [
          {
            label: 'Отправлено',
            backgroundColor:'rgb(73, 110, 183)',
            borderColor: 'rgb(73, 110, 183)',
            fill: false,
            data: [
              20000, 40000, 30000, 50000, 10000, 20000, 10000, 25000, 44000, 40000, 20000, 10000
            ]
          },
          {
            label: 'Доставлено',
            backgroundColor:'#89A97E',
            borderColor: '#89A97E',
            fill: false,
            data: [
              10000, 5000, 10000, 26000, 40000, 24000, 10000, 50000, 25000, 15000, 57000, 74000
            ]
          },
          {
            label: 'Теплые',
            backgroundColor:'#C0714F',
            borderColor: '#C0714F',
            fill: false,
            data: [
              20000, 30000, 10000, 76000, 10000, 24000, 50000, 20000, 35000, 55000, 17000, 74000
            ]
          },
          {
            label: 'Продажа',
            backgroundColor:'#90B04C',
            borderColor: '#90B04C',
            fill: false,
            data: [
              30000, 10000, 20000, 36000, 40000, 14000, 60000, 30000, 35000, 25000, 57000, 54000
            ]
          }
        ]
      },

      graphOptions: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
					mode: 'index',
					intersect: false,
				},
        hover: {
					mode: 'nearest',
					intersect: true
				},
      },

      form: false,
      stats: [
        {
          title: 'Отправлено',
          msgs: 20000,
          color: '#496EB7'
        },
        {
          title: 'Доставлено',
          msgs: 20000,
          color: '#89A97E'
        },
        {
          title: 'Тёплые',
          msgs: 20000,
          color: '#C0714F'
        },
        {
          title: 'Продажа',
          msgs: 20000,
          color: '#90B04C'
        },
      ],

      timeRanges: ['За последний год', 'Другой вариант'],
      timeRange: '',

      channels: ['По всем каналам', 'Не по всем каналам'],
      channel: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.dashboard-stats
  display: flex
  justify-content: space-between
  background: $modal-bg
  box-shadow: 0px 25px 54px #000000
  border-radius: 10px
  margin-bottom: 40px

  @media(max-width: 1280px)
    flex-wrap: wrap
    background: none
    box-shadow: none

  &__left
    width: 68%

    @media(max-width: 1280px)
      width: 100%

    h2
      @media(max-width: 1280px)
        font-size: 16px

  &__graph
    position: relative
    width: 100%
    height: 300px

    @media(max-width: 1280px)
      height: 200px

    div
      height: 300px

      @media(max-width: 1280px)
        height: 200px


  &__right
    width: 31%
    padding: 20px

    @media(max-width: 1280px)
      width: 100%
      padding: 20px 0 0

    li
      display: flex
      justify-content: space-between
      align-items: center
      padding: 12px 20px
      background: rgba(255, 255, 255, 0.04)
      border-radius: 10px
      margin-bottom: 4px

      div:first-of-type
        position: relative
        padding-left: 30px

      img
        position: absolute
        left: 0
        top: 10px

      p
        font-size: 16px
        font-weight: 500

      span
        color: $text-blur
        font-size: 12px

  header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 13px 0 13px 20px

  &__selects
    display: flex
    align-items: center

    @media(max-width: 1280px)
      display: none

// SP

.sp
  .dashboard-stats
    background: white
    box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)

    &__right
      li
        background: $sp-card-bg


// SD

.sd
  .dashboard-stats
    background: white
    box-shadow: $sd-shadow

    &__right
      li
        background: $sd-card-bg

</style>
