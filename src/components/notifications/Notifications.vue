<template>
  <div class="notifications">
    <div class="notifications__bell" @click="popup = true">
      <div class="notifications-count" v-if="!popup">{{notifications}}</div>
      <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1562 20.1094H21.1406V13C21.1406 8.87759 18.3972 5.3842 14.6402 4.24876C14.8352 3.85541 14.9453 3.41306 14.9453 2.94531C14.9453 1.3213 13.624 0 12 0C10.376 0 9.05469 1.3213 9.05469 2.94531C9.05469 3.41306 9.16478 3.85541 9.35977 4.24876C5.60275 5.3842 2.85938 8.87759 2.85938 13V20.1094H1.84375C1.28278 20.1094 0.828125 20.564 0.828125 21.125C0.828125 21.686 1.28278 22.1406 1.84375 22.1406H7.02859C7.49713 24.3429 9.45697 26 11.7969 26H12.2031C14.543 26 16.5029 24.3429 16.9714 22.1406H22.1562C22.7172 22.1406 23.1719 21.686 23.1719 21.125C23.1719 20.564 22.7172 20.1094 22.1562 20.1094ZM11.0859 2.94531C11.0859 2.44127 11.496 2.03125 12 2.03125C12.504 2.03125 12.9141 2.44127 12.9141 2.94531C12.9141 3.44936 12.504 3.85938 12 3.85938C11.496 3.85938 11.0859 3.44936 11.0859 2.94531ZM12.2031 23.9688H11.7969C10.5865 23.9688 9.5502 23.2086 9.14058 22.1406H14.8594C14.4498 23.2086 13.4135 23.9688 12.2031 23.9688ZM4.89062 20.1094V13C4.89062 9.07993 8.07993 5.89062 12 5.89062C15.9201 5.89062 19.1094 9.07993 19.1094 13V20.1094C17.7294 20.1094 5.4274 20.1094 4.89062 20.1094Z"/>
      </svg>
    </div>

    <div v-if="popup" @click="popup = false" class="notifications__close"></div>

    <transition name="fade">
      <div class="notifications__popup" v-if="popup">
        <Tabs :tabs="tabs" />

        <transition name="fade" mode="in-out">
          <div v-if="tabs[0].show" key="left">

          </div>
          <div class="notifications__popup-settings" v-else key="right">
            <h3>Настройки оповещений</h3>
            <div class="notifications__popup-settings-item">
              <Checkbox @func="mailingStart = !mailingStart" text="Начало рассылки" checkId="mailingStart" />
              <div v-if="mailingStart" class="select-wrapper">
                <multiselect
                  class="select select--narrow"
                  :show-labels="false"
                  :value="'Отправлять SMS'"
                  :options="['Отправлять SMS']">
                </multiselect>
              </div>
            </div>
            <div class="notifications__popup-settings-item">
              <Checkbox @func="mailingFinish = !mailingFinish" text="Окончание рассылки" checkId="mailingFinish" />
              <div v-if="mailingFinish" class="select-wrapper">
                <multiselect
                  class="select select--narrow"
                  :show-labels="false"
                  :value="'Отправлять в telegram'"
                  :options="['Отправлять в telegram']">
                </multiselect>
              </div>
            </div>
            <div class="notifications__popup-settings-item">
              <Checkbox @func="finishMoney = !finishMoney" text="Заканчиваются средства" checkId="finishMoney" />
              <div v-if="finishMoney" class="select-wrapper">
                <multiselect
                  class="select select--narrow"
                  :show-labels="false"
                  :value="'Отправлять SMS'"
                  :options="['Отправлять SMS']">
                </multiselect>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import Tabs from "../page-chunks/Tabs";
import Checkbox from '../forms/Checkbox'

export default {
  name: 'Notifications',
  components: {
    Tabs,
    Checkbox
  },

  data() {
    return {
      popup: false,
      notifications: 5,
      mailingStart: false,
      mailingFinish: false,
      finishMoney: false,
      tabs: [
        {
          name: "Уведомления",
          show: true,
        },
        {
          name: "Настройки уведомлений",
          show: false,
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.notifications
  position: relative

  &__bell
    cursor: pointer

  &-count
    top: -13px
    right: -13px

  svg
    path
      fill: $main-color

  &__close
    position: absolute
    top: -15px
    right: 0
    width: 56px
    height: 56px
    border-radius: 50%
    background: #6EC977
    cursor: pointer

    &::after
      position: absolute
      top: calc( 50% - 10px )
      left: calc( 50% - 10px )
      content: ''
      width: 20px
      height: 20px
      background: url(../../assets/img/icons/close.svg)

  &__popup
    width: 368px
    height: 92vh
    box-sizing: border-box
    z-index: 5
    position: absolute
    top: 50px
    right: 0
    padding: 32px 40px
    background: $modal-bg

    @media(max-width: 1024px)
      width: 100vw
      right: -125px

    .tabs
      margin-bottom: 30px

    &-settings
      h3
        margin-bottom: 23px

      &-item
        display: flex
        flex-wrap: wrap

        .checkbox
          margin-bottom: 0

        .select-wrapper
          margin-left: 33px

// SP

.sp
  .notifications
    svg
      path
        fill: $sp-color

    &__close
      background: $sp-color

    &__popup
      background: $sp-card-bg


// SD

.sd
  .notifications
    svg
      path
        fill: $sd-color

    &__close
      background: $sd-color

    &__popup
      background: white

</style>
