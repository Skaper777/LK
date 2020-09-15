<template>
  <div class="past-mailing mailing-block" :id="mailing.id">
    <div class="mailing-block__left">
      <div class="past-mailing__rating" v-if="mailing.rating">
        <img :src="require(`@/assets/img/rating/${mailing.rating}.png`)" alt="rating" />
        <h3>{{mailing.date | moment('DD MMMM')}}</h3>
      </div>
      <p>Проведена, {{mailing.title}}</p>
      <Button
        @func="goToDetails"
        btnText="Подробнее"
        wrapperClass="button-wrapper--text"
        btnSvg="details"
      />
    </div>

    <div class="mailing-block__right">
      <div class="mailing-block__right-ranges">
        <div class="mailing-block__range">
          <div>

            <p style="color: #EFC633">{{getPercents(mailing.total, mailing.stats[0].msgs)}}%</p>
            <span class="mailing-block__range-stats">{{mailing.stats[0].msgs}}/{{mailing.total}}</span>
          </div>
        </div>
        <div class="mailing-block__range">
          <div>

            <p style="color: #82C198">{{getPercents(mailing.total, mailing.stats[1].msgs)}}%</p>
            <span class="mailing-block__range-stats">{{mailing.stats[1].msgs}}/{{mailing.total}}</span>
          </div>
        </div>
      </div>

      <div
        v-for="stat in mailing.stats"
        :key="stat.title"
        :class="`mailing-block__right-block ${getClass(stat.title)}`"
      >
        <div class="mailing-block__right-subblock">
          <span>{{stat.title}}</span>
          <p>{{stat.msgs}} сообщений</p>
        </div>
        <Button
          :btnText="stat.title === 'Отправлено' ? 'Повторить рассылку' : 'Создать рассылку'"
          wrapperClass="button-wrapper--text button-wrapper--text-padding"
          :btnSvg="stat.title === 'Отправлено' ? 'recover' : 'rocket'"
          @func="stat.title === 'Отправлено' ? '' : form = true "
        />
      </div>
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
import Button from "../forms/Button";
import { getClass } from '@/mixins/getClass'
import { getPercents } from "@/mixins/getPercents";
import Form from './Mailing-form'

export default {
  name: "Past-mailing",
  props: ["mailing"],
  mixins: [getClass, getPercents],
  components: {
    Button,
    Form
  },

  data() {
    return {
      form: false
    }
  },

  methods: {
    goToDetails() {
      this.$router.push({
        path: `../reports/${this.mailing.id}`
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.past-mailing
  @media(max-width: 1024px)
    flex-wrap: wrap

  .mailing-block__left
    p::before
      background: #6EC977

    @media(max-width: 1024px)
      display: flex
      align-items: center
      width: 100%

    p
      @media(max-width: 1024px)
        margin-bottom: 0

    .button-wrapper
      @media(max-width: 1024px)
        display: none

  &__rating
    display: flex
    align-items: center
    margin-bottom: 5px

    @media(max-width: 1024px)
      margin-bottom: 0
      margin-right: 10px

    h3
      margin-left: 10px
      margin-bottom: 0

      @media(max-width: 1024px)
        font-size: 14px
        white-space: nowrap

  .mailing-block__right
    grid-column-gap: 10px

    &-ranges
      @media(max-width: 1024px)
        margin-top: 10px
        display: flex

  .mailing-block__right-block
    @media(max-width: 1240px)
      display: none

    p
      margin-top: 5px

  .popup__wrapper
    width: 1090px



</style>
