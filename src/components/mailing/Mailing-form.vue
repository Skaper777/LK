<template>
  <section class="mailing-form-section">

    <BlockDesc :title="createDescription.title" :text="createDescription.texts[curStep - 1]" />

    <form class="mailing-form" action="">
      <div class="mailing-form__steps steps">
        <p>{{curStep}} шаг из 7</p>
        <div class="mailing-form__steps-dots dots">
          <span
            v-for="(i, index) of 7"
            :key="index"
            class="dots__dot"
            :class="index < curStep ? 'dots__dot--active' : false"
          ></span>
        </div>
      </div>

      <!--1 шаг-->
      <div class="mailing-form__block" v-show="curStep === 1">
        <h3 class="mailing-form__block-title">Выбор названия и канала отправки</h3>
        <div class="mailing-form__block-sub">
          <Input inputType="text" inputId="title" plchldr="Название рассылки" class="mailing-form__first-input" v-model="mailing.title"/>
        </div>
        <div class="mailing-form__block-sub">
          <h3>Канал отправки</h3>
          <Channels v-model="mailing.channel" />
        </div>
      </div>

      <!--2 шаг-->
      <div class="mailing-form__block" v-show="curStep === 2">
        <h3 class="mailing-form__block-title">Выбор способа отправки</h3>
        <div class="mailing-form__block-sub">
          <ul class="mailing-form__operators">
            <li v-for="(method, index) in sendMethods" :key="index">
              <p>{{method.name}}</p>
              <div class="select-wrapper">
                <multiselect
                  class="select"
                  :show-labels="false"
                  track-by="name"
                  label="name"
                  :options="method.options"
                  v-model="mailing.operators[index].method"
                  :value="method.options[0].name"
                  placeholder="Выберете способ отправки">
                </multiselect>
              </div>
              <span>{{mailing.operators[index].method.price ? mailing.operators[index].method.price : 0}} руб./сообщение</span>
            </li>
          </ul>
        </div>
      </div>

      <!--3 шаг-->
      <div class="mailing-form__block" v-show="curStep === 3">
        <h3 class="mailing-form__block-title">Базы для отправки и черные списки</h3>
        <div class="mailing-form__block-sub">
          <ul class="mailing-form__bases">
            <li>
              <div class="select-wrapper">
                <multiselect
                  class="select"
                  :show-labels="false"
                  v-model="mailing.total"
                  placeholder="Выберете базу для отправки"
                  :options="bases">
                </multiselect>
              </div>
              <Button btnSvg="plus" btnText="Загрузить новую базу" wrapperClass="button-wrapper--text" />
            </li>
            <li>
              <div class="select-wrapper">
                <multiselect
                  class="select"
                  :show-labels="false"
                  v-model="mailing.blackList"
                  placeholder="Выберете черный список"
                  :options="blackList">
                </multiselect>
              </div>
              <Button btnSvg="plus" btnText="Загрузить черный список" wrapperClass="button-wrapper--text" />
            </li>
          </ul>
        </div>
      </div>

      <!--4 шаг-->
      <div class="mailing-form__block" v-if="this.mailing.channel !== 'Voice'" v-show="curStep === 4">
        <h3 class="mailing-form__block-title">Текст сообщения</h3>
        <div class="mailing-form__block-sub">
          <p class="mailing-form__msg-length">{{mailing.message.length}}/140</p>
          <Input inputType="text" inputId="msg" plchldr="Ввидите текст сообщения" v-model="mailing.message" style="width: 100%" />
        </div>
        <div class="mailing-form__block-sub">
          <h4>Добавьте в текст сообщения специльные вставки</h4>
          <ul class="mailing-form__inserts">
            <li>
              <Button btnSvg="plus" btnText="Добавить имя" wrapperClass="button-wrapper--narrow" />
              <p>Добавьте для вставки "имени" абонента в текст сообщения (имя берется из вашей базы).</p>
            </li>
            <li>
              <Button btnSvg="plus" btnText="Добавить телефон" wrapperClass="button-wrapper--narrow" />
              <p>Добавьте для вставки номера абонента в текст сообщения</p>
            </li>
            <li>
              <Button btnSvg="plus" btnText="Добавить id" wrapperClass="button-wrapper--narrow" />
              <p>Добавьте для вставки id рассылки в текст сообщения</p>
            </li>
          </ul>
        </div>
      </div>

      <!--4 шаг Voice-->
      <div class="mailing-form__block mailing-form__voice" v-else v-show="curStep === 4">
        <h3 class="mailing-form__block-title">Настройка вызовов</h3>
        <div class="mailing-form__block-sub">
          <Button btnText="Загрузить аудиозапись" btnSvg="plus" />
          <p>Принимаем wav, до 5мб.</p>
        </div>
        <div class="mailing-form__block-sub">
          <ul>
            <li v-for="(item, index) in voice" :key="index">
              <p>{{item.title}}</p>
              <div>
                <div class="select-wrapper">
                  <multiselect
                    class="select"
                    :show-labels="false"
                    v-model="voice[`${item.title}`]"
                    placeholder="Выберете из списка"
                    :options="item.options">
                  </multiselect>
                </div>
                <span>{{item.text}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--5 шаг-->
      <div class="mailing-form__block" v-if="this.mailing.channel !== 'Voice'" v-show="curStep === 5">
        <h3 class="mailing-form__block-title">Посадочная страница для отслеживания эффективности рассылки</h3>
        <div class="mailing-form__block-sub mailing-form__landing">
          <div class="select-wrapper">
            <multiselect
              class="select"
              :show-labels="false"
              v-model="mailing.landing"
              placeholder="Выберете посадочную страницу"
              :options="landing">
            </multiselect>
          </div>
          <Button btnSvg="plus" btnText="Создать новую страницу" wrapperClass="button-wrapper--text" />
        </div>
      </div>

      <!--5 шаг Voice-->
      <div class="mailing-form__block mailing-form__voice-2" v-else v-show="curStep === 5">
        <h3 class="mailing-form__block-title">Добавить сценарий</h3>
        <div class="mailing-form__block-sub">
          <div class="mailing-form__condition">
            <h4>Условие</h4>
            <p>Например, если сообщение по каналу SMS не доставлено</p>
            <div class="select-wrapper">
              <multiselect
                class="select select-white"
                :show-labels="false"
                v-model="voice.condition"
                placeholder="Выберете условие"
                :options="['Получен статус', 'Дозвонился']">
              </multiselect>
            </div>
          </div>
          <div class="mailing-form__action">
            <h4>Действие</h4>
            <p>Например, если сообщение по каналу SMS не доставлено</p>
            <div class="select-wrapper">
              <multiselect
                class="select"
                :show-labels="false"
                v-model="voice.action"
                placeholder="Выберете действие"
                :options="['1 action', '2 action', '3 action']">
              </multiselect>
            </div>
          </div>
        </div>
      </div>

      <!--6 шаг-->
      <div class="mailing-form__block" v-if="!checkBlock" v-show="curStep === 6">
        <h3 class="mailing-form__block-title">Время отправки и тестовый номер</h3>
        <div class="mailing-form__block-sub" style="width: 280px">
          <Datepicker :language="ru" placeholder="Дата отправки" :monday-first="true" v-model="mailing.date" input-class="input input--date" calendar-class="calendar" />
          <Checkbox checkId="testMsg" text="Отправить тестовое сообщение" @func="toggleTestMsg" />
          <Input v-show="testMsg" plchldr="Номер для тестового сообщения" />
        </div>
      </div>

      <!--6 шаг checking-->
      <div class="mailing-form__block" v-else v-show="curStep === 6" style="min-height: 100px">
        <h3 class="mailing-form__block-title">Вы получили тестовое сообщение?</h3>
      </div>

      <!--7 шаг-->
      <div class="mailing-form__block" v-show="curStep === 7">
        <header>
          <div class="mailing-form__big-check">
          </div>
          <div>
            <h1>Предварительный рассчет готов</h1>
            <p>
              Пожалуйста, проверьте правильность данных и стоимость.<br>
              После сохранения рассылки ее редактирование будет невозможно.
            </p>
          </div>
        </header>

        <Table :mailing="mailing" />
      </div>

      <!--Buttons-->
      <div class="mailing-form__buttons">
        <Button v-if="checkBlock" btnText="Я не получил сообщение" btnSvg="plus" @func="closeCheckBlock" wrapperClass="button-wrapper--text button-wrapper--error" />
        <Button v-else-if="curStep > 1" btnText="Назад" btnSvg="arrow" @func="stepBack" wrapperClass="button-wrapper--text" />
        <Button v-if="curStep === 6 && testMsg" btnText="Отправить тестовое сообщение" @func="sendTestMsg" btnSvg="arrow" />
        <Button v-else-if="checkBlock" btnText="Да, продожить" @func="stepForward" btnSvg="arrow" />
        <Button v-else-if="curStep === 7" btnText="Да, создать рассылку" @func="saveMailing" wrapperClass="button-wrapper--green button-wrapper--no-svg" />
        <Button v-else btnText="Продожить" @func="stepForward"  btnSvg="arrow" />
      </div>
    </form>

  </section>
</template>

<script>

import BlockDesc from "../page-chunks/Block-description";
import Input from '@/components/forms/Input'
import Channels from '@/components/forms/Channels-tabs'
import Button from '@/components/forms/Button'
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'
import Checkbox from '@/components/forms/Checkbox'
import Table from './Mailing-table'

export default {
  name: 'Mailing-form',
  components: {
    BlockDesc,
    Input,
    Channels,
    Button,
    Datepicker,
    Checkbox,
    Table
  },

  data() {
    return {
      curStep: 1,
      ru: ru,
      testMsg: false,
      checkBlock: false,
      createDescription: {
        title: "Создать новую рассылку",
        texts: [
          "Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний",
          "Выберете с какими именами отправителей Вы хотите сделать рассылку. “Обезличенные” рассылки будут стоить дешеле, с брендированными Ваши клиенты будут вместо незнакомого номера видеть название Вашей организации.",
          "Выберете базу для отправки рассылок. Вы можете выбрать как существующую базу так и загрузить новую базу для данной рассылки. Так же вы можете добавить базу или отдельные номера с черным списком",
          "Придумайте текст для Вашего сообщения. Обратите внимание, что количнство символов для SMS рассылки ограничено.",
          "Посадочная страница необходима для отслеживания эффективности работы Вашей рассылки. В тексте сообщения будет размещена ссылка, переходя по которой пользователи будут помечаться в системе. Таким образом, вы сможете более точно оценивать эффективность Ваших предложений.",
          "Выберете дату начала рассылки. Так же вы моежете отправить себе тестовое сообщение для того что бы убедиться что Ваша рассылка отображается корректно.",
          "Мы создали Вашу рассылку и сделали ее предварительный расчет. Если Вы убиделись в правильности введенных данных и ценах на рассылку то пора ее запустить!",
          "Мы отправили Вам тестовое сообщение. Оно должно дойти в течение 5 минут. Если этого не произошло вернитесь к редактированию и убидетесь в правильности введенных данных"
        ]
      },

      voice: [
        {
          title: 'Звонков в минуту',
          options: [
            '1 вариант',
            '2 вариант',
            '3 вариант',
          ],
          text: 'Количество звонков, которое будет совершаться абонентам за 1 минуту'
        },
        {
          title: 'Повторений адио файла',
          options: [
            '1 вариант',
            '2 вариант',
            '3 вариант',
          ],
          text: 'Количество повторений, которое будет произведено после поднятия абонентом трубки'
        },
        {
          title: 'Попыток позвонить',
          options: [
            '1 вариант',
            '2 вариант',
            '3 вариант',
          ],
          text: 'Количество попыток дозвона одному номеру'
        }
      ],

      sendMethods: [
        {
          name: 'Мегафон',
          options: [
            {
              name: 'Брендовое имя отправителя',
              price: 2.35
            },
            {
              name: 'Нейтральное имя отправителя',
              price: 2.05
            },
            {
              name: 'Не отправлять',
              price: 0
            }
          ]
        },
        {
          name: 'МТС',
          options: [
            {
              name: 'Брендовое имя отправителя',
              price: 2.35
            },
            {
              name: 'Нейтральное имя отправителя',
              price: 2.05
            },
            {
              name: 'Не отправлять',
              price: 0
            }
          ]
        },
        {
          name: 'Билайн',
          options: [
            {
              name: 'Брендовое имя отправителя',
              price: 2.35
            },
            {
              name: 'Нейтральное имя отправителя',
              price: 2.05
            },
            {
              name: 'Не отправлять',
              price: 0
            }
          ]
        },
        {
          name: 'ТЕЛЕ 2',
          options: [
            {
              name: 'Брендовое имя отправителя',
              price: 2.35
            },
            {
              name: 'Нейтральное имя отправителя',
              price: 2.05
            },
            {
              name: 'Не отправлять',
              price: 0
            }
          ]
        },
        {
          name: 'Другие',
          options: [
            {
              name: 'Брендовое имя отправителя',
              price: 2.35
            },
            {
              name: 'Нейтральное имя отправителя',
              price: 2.05
            },
            {
              name: 'Не отправлять',
              price: 0
            }
          ]
        }
      ],

      bases: [],
      blackList: [],
      landing: [],

      mailingEmpty: {},

      mailing: {
        title: '',
        channel: '',
        voice: {},
        operators: [
          {
            title: 'Мегафон',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.35
            }
          },
          {
            title: 'Мтс',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.5
            }
          },
          {
            title: 'Tele2',
            method: {
              name: 'Брендовое имя отправителя',
              price: 1.15
            }
          },
          {
            title: 'Билайн',
            method: {
              name: 'Брендовое имя отправителя',
              price: 0.1
            }
          },
          {
            title: 'Другие',
            method: {
              name: 'Брендовое имя отправителя',
              price: 2.3
            }
          }
        ],
        total: 500,
        blackList: 100,
        message: '',
        landing: '',
        date: '',
        testMsg: '',
        baseChecking: true,
        totalPrice: ''
      }
    }
  },

  methods: {
    stepBack() {
      this.curStep--
    },

    toggleTestMsg() {
      this.testMsg = !this.testMsg
    },

    stepForward() {
      if (this.checkBlock) this.checkBlock = false
      this.curStep++
    },

    sendTestMsg() {
      this.testMsg = false;
      this.checkBlock = true;
    },

    closeCheckBlock() {
      this.checkBlock = false;
    },

    resetInput(input) {
      input.value = ''
      input.nextElementSibling.classList.remove('input-placeholder--focus')
    },

    saveMailing() {
      if (!this.mailing.id) this.mailing.id = 'mail' + Math.random().toString(36).substr(2, 9)
      this.$store.dispatch('addMailing', this.mailing)
        .then(() => {
          this.$router.push('mailing/all')
          this.mailing = Object.assign({}, this.mailingEmpty)
          this.resetInput(title)
          this.resetInput(msg)
          this.curStep = 1
        })
        .catch(er => console.log(er))
    }
  },

  mounted() {
    this.mailingEmpty = Object.assign({}, this.mailing)
  }
}
</script>

