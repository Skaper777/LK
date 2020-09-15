<template>
  <div class="complited-mailing mailing-block">
    <div class="complited-mailing__left">
      <div class="complited-mailing__check"></div>
      <h2>Рассылка SMS завершена!</h2>
      <div class="complited-mailing__stats">
        <div>
          <p>{{getPercents(mailing.total, mailing.stats[0].msgs)}}%</p>
          <span>{{mailing.stats[0].msgs}}/{{mailing.total}}</span>
        </div>
        <div>
          <p>{{getPercents(mailing.total, mailing.stats[1].msgs)}}%</p>
          <span>{{mailing.stats[1].msgs}}/{{mailing.total}}</span>
        </div>
      </div>
    </div>

    <div class="complited-mailing__right">
      <p>Оцените качество рассылки</p>
      <ul @mouseleave="removeHover" class="complited-mailing__rating">
        <li
          @mouseenter="() => setHover(index)"
          @click="() => setRating(index)"
          class="complited-mailing__rating-item"
          :class="(star.active || star.hover) ? 'complited-mailing__rating-item--hover' : false"
          v-for="(star, index) in stars"
          :key="index"
        >
          <svg
            width="31"
            height="28"
            viewBox="0 0 31 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.3888 6.05727L21.7164 8.28127L17.1502 1.43224C16.3671 0.257881 14.6358 0.254007 13.8503 1.43224L9.28411 8.28127L2.6117 6.05727C1.17125 5.5766 -0.258749 6.83424 0.0398769 8.32736C2.98702 22.4755 2.53191 22.1029 3.28525 22.8566C10.0204 29.5914 20.9793 29.5918 27.7149 22.8566C28.4682 22.1033 28.0193 22.4472 30.9602 8.32736C31.2573 6.84276 29.8389 5.57389 28.3888 6.05727ZM26.0404 20.4541C20.9676 25.1066 11.744 27.4979 4.9601 20.4541L3.04944 9.35035L9.46693 10.9728C10.3152 11.256 11.2478 10.9357 11.744 10.1916L15.5003 4.55723L19.2565 10.1916C19.7523 10.9357 20.685 11.2556 21.5336 10.9728L27.9511 9.35035L26.0404 20.4541Z"
              fill="#313131"
            />
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { getPercents } from "@/mixins/getPercents";

export default {
  name: "Complited-mailing",
  props: ["mailing"],
  mixins: [getPercents],

  data() {
    return {
      rating: 0,
      stars: [
        {
          hover: false,
          active: false
        },
        {
          hover: false,
          active: false
        },
        {
          hover: false,
          active: false
        },
        {
          hover: false,
          active: false
        },
        {
          hover: false,
          active: false
        }
      ]
    };
  },

  methods: {
    setHover(index) {
      this.stars.forEach((star, i) => i <= index ? star.hover = true : star.hover = false)
    },

    setRating(index) {
      this.stars.forEach((star, i) => i <= index ? star.active = true : star.active = false)
      this.rating = index + 1
    },

    removeHover() {
      this.stars.forEach(star => star.hover = false)
    }
  }
};
</script>

<style lang="sass" scoped>
.complited-mailing
  position: relative
  padding: 20px 20px 25px

  h2
    padding-left: 45px
    margin-bottom: 20px
    white-space: nowrap

    @media(max-width: 768px)
      font-size: 16px

  &__check
    width: 33px
    height: 33px
    position: absolute
    top: 13px
    left: 20px
    background: url(../../assets/img/icons/lastStep.png) 50%
    background-size: 33px

  &__left,
  &__right
    width: 37%

    @media(max-width: 768px)
      width: 100%

  &__right
    @media(max-width: 768px)
      display: none

    p
      color: $title-color
      margin-bottom: 20px

  &__rating,
  &__stats
    display: flex
    justify-content: space-between

  &__stats
    max-width: 350px

    div
      display: flex
      align-items: center

      p
        font-size: 20px
        font-weight: 500
        margin-right: 5px

      span
        font-size: 12px
        color: $text-blur

      &:first-of-type
        p
          color: #EFC633

      &:last-of-type
        p
          color: $main-color

  &__rating
    max-width: 350px

  &__rating-item
    svg
      cursor: pointer

    &--hover
      svg
        path
          fill: $main-color

// SP

.sp
  .complited-mailing
    &__check
      background: url(../../assets/img/icons/spLastStep.png) 50%
      background-size: 33px

    &__rating-item
      svg
        path
          fill: #F1F4F6

      &--hover
        svg
          path
            fill: $sp-color


// SD

.sd
  .complited-mailing
    &__check
      background: url(../../assets/img/icons/sdLastStep.png) 50%
      background-size: 33px

    &__rating-item
      svg
        path
          fill: #F1F4F6

      &--hover
        svg
          path
            fill: $sd-color


// WHite

.white
  .complited-mailing
    &__right
      p
        color: $white-title-color

</style>
