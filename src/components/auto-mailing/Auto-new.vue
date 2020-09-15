<template>
  <div class="autoMailings-form popup" v-if="show">
    <div class="popup__blur" @click="closeAutoMailingForm"></div>
    <div class="autoMailings-form__popup popup__wrapper">
      <div class="popup__close" @click="closeAutoMailingForm"></div>
      <div v-if="!editMode">
        <h1>Новое задание на рассылку</h1>
        <Input plchldr="Введите название авторассылки" id="firstInput" v-model="mailing.title" styles="width: 518px" />
      </div>

      <div v-else class="autoMailings-form__title-edit">
        <h1>{{mailing.title}}</h1>
        <Button btnText="Изменить" wrapperClass="button-wrapper--text" btnSvg="edit" @func="changeTitle" />
      </div>

      <div class="autoMailings-form__block autoMailings-form__condition">
        <div class="autoMailings-form__block-text">
          <h2>Условие</h2>
          <p>Например, если сообщение по каналу SMS не доставлено</p>
        </div>

        <div class="select-wrapper">
          <multiselect
            class="select select-white"
            :show-labels="false"
            v-model="mailing.condition"
            placeholder="Выберете условие"
            :options="conditions">
          </multiselect>
        </div>
      </div>

      <div class="autoMailings-form__actionblock" v-for="(event, index) in mailing.events" :key="index">
        <div class="autoMailings-form__block autoMailings-form__delay">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 1.5625H10.9375C11.369 1.5625 11.7188 1.21273 11.7188 0.78125C11.7188 0.349766 11.369 0 10.9375 0H6.25C5.81852 0 5.46875 0.349766 5.46875 0.78125C5.46875 1.21273 5.81852 1.5625 6.25 1.5625Z"/>
            <path d="M8.59375 2.8125C3.84359 2.8125 0 6.65676 0 11.4062C0 16.1563 3.84414 20 8.59375 20C13.3439 20 17.1875 16.1557 17.1875 11.4062C17.1875 6.65609 13.3432 2.8125 8.59375 2.8125ZM8.59375 18.4375C4.71672 18.4375 1.5625 15.2833 1.5625 11.4062C1.5625 7.52922 4.71672 4.375 8.59375 4.375C12.4708 4.375 15.625 7.52922 15.625 11.4062C15.625 15.2833 12.4708 18.4375 8.59375 18.4375Z"/>
            <path d="M8.59375 6.71875C8.16227 6.71875 7.8125 7.06852 7.8125 7.5V11.4062C7.8125 11.8377 8.16227 12.1875 8.59375 12.1875C9.02523 12.1875 9.375 11.8377 9.375 11.4062V7.5C9.375 7.06852 9.02523 6.71875 8.59375 6.71875Z"/>
          </svg>
          <p>Время задержки перед действием</p>
          <div class="select-wrapper">
            <multiselect
              class="select"
              :show-labels="false"
              v-model="event.delay"
              placeholder="1 час"
              :options="delay">
            </multiselect>
          </div>
        </div>

        <div class="autoMailings-form__block autoMailings-form__action">
          <div class="autoMailings-form__block-text">
            <h2>Действие</h2>
            <p>Например, если сообщение по каналу SMS не доставлено</p>
          </div>
          <div class="select-wrapper">
            <multiselect
              class="select"
              :show-labels="false"
              v-model="event.name"
              placeholder="Выберете действие"
              :options="actions">
            </multiselect>
          </div>
          <Input plchldr="Текст сообщения" v-model="event.message" v-show="event.name === 'Отправить SMS с текстом ...'" styles="width: 100%" />
        </div>
      </div>

      <div @click="addAction" class="autoMailings-form__add">
        <h2>+ Добавить действие</h2>
        <p>Вы можете добавлять несколько действий к одному условию</p>
      </div>
      <Button btnText="Сохранить авторассылку" wrapperClass="button-wrapper--no-svg" @func="saveMailing" />
    </div>
  </div>
</template>

<script>
import Button from "../forms/Button";
import Input from '../forms/Input'

