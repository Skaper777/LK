<template>
  <div class="current-mailing mailing-block">
    <div class="mailing-block__left">
      <h3>{{mailing.title}}</h3>
      <Button btnText="Приостановить" btnSvg="pause" wrapperClass="button-wrapper--narrow button-wrapper--error button-wrapper--error-bg" />
    </div>

    <div class="mailing-block__right">
      <div class="mailing-block__range">
        <p>Отправлено</p>
        <div>
          <span :style="`width: calc(${getPercents(mailing.total, mailing.stats[0].msgs)}% - 100px)`" class="mailing-block__range-strip mailing-block__range-strip--yellow"></span>
          <p style="color: #EFC633">{{getPercents(mailing.total, mailing.stats[0].msgs)}}%</p>
          <span class="mailing-block__range-stats">{{mailing.stats[0].msgs}}/{{mailing.total}}</span>
        </div>
      </div>
      <div class="mailing-block__range">
        <p>Доставлено</p>
        <div>
          <span :style="`width: calc(${getPercents(mailing.total, mailing.stats[1].msgs)}% - 100px)`" class="mailing-block__range-strip mailing-block__range-strip--green"></span>
          <p style="color: #82C198">{{getPercents(mailing.total, mailing.stats[1].msgs)}}%</p>
          <span class="mailing-block__range-stats">{{mailing.stats[1].msgs}}/{{mailing.total}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Button from '../forms/Button'
import { getPercents } from "@/mixins/getPercents";

export default {
  name: 'Current-mailing',
  props: ['mailing'],
  mixins: [getPercents],
  components: {
    Button
  }
}
</script>

<style lang="sass" scoped>
.current-mailing
  padding: 20px

  @media(max-width: 1024px)
    flex-wrap: wrap

  .mailing-block__left
    width: 25%

    @media(max-width: 1024px)
      margin-bottom: 10px

    @media(max-width: 768px)
      margin-right: 0
      width: 100%
      display: flex
      justify-content: space-between
      align-items: center

    h3
      margin-bottom: 17px

      @media(max-width: 768px)
        margin-bottom: 0

  .mailing-block__right
    display: flex
    flex-wrap: wrap
    text-align: left

</style>
