<template>
  <div class="last-item__wrapper">
    <span class="last-item__date">{{mail.date | moment("DD.MM.YYYY")}}</span>
    <p class="last-item__kind">{{mail.title}}</p>
    <div class="last-item__rating">
      <div class="last-item__rating-info">
        <p>Доставлено: <span>{{mail.stats[0].msgs}}</span><span> из </span><span>{{mail.total}}</span></p>
        <div class="last-item__rating-scale">
          <div :style="`background: ${getColor(mail.rating)}`"></div>
          <div :style="`background: ${getColor(mail.rating)}; width: ${getPercents(mail.total, mail.stats[1].msgs)}%`"></div>
        </div>
      </div>
      <div ref="rating" class="last-item__rating-value" v-if="mail.rating">
        <img :src="require(`@/assets/img/rating/${mail.rating}.png`)" alt="rating">
        <Hint :hint="hint" />
      </div>
    </div>
    <div class="last-item__actions">
      <Button btnText="Повторить" btnSvg="recover" wrapperClass="button-wrapper--text" />
      <Button btnText="Как шаблон" btnSvg="pattern" wrapperClass="button-wrapper--text" />
    </div>
  </div>
</template>

<script>
import Hint from '../hints/Hints'
import { getColor } from '@/mixins/getColor'
import { getPercents } from '@/mixins/getPercents'
import Button from '@/components/forms/Button'

export default {
  name: 'Last-item',
  mixins: [getColor, getPercents],
  props: ['mail'],
  components: {
    Hint,
    Button
  },

  data() {
    return {
      hint: {
        show: false,
        title: 'Рейтинг рассылки',
        text: 'Рейтинг строиться на базе информации по многим параметрам'
      }
    }
  },

  mounted() {
    this.$refs.rating.addEventListener('mouseover', () => {
      this.hint.show = true
    })

    this.$refs.rating.addEventListener('mouseout', () => {
      this.hint.show = false
    })
  }
}
</script>

<style lang="sass" scoped>
.last-item
  &__wrapper
      padding: 0 20px

  &__date
    font-size: 12px
    color: #9E9F9F

  &__kind
    font-size: 16px
    margin-bottom: 15px

  &__rating
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 15px

    &-info
      width: 100%
      margin-right: 13px

      p
        font-size: 12px
        color: $text-blur
        margin-bottom: 3px

        span
          font-size: 14px
          color: $text-color

    &-value
      position: relative
      height: 33px

    &-scale
      position: relative

      div:first-of-type
        width: 100%
        height: 5px
        border-radius: 7px
        opacity: .3

      div:last-of-type
        position: absolute
        left: 0
        top: 0
        height: 5px
        border-radius: 7px

  &__actions
    display: flex
    align-items: center

    .button-wrapper
      margin-right: 15px

</style>
