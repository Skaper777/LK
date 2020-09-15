<template>
  <main>
    <section class="reports-item">
      <div class="container">
        <Button
          @func="$router.push('.')"
          btnText="Все рассылки"
          btnSvg="arrow"
          class="reports-item__back"
          wrapperClass="button-wrapper--text"
        />
        <div class="reports-item__wrapper">
          <header class="reports-item__header">
            <div class="reports-item__header-left">
              <div class="reports-item__header-rating">
                <img
                  v-if="report.rating"
                  :src="require(`@/assets/img/rating/${report.rating}.png`)"
                  alt="rating"
                />
                <h3>{{report.date | moment('DD MMMM')}}</h3>
              </div>
              <p>{{report.status}}, {{report.title}}</p>
            </div>
            <div class="reports-item__header-right">
              <Button
                @func="toRate = true"
                btnText="Оценить рассылку"
                btnSvg="rating"
                wrapperClass="button-wrapper--narrow"
              />
              <Button
                btnText="Скачать отчет"
                btnSvg="arrow"
                wrapperClass="button-wrapper--narrow button-wrapper--download"
              />
            </div>
          </header>

          <div class="reports-item__pie">
            <div class="reports-item__pie-diagram">
              <CircleBlock :data="circleData" :options="circleOptions" />
            </div>
            <ul class="reports-item__pie-info">
              <li
                @click="setActiveStat(stat.title)"
                v-for="(stat) in report.stats"
                :key="stat.title"
                class="reports-item__pie-info-item"
                :class="stat.active ? 'reports-item__pie-info-item--active' : ''"
              >
                <p :class="getClass(stat.title)">{{stat.title}}</p>
                <span>{{stat.msgs}} сообщений</span>
              </li>
            </ul>
          </div>

          <transition name="fade">
            <div v-if="activeStat" class="reports-item__numbers">
              <header>
                <div class="reports-item__numbers-header-left">
                  <div class="reports-item__numbers-logo">
                    <img :src="require(`@/assets/img/icons/${getIcon(activeStat.title)}.svg`)" alt="">
                  </div>
                  <div class="reports-item__numbers-title">
                    <h3>{{activeStat.title}}</h3>
                    <span>{{activeStat.base.length}} номеров</span>
                  </div>
                </div>
                <div class="reports-item__numbers-header-right">
                  <Button @func="form = true" btnText="Создать рассылку" btnSvg="rocket" wrapperClass="button-wrapper--narrow" />
                  <Button @func="inBlackListPopup = true" btnText="Все в черный список" btnSvg="arrow" wrapperClass="button-wrapper--error-bg button-wrapper--error button-wrapper--narrow" />
                </div>
              </header>
              <Phones :phones="activeStat.base" :inBlackList="true" className="phones--light" />
            </div>
          </transition>
        </div>
      </div>
    </section>

    <transition name="fade">
      <div class="popup" v-if="form">
        <div class="popup__blur" @click="form = false"></div>
        <div class="popup__wrapper">
          <div class="popup__close" @click="form = false"></div>
          <Form/>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="inBlackList popup" v-if="inBlackListPopup">
        <div class="popup__blur" @click="inBlackListPopup = false"></div>
        <div class="popup__wrapper popup__wrapper--small">
          <div class="popup__close" @click="inBlackListPopup = false"></div>
          <h2>Вы уверены что хотите отправить номера в черный списк?</h2>
          <div class="inBlackList__btns">
            <Button btnText="Добавить в черный список" btnSvg="arrow" wrapperClass="button-wrapper--narrow button-wrapper--error button-wrapper--error-bg" />
            <Button @func="inBlackListPopup = false" btnText="Нет" btnSvg="arrow" wrapperClass="button-wrapper--narrow button-wrapper--green" />
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="reports-item__popup popup" v-if="toRate">
        <div class="popup__blur" @click="toRate = false"></div>
        <div class="popup__wrapper popup__wrapper--small">
          <div class="popup__close" @click="toRate = false"></div>
          <h2>Оцените качество рассылки</h2>
          <ul @mouseleave="removeHover" class="reports-item__rating">
            <li
              @mouseenter="() => setHover(index)"
              @click="() => setRating(index)"
              class="reports-item__rating-item"
              :class="(star.active || star.hover) ? 'reports-item__rating-item--hover' : false"
              v-for="(star, index) in stars"
              :key="index"
            >
              <svg
                width="60"
                height="53"
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
    </transition>

  </main>