export default {
  name: "Auto-new",
  components: {
    Button,
    Input
  },

  data() {
    return {
      editMode: false,
      show: false,

      conditions: [
        'Доотправка через мессаджеры',
        'Добивка теплых клиентов',
        'Поздравление с днем рождения'
      ],

      delay: [
        '1 час',
        'Сразу',
        'Через 2 часа'
      ],

      actions: [
        'Доотправлять через мессаджеры',
        'Отправить SMS с текстом ...'
      ],

      mailing: {
        id: null,
        title: '',
        condition: '',
        events: [
          {
            delay: '1 час',
            name: 'Выберете действие',
            message: '',
          }
        ]
      }
    }
  },

  methods: {
    addAction() {
      this.mailing.events.push({
        delay: '',
        name: ''
      })
    },

    closeAutoMailingForm() {
      this.show = false
      this.editMode = false
      this.mailing = {
        id: null,
        title: '',
        condition: '',
        events: [
          {
            delay: '1 час',
            name: 'Выберете действие',
            message: ''
          }
        ]
      }
    },

    saveMailing() {
      if (!this.mailing.id) this.mailing.id = 'auto' + Math.random().toString(36).substr(2, 9)

      if (this.editMode) {
        this.$store.dispatch('editAutoMailing', this.mailing)
        .then(() => {
          this.closeAutoMailingForm()
          this.editMode = false
        })
        .catch(er => console.log(er))
      } else {
        this.$store.dispatch('addAutoMailing', this.mailing)
        .then(() => {
          this.closeAutoMailingForm()
        })
        .catch(er => console.log(er))
      }
    },

    changeTitle() {
      this.editMode = false
    }
  },

  mounted() {
    this.$eventHub.$on('editAutoMailing', (data) => {
      this.show = true
      this.editMode = true
      this.mailing = data
    })

    this.$eventHub.$on('newAutoMailing', () => {
      this.show = true
    })
  }
};
</script>

<style lang="sass" scoped>
.autoMailings-form
  &__title-edit
    display: flex

    .button-wrapper
      margin-top: 4px
      margin-left: 25px

  &__popup
    h1
      margin-bottom: 27px

    #firstInput
      margin-bottom: 30px

  &__condition,
  &__action
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    align-items: center
    padding: 17px 20px 33px
    margin-bottom: 40px
    border-radius: 10px

    h2
      margin-bottom: 11px

    p
      font-size: 16px

  &__condition
    background: #425FA9

  &__action
    background: $modal-bg

    .input-wrapper
      margin-top: 20px

  &__block
    position: relative

    &-text
      width: 48%

    &::after
      position: absolute
      bottom: -53px
      left: 4px
      content: ''
      width: 10px
      height: 52px
      background-image: url(../../assets/img/icons/big-arrow.png)
      background-position: 100%
      background-repeat: no-repeat
      background-size: cover

    &-select
      width: 40%

      &--small
        width: 25%

  &__delay
    display: flex
    align-items: center
    margin-bottom: 40px

    &::after
      bottom: -38px

    p
      margin: 0 10px

    svg
      margin-bottom: 2px

      path
        fill: #82C198

  &__add
    padding: 36px 0
    text-align: center
    background: $modal-bg
    border-radius: 10px
    margin-top: 50px
    margin-bottom: 40px
    cursor: pointer
    border: 2px dashed #424242

    &:hover
      background: rgba(255, 255, 255, 0.1)

    h2
      margin-bottom: 11px

    p
      font-size: 16px


// SP

.sp
  .autoMailings-form
    &__condition
      background: #6D9AD8

      h2
        color: #EDEDED

      p
        color: #F4F4F4

    &__action
      background: $sp-card-bg

    &__delay
      svg
        path
          fill: #DF2E2E

    &__add
      background: $sp-card-bg
      border: 2px dashed #D6D6D6


// SD

.sd
  .autoMailings-form
    &__condition
      background: #6D9AD8

      h2
        color: #EDEDED

      p
        color: #F4F4F4

    &__action
      background: $sd-card-bg

    &__delay
      svg
        path
          fill: $sd-color

    &__add
      background: $sd-card-bg
      border: 2px dashed #D6D6D6

</style>
