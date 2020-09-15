<template>
  <div :id="id">
    <div ref="name" class="name toggle-block">
      <Toggle :isChecked="true" :num="index" @toggle="toggle" />
      <h3>{{title}}</h3>
      <ul>
        <li>
          <p>Мегафон</p>
          <div class="name__satus" :style="`background: ${getStatusColor(megafonStatus)}`"></div>
          <span>{{megafonStatus}}</span>
        </li>
        <li>
          <p>Билайн</p>
          <div class="name__satus" :style="`background: ${getStatusColor(beelineStatus)}`"></div>
          <span>{{beelineStatus}}</span>
        </li>
        <li>
          <p>Теле 2</p>
          <div class="name__satus" :style="`background: ${getStatusColor(tele2Status)}`"></div>
          <span>{{tele2Status}}</span>
        </li>
        <li>
          <p>МТС</p>
          <div class="name__satus" :style="`background: ${getStatusColor(mtsStatus)}`"></div>
          <span>{{mtsStatus}}</span>
        </li>
        <li>
          <p>Другие операторы</p>
          <div class="name__satus" :style="`background: ${getStatusColor(otherStatus)}`"></div>
          <span>{{otherStatus}}</span>
        </li>
      </ul>
      <Button
        btnText="Отозвать"
        btnSvg="plus"
        wrapperClass="button-wrapper--error button-wrapper--text"
        @func="popup = true"
      />
    </div>

    <div class="name-delete popup" v-show="popup">
      <div class="popup__blur" @click="popup = false"></div>
      <div class="popup__wrapper popup__wrapper--small">
        <div class="popup__close" @click="popup = false"></div>
        <h2>Отзыв имени</h2>
        <p>Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний</p>
        <Button @func="deleteName" btnText="Отозвать имя" btnSvg="arrow" wrapperClass="button-wrapper--error button-wrapper--error-bg" />
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "../others/Toggle";
import Button from "../forms/Button";

export default {
  name: "Name",
  props: [
    'id',
    "title",
    "index",
    "megafonStatus",
    "beelineStatus",
    "tele2Status",
    "mtsStatus",
    "otherStatus"
  ],
  components: {
    Toggle,
    Button
  },

  data() {
    return {
      popup: false
    }
  },

  methods: {
    getStatusColor(status) {
      if (status === "Модерация") return "#EFC633";
      else if (status === "Отклонено") return "#EA6363";
    },

    deleteName() {
      this.$store.dispatch('deleteName', this.id)
      this.popup = false
    },

    toggle() {
      this.$refs.name.classList.toggle("blur");
    }
  }
};
</script>

<style lang="sass" scoped>
.name
  h3
    width: 9%

  ul
    width: 60%
    display: flex
    justify-content: space-between

    div
      display: inline-block
      margin-right: 5px
      width: 8px
      height: 8px
      border-radius: 50%
      background: #82C198

    p
      line-height: 15px

    span
      font-size: 12px
      color: $text-blur

.name-delete
  .popup__wrapper
    display: flex
    flex-wrap: wrap
    justify-content: center
    text-align: center
    padding-bottom: 80px

    h2
      margin-bottom: 13px

    p
      margin-bottom: 30px


// White

.white
  .name
    ul
      span
        color: $white-text-blur

</style>