</template>

<script>
import Button from "@/components/forms/Button";
import CircleBlock from "@/mixins/circle.js";
import { getPercents } from "@/mixins/getPercents";
import Phones from '@/components/bases/Phones'
import Form from '@/components/mailing/Mailing-form'
import { getIcon } from '@/mixins/getIcon'

export default {
  name: "Reports-item",
  props: ["id"],
  mixins: [getPercents, getIcon],
  components: {
    Button,
    CircleBlock,
    Phones,
    Form
  },

  data() {
    return {
      inBlackListPopup: false,
      form: false,
      toRate: false,
      rating: 0,

      circleOptions: {
        cutoutPercentage: 20,

        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      },

      info: {
        sent: {
          active: false
        }
      },

      report: {},

      activeStat: null,

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

  computed: {
    circleData() {
      const data = {
        labels: ["", ""],
        datasets: [
          {
            backgroundColor: ["#496EB7", "transparent"],
            borderWidth: 15,
            borderColor: this.getBorderColor(),
            data: [
              this.getPercents(this.report.total, this.report.stats[0].msgs),
              100 -
                this.getPercents(this.report.total, this.report.stats[0].msgs)
            ]
          },
          {
            backgroundColor: ["#7EB483", "transparent"],
            borderWidth: 15,
            borderColor: this.getBorderColor(),
            data: [
              this.getPercents(this.report.total, this.report.stats[1].msgs),
              100 -
                this.getPercents(this.report.total, this.report.stats[1].msgs)
            ]
          }
        ]
      };

      if (this.report.stats[2] && this.report.stats[2].msgs > 0)
        data.datasets.push({
          backgroundColor: ["#C0714F", "transparent"],
          borderWidth: 15,
          borderColor: this.getBorderColor(),
          data: [
            this.getPercents(this.report.total, this.report.stats[2].msgs),
            100 - this.getPercents(this.report.total, this.report.stats[2].msgs)
          ]
        });

      if (this.report.stats[3] && this.report.stats[3].msgs > 0)
        data.datasets.push({
          backgroundColor: ["#7C9547", "transparent"],
          borderWidth: 15,
          borderColor: this.getBorderColor(),
          data: [
            this.getPercents(this.report.total, this.report.stats[3].msgs),
            100 - this.getPercents(this.report.total, this.report.stats[3].msgs)
          ]
        });

      if (this.report.stats[4] && this.report.stats[4].msgs > 0)
        data.datasets.push({
          backgroundColor: ["#90B04C", "transparent"],
          borderWidth: 15,
          borderColor: this.getBorderColor(),
          data: [
            this.getPercents(this.report.total, this.report.stats[4].msgs),
            100 - this.getPercents(this.report.total, this.report.stats[4].msgs)
          ]
        });

      return data;
    }
  },

  methods: {
    setHover(index) {
      this.stars.forEach((star, i) =>
        i <= index ? (star.hover = true) : (star.hover = false)
      );
    },

    getBorderColor() {
      if (app.classList.contains('zm')) return '#202020'
      else if (app.classList.contains('sp')) return 'white'
    },

    setRating(index) {
      this.stars.forEach((star, i) =>
        i <= index ? (star.active = true) : (star.active = false)
      );
      this.rating = index + 1;
    },

    removeHover() {
      this.stars.forEach(star => (star.hover = false));
    },

    setActiveStat(title) {
      this.activeStat = this.$store.getters.getMailingStatInfo(this.id ,title);
      this.activeStat.base = this.$store.getters.getBase('base0').numbers;
    },

    getClass(title) {
      if (title === "Отправлено") return "reports-item__pie-info-sent";
      else if (title === "Доставлено") return "reports-item__pie-info-fact";
      else if (title === "Тёплые") return "reports-item__pie-info-warm";
      else if (title === "В работе") return "reports-item__pie-info-inWork";
      else if (title === "Продажа") return "reports-item__pie-info-sale";
    }
  },

  beforeMount() {
    this.report = this.$store.getters.getMailing(this.id);
  },

  mounted() {
    this.$eventHub.$emit('setCrumbLogo', this.$route.name)
  }
};
</script>

<style lang="sass" scoped>
.reports-item
  padding-top: 20px

  .container
    position: relative

    @media(max-width: 1240px)
      padding-top: 50px

  &__back
    position: absolute
    left: 150px
    top: 20px

    @media(max-width: 1240px)
      top: 0

  &__wrapper
    width: 820px
    margin: 0 auto
    background: $modal-bg
    padding: 13px 20px
    box-shadow: 0px 25px 54px #000000
    border-radius: 10px
    box-sizing: border-box

  &__header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 20px

    p
      position: relative
      font-size: 12px
      padding-left: 20px

      &::before
        content: ''
        position: absolute
        left: 0
        top: 7px
        width: 8px
        height: 8px
        border-radius: 50%
        background: #6EC977

    &-left,
    &-right,
    &-rating
      display: flex
      align-items: center

    &-rating
      img
        margin-right: 16px

      h3
        font-size: 20px
        font-weight: 500
        margin-right: 20px

    .button-wrapper--download
      margin-left: 20px

  &__pie
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 35px

    &-diagram
      width: 330px
      height: 330px
      transform: scale(-1, 1)

    &-info
      width: 100%
      margin-left: 15px

      &-item
        display: flex
        justify-content: space-between
        background: rgba(255, 255, 255, 0.04)
        padding: 15px 20px
        border-radius: 10px
        margin-bottom: 5px
        cursor: pointer
        transition: .2s

        &:hover
          background: rgba(255, 255, 255, 0.1)

        &--active
          background: rgba(255, 255, 255, 0.1)

        p
          padding-left: 25px
          font-weight: 500
          font-size: 16px

        span
          font-size: 16px

      &-sent
        color: #496EB7
        background: url(../../../assets/img/icons/sent.svg) no-repeat 0
        background-size: contain

      &-fact
        color: #89A97E
        background: url(../../../assets/img/icons/fact.svg) no-repeat 0
        background-size: contain

      &-warm
        color: #C0714F
        background: url(../../../assets/img/icons/warm.svg) no-repeat 0
        background-size: contain

      &-inWork
        color: #898D97
        background: url(../../../assets/img/icons/inWork.svg) no-repeat 0
        background-size: contain

      &-sale
        color: #90B04C
        background: url(../../../assets/img/icons/sale.svg) no-repeat 0
        background-size: contain

  &__popup
    .popup__wrapper
      width: 620px
      padding: 70px 100px

    h2
      font-size: 28px
      margin-bottom: 54px

  &__rating
    display: flex
    justify-content: space-between

  &__rating-item
    svg
      cursor: pointer

    &--hover
      svg
        path
          fill: $main-color

  &__numbers
    header
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 30px

    &-header-left
      display: flex
      align-items: center

    &-logo
      margin-right: 15px

      img
        width: 25px

    &-title
      h3
        font-weight: 500

      span
        font-size: 12px
        color: $text-blur

    &-header-right
      .button-wrapper--error-bg
        margin-left: 20px

.inBlackList
  .popup__wrapper--small
    width: 450px
    padding: 53px 70px

  &__btns
    display: flex
    justify-content: space-between


// SP

.sp
  .reports-item
    &__wrapper
      background: white
      box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)

    &__rating-item
      svg
        cursor: pointer

        path
          fill: $sp-modal-bg

      &--hover
        svg
          path
            fill: $sp-color


  .reports-item__pie-info-item
    background: $sp-card-bg

    &:hover
      opacity: .7

</style>