<style lang="sass" scoped>
.mailing-form-section
  display: flex
  justify-content: space-between

  @media(max-width: 1380px)
    flex-wrap: wrap

.mailing-form__big-check
  width: 65px
  height: 65px
  background: url(../../assets/img/icons/lastStep.png)
  margin-right: 16px

  @media(max-width: 768px)
    display: none

.mailing-form
  display: flex
  flex-direction: column
  align-items: flex-start
  min-width: 570px
  padding-bottom: 40px

  @media(max-width: 1024px)
    min-width: auto
    width: 100%

  &__block
    width: 100%
    min-height: 200px

    h3
      font-size: 16px
      font-weight: 500

    h4
      font-size: 12px
      font-weight: 500

    header
      display: flex
      margin-bottom: 27px

      h1
        margin-bottom: 7px

    &-title
      margin-bottom: 40px

    &-sub
      margin-bottom: 20px

      h3
        margin-bottom: 15px

  &__first-input
    width: 365px

    @media(max-width: 768px)
      width: 100%

  &__buttons
    display: flex
    align-items: center
    margin-top: 20px

    @media(max-width: 768px)
      flex-wrap: wrap

    .button-wrapper--text
      margin-right: 18px

      @media(max-width: 440px)
        margin-bottom: 10px

  &__operators
    li
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 10px

      @media(max-width: 768px)
        flex-wrap: wrap
        margin-bottom: 20px

      p
        width: 18%

      .select-wrapper
        width: 48%

        @media(max-width: 768px)
          width: 100%
          margin: 10px 0

      span
        width: 30%

        @media(max-width: 768px)
          width: 100%

  &__bases
    li
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 30px

      @media(max-width: 768px)
        margin-bottom: 20px

      .button-wrapper
        width: 40%

        @media(max-width: 768px)
          width: auto

  &__msg-length
    color: $text-blur
    margin-bottom: 8px

  &__inserts
    li
      display: flex
      align-items: center
      margin-bottom: 10px

      p
        margin-left: 10px
        font-size: 12px
        line-height: 124%
        color: $text-blur

  &__landing
    display: flex
    align-items: center

    @media(max-width: 768px)
      flex-wrap: wrap

    .select-wrapper
      margin-right: 30px

      @media(max-width: 768px)
        margin-bottom: 10px

  &__voice
    p
      color: $text-blur
      margin-top: 10px
      font-size: 12px

    ul
      li
        margin-bottom: 25px

      p
        color: $title-color
        margin-bottom: 10px
        font-weight: 500

      div
        display: flex
        justify-content: space-between
        align-items: center

        @media(max-width: 768px)
          flex-wrap: wrap

        span
          width: 60%

  &__condition,
  &__action
    display: flex
    flex-direction: column
    align-items: flex-start
    padding: 17px 22px
    border-radius: 10px
    margin-bottom: 40px

    h4
      font-size: 16px
      margin: 0
      margin-bottom: 7px

    p
      margin-bottom: 16px

  &__condition
    position: relative
    background: #425FA9

    &::after
      position: absolute
      bottom: -40px
      left: 15px
      content: ''
      width: 10px
      height: 40px
      background-image: url(../../assets/img/icons/big-arrow.png)
      background-position: 100%
      background-repeat: no-repeat
      background-size: cover

  &__action
    background: $modal-bg


// White

.white
  .mailing-form__voice ul p
    color: $white-title-color

  .mailing-form__action
    h4
      color: $white-title-color


// SP

.sp
  .mailing-form__condition
    background: #6D9AD8

    p
      color: #F4F4F4

  .mailing-form__action
    background: $sp-card-bg

  .mailing-form__big-check
    background: url(../../assets/img/icons/spLastStep.png)


// SD

.sd
  .mailing-form__condition
    background: #6D9AD8

    p
      color: #F4F4F4

  .mailing-form__action
    background: white

  .mailing-form__big-check
    background: url(../../assets/img/icons/sdLastStep.png)


</style>
