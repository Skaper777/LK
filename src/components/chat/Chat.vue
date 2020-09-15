<template>
  <div class="chat">
    <div ref="manager" @click="chat = !chat" class="chat__manager">
      <div class="chat__messages notifications-count" v-show="chatMessages > 0 && !chat">{{chatMessages}}</div>
      <img v-if="!chat" src="@/assets/img/menu/manager.png" />
      <div v-else class="chat__close"></div>
    </div>
    <span>
      Личный
      <br />менеджер
    </span>

    <transition name="fade">
      <div class="chat__inner chat-popup" v-if="chat">
        <div class="chat__inner-close" @click="chat = !chat"></div>
        <header>
          <div class="chat-popup__ava">
            <img src="@/assets/img/menu/manager.png" alt />
          </div>
          <div class="chat-popup__contacts">
            <h3>{{manager.name}}</h3>
            <p>{{manager.phone}}</p>
            <p>{{manager.email}}</p>
          </div>
        </header>

        <div class="chat-popup__body">
          <Tabs :tabs="tabs" />

          <div class="chat-popup__body-wrapper">
            <transition name="fade" mode="out-in">
              <ul v-if="tabs[0].show" class="chat-popup__actions" key="left">
                <li>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 15C30 16.7148 29.7128 18.3971 29.1463 19.9999C28.8432 20.8566 27.7201 21.0578 27.1392 20.3574L23.3167 15.748C22.9035 15.2499 22.9726 14.5111 23.4707 14.098C23.9687 13.6848 24.7076 13.7537 25.1209 14.252L27.483 17.1005C27.5983 16.4101 27.6562 15.7086 27.6562 15C27.6562 8.00423 21.9949 2.34375 15 2.34375C8.00423 2.34375 2.34375 8.00514 2.34375 15C2.34375 15.7086 2.40166 16.4101 2.51701 17.1005L4.8793 14.252C5.29243 13.7537 6.03104 13.6848 6.52931 14.098C7.02759 14.5111 7.09648 15.2499 6.68335 15.748L2.86079 20.3574C2.28081 21.0571 1.15677 20.8569 0.853729 19.9999C0.287247 18.3971 0 16.7148 0 15C0 6.70876 6.7099 0 15 0C23.2912 0 30 6.7099 30 15ZM26.1797 25.001C20.1956 31.6859 9.76295 31.6397 3.82027 25.001C3.41721 24.5506 3.4227 23.8669 3.83331 23.4233C5.73097 21.3089 8.17451 19.7971 10.854 19.0249C7.31895 15.3845 9.88632 9.21867 15 9.21867C20.1121 9.21867 22.6817 15.3836 19.146 19.0249C21.8255 19.7971 24.269 21.3087 26.1667 23.4233C26.5773 23.8669 26.5828 24.5506 26.1797 25.001ZM14.9986 18.4376C16.9032 18.4367 18.4376 16.8892 18.4376 15C18.4376 13.1046 16.8954 11.5624 15 11.5624C13.1046 11.5624 11.5624 13.1046 11.5624 15C11.5624 16.8949 13.1037 18.4367 14.9986 18.4376ZM23.6705 24.2194C18.7944 19.6374 11.2099 19.6333 6.32973 24.2194C11.2061 28.8011 18.7971 28.7979 23.6705 24.2194Z" fill="#82C198"/>
                  </svg>
                  <h3>Пригласить менеджера</h3>
                  <p>Воспользуйтесь этой функцией для того что бы дать менеджеру доступ в личный кабинет для оказания Вам оперативной поддержки</p>
                  <Button
                    btnText="Пригласить менеджера"
                    btnSvg="arrow"
                    wrapperClass="button-wrapper--narrow"
                  />
                </li>
                <li>
                  <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.8944 0H4.14453C2.2059 0 0.628906 1.577 0.628906 3.51562V26.4844C0.628906 28.423 2.2059 30 4.14453 30H17.8946C19.833 30 21.4102 28.423 21.4102 26.4844V3.51562C21.41 1.577 19.833 0 17.8944 0ZM4.14453 2.34375H17.8946C18.5407 2.34375 19.0665 2.86949 19.0665 3.51562V23.0468H2.97266V3.51562C2.97266 2.86949 3.4984 2.34375 4.14453 2.34375ZM17.8944 27.6562H4.14453C3.4984 27.6562 2.97266 27.1305 2.97266 26.4844V25.3905H19.0665V26.4844C19.0663 27.1305 18.5407 27.6562 17.8944 27.6562ZM5.25781 20.7813H16.7813C17.4286 20.7813 17.9532 20.2567 17.9532 19.6095V5.78133C17.9532 5.13405 17.4286 4.60945 16.7813 4.60945H5.25781C4.61053 4.60945 4.08594 5.13405 4.08594 5.78133V19.6095C4.08594 20.2565 4.61053 20.7813 5.25781 20.7813ZM6.42969 18.4376V11.5624H15.6095V18.4373H6.42969V18.4376ZM15.6092 6.9532V9.2189H6.42969V6.9532H15.6092Z" fill="#82C198"/>
                  </svg>
                  <h3>Обратный звонок</h3>
                  <p>Воспользуйтесь функцией обратного звонка для быстрой связи с Вашим личным менеджером</p>
                  <Button
                    btnText="Позвоните мне"
                    btnSvg="arrow"
                    wrapperClass="button-wrapper--narrow"
                  />
                </li>
              </ul>

              <vue-custom-scrollbar v-else class="ticket-scroll" :settings="scroll">
                <ul  class="chat-popup__tickets" key="right">
                  <li @click="() => getTicket(ticket.id)" v-for="ticket in tickets" :key="ticket.id">
                    <span>{{ticket.id}}</span>
                    <p>{{ticket.title}}</p>
                  </li>
                </ul>
              </vue-custom-scrollbar>
            </transition>

            <transition name="fade">
              <div
                v-if="!tabs[0].show"
                class="chat-popup__ticket"
                :class="ticket.active ? 'chat-popup__ticket--active': ''"
              >
                <div>
                  <header @click="ticket.active = false">
                    <span>{{ticket.info.id}}</span>
                    <p>{{ticket.info.title}}</p>
                  </header>
                  <vue-custom-scrollbar class="chat-scroll" :settings="scroll">
                  <ul ref="messages" class="chat-popup__ticket-messages">
                    <li
                      class="chat-popup__ticket-messages-item"
                      :class="msg.type === 'income' ? 'chat-popup__ticket-messages-item--in' : 'chat-popup__ticket-messages-item--out'"
                      v-for="(msg, index) in ticket.info.messages"
                      :key="index"
                    >
                      <p>{{msg.text}}</p>
                      <span>{{msg.time}}</span>
                    </li>
                  </ul>
                  </vue-custom-scrollbar>
                </div>
                <footer>
                  <input @keypress.enter="sendMsg" v-model="msg.text" type="text" placeholder="Текст сообщения" />
                  <button @click="sendMsg"></button>
                </footer>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>

    <Hint :hint="hint" />
  </div>
</template>

<script>
import Tabs from "../page-chunks/Tabs";
import Button from "../forms/Button";
import vueCustomScrollbar from 'vue-custom-scrollbar'
import Hint from '../hints/Hints'

export default {
  name: "Chat",
  components: {
    Tabs,
    Button,
    vueCustomScrollbar,
    Hint
  },

  data() {
    return {
      scroll: {

      },
      chat: false,
      chatMessages: 2,
      tabs: [
        {
          name: "Действия",
          show: true,
        },
        {
          name: "Обращения в поддержку",
          show: false,
        },
      ],

      ticket: {
        active: false,
        info: {},
      },

      msg: {
        type: 'outcome',
        text: ''
      },

      hint: {
        show: false,
        title: 'Ваш личный менеджер',
        text: 'Обратитесь к Вашему менеджеру за помошью в либое время'
      }
    };
  },

  computed: {
    manager() {
      return this.$store.getters.getManager;
    },

    tickets() {
      return this.$store.getters.getTickets;
    },
  },

  methods: {
    getTicket(id) {
      this.ticket.active = true;
      this.ticket.info = this.$store.getters.getTicket(id);
    },

    sendMsg() {
      if (this.msg.text != '') {
        this.msg.time = this.$moment(Date.now()).format('HH:mm')
        this.msg.id = this.ticket.info.id
        this.$store.dispatch('addMessage', this.msg)
        this.msg.text = ''
      }
    }
  },

  mounted() {
    this.$refs.manager.addEventListener('mouseover', () => {
      this.hint.show = true
    })

    this.$refs.manager.addEventListener('mouseout', () => {
      this.hint.show = false
    })
  }
};
</script>

<style lang="sass" scoped>
.chat
  align-self: end
  position: relative

  &__close
    position: relative
    width: 100%
    height: 100%
    border-radius: 50%
    background: #6EC977

    &::after
      position: absolute
      top: calc( 50% - 10px )
      left: calc( 50% - 10px )
      content: ''
      width: 20px
      height: 20px
      background: url(../../assets/img/icons/close.svg)

  &__manager
    position: relative
    width: 56px
    height: 56px
    border: 4px solid white
    border-radius: 50%
    margin: 0 auto
    margin-bottom: 8px
    cursor: pointer
    box-shadow: 0px 25px 54px #000000

    img
      max-width: 100%

  &__messages
    top: -11px
    right: -11px

  span
    display: block
    text-align: center
    font-size: 12px
    line-height: 124%
    color: $text-blur

  &__inner
    position: absolute
    bottom: 50px
    left: 90px
    width: 360px
    box-sizing: border-box
    padding: 20px
    background: white
    border-radius: 10px
    box-shadow: 0px 25px 54px #000000
    z-index: 10

    @media(max-width: 1024px)
      position: fixed
      width: 100%
      height: 100%
      border-radius: 0
      left: initial
      left: 0
      top: 0

    &-close
      display: none
      position: absolute
      width: 20px
      height: 20px
      right: 20px
      top: 20px
      cursor: pointer

      @media(max-width: 1024px)
        display: block

      &:hover
        opacity: .6

      &::after,
      &::before
        position: absolute
        top: 50%
        content: ""
        width: 20px
        height: 3px
        background: #313131

      &::after
        transform: rotate(45deg)

      &::before
        transform: rotate(-45deg)

.chat-popup
  overflow: hidden

  header
    display: flex
    margin-bottom: 27px

  &__ava
    width: 84px
    height: 84px
    border-radius: 50%
    overflow: hidden
    margin-right: 20px

    img
      width: 100%

  &__contacts
    h3
      color: black
      margin-bottom: 8px

    p
      font-size: 16px
      color: #444745
      margin-bottom: 4px

  &__body-wrapper
    position: relative
    height: 70vh

  &__actions
    li
      padding: 20px
      background: #EEF8EF
      border-radius: 8px
      margin-top: 20px

      h3
        margin: 6px 0
        color: black

      p
        margin-bottom: 40px
        color: $icon-blur

  &__tickets
    li
      cursor: pointer
      padding: 11px 0 18px
      background: url(../../assets/img/icons/menu-arrow.svg) no-repeat 100% 50%

      &:not(:last-of-type)
        border-bottom: 1px solid lightgrey

      span
        text-align: left

      p
        color: $page-bg

  &__ticket
    display: flex
    flex-wrap: wrap
    align-items: flex-start
    position: absolute
    left: -999px
    top: 0
    background: white
    width: 100%
    height: 100%
    transition: .3s

    div
      width: 100%
      height: 90%

    &-messages
      padding: 0 10px

      &-item
        max-width: 230px
        margin-bottom: 7px

        p
          position: relative
          padding: 7px 10px
          border-radius: 10px
          margin-bottom: 4px

          &::before
            position: absolute
            bottom: 20px
            content: ''
            width: 13px
            height: 13px
            transform: rotate(45deg)

        span
          text-align: right

        &--in
          margin-right: auto

          p
            background: $main-color
            color: white

            &::before
              background: $main-color
              left: -6px

        &--out
          margin-left: auto

          p
            background: $text-white
            color: $page-bg

            &::before
              background: $text-white
              right: -6px

    header
      position: relative
      flex-wrap: wrap
      padding-left: 20px
      cursor: pointer

      &::before
        position: absolute
        left: 0
        top: 5px
        content: ''
        width: 9px
        height: 18px
        background: url(../../assets/img/icons/menu-arrow.svg) no-repeat 50% 50%
        transform: rotate(180deg)

      span
        width: 100%
        text-align: left

      p
        color: $page-bg

    footer
      position: relative
      align-self: flex-end
      width: 100%

      input
        width: 100%
        box-sizing: border-box
        border: none
        background: rgba(0, 0, 0, 0.05)
        border-radius: 6px
        padding: 18px 50px 18px 20px

      button
        position: absolute
        right: 20px
        top: 15px
        width: 17px
        height: 20px
        background: url(../../assets/img/icons/chat-top.svg) no-repeat 50% 50%

    &--active
      left: 0

.chat-scroll
  width: 100%
  max-height: 90%

.ticket-scroll
  width: 100%
  margin-top: 20px


// SP

.sp
  .chat
    &__manager
      box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)

    &__close
      background: #DF2E2E

    &__inner
      box-shadow: 0px 12px 46px rgba(74, 30, 30, 0.16)

  .chat-popup
    &__actions
      li
        background: $sp-card-bg

        svg
          path
            fill: $sp-color

    &__tickets
      li
        background: url(../../assets/img/sp/menu-arrow.svg) no-repeat 100% 50%

    &__ticket
      header
        &::before
          background: url(../../assets/img/sp/menu-arrow.svg) no-repeat 50% 50%

      footer
        button
          background: url(../../assets/img/sp/chat-top.svg) no-repeat 50% 50%

  .chat-popup__ticket-messages-item--in p
    background: $sp-color

    &::before
      background: $sp-color


// SD

.sd
  .chat
    &__manager
      box-shadow: $sd-shadow

    &__close
      background: $sd-color

    &__inner
      box-shadow: $sd-shadow

  .chat-popup
    &__actions
      li
        background: white

        svg
          path
            fill: $sd-color

    &__tickets
      li
        background: url(../../assets/img/sd/menu-arrow.svg) no-repeat 100% 50%

    &__ticket
      header
        &::before
          background: url(../../assets/img/sd/menu-arrow.svg) no-repeat 50% 50%

      footer
        button
          background: url(../../assets/img/sd/chat-top.svg) no-repeat 50% 50%

  .chat-popup__ticket-messages-item--in p
    background: $sd-color

    &::before
      background: $sd-color


// white

  .chat-popup
    &__actions
      p
        color: $white-text-blur

</style>
