<template>
  <div class="future-mailing mailing-block" :class="compact ? 'future-mailing mailing-block--compact' : ''"  :id='mailing.id'>
    <div class="mailing-block__left">
      <h3>{{mailing.date | moment('DD MMMM')}}</h3>
      <p>На очереди, {{mailing.title}}</p>
      <Button @func="info = true" btnText="Подробнее" wrapperClass="button-wrapper--text" btnSvg="details" />
    </div>
    <div class="mailing-block__right">
      <div v-for="stat in mailing.stats" :key="stat.title" :class="`mailing-block__right-block ${getClass(stat.title)}`">
        <span :class="mailing.stats.length > 2 ? 'compact' : ''">{{stat.title}}</span>
      </div>
      <div @click="popup = true" class="mailing-block__add">
        <Button btnText="Добавить этап" btnSvg="plus" wrapperClass="button-wrapper--text" />
      </div>
    </div>

    <transition name="fade">
      <div class="future-mailing__popup popup" v-if="popup">
        <div class="popup__blur" @click="popup = false"></div>
        <div class="popup__wrapper popup__wrapper--small">
          <div class="popup__close" @click="popup = false"></div>
          <h2>Добавление нового шага воронки</h2>
          <p>Чтобы добавить новый шаг воронки, наобоходимо добавить в рассылку посадочную страницу. Это позволит отследить количество активных пользователей, которые отреагировали на Вашу рассылку</p>
          <div class="future-mailing__popup-select">
            <div class="select-wrapper">
              <multiselect
                class="select"
                :show-labels="false"
                :options="landings"
                v-model="landing"
                placeholder="Выберете посадочную страницу"
              >
              </multiselect>
            </div>
            <Button btnText="Создать новую страницу" btnSvg="plus" wrapperClass="button-wrapper--text" />
          </div>
          <Button btnText="Добавить этап" btnSvg="plus" />
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="future-mailing__info popup" v-if="info">
        <div class="popup__blur" @click="info = false"></div>
        <div class="popup__wrapper popup__wrapper--small">
          <div class="popup__close" @click="info = false"></div>
          <Table :mailing="mailing" :noChecking=true />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import Button from '../forms/Button'
import { getClass } from '@/mixins/getClass'
import Table from './Mailing-table'

export default {
  name: 'Future-mailing',
  props: ['mailing', 'compact'],
  mixins: [getClass],
  components: {
    Button,
    Table
  },

  data() {
    return {
      popup: false,
      info: false,
      landings: [
        'landing-1',
        'landing-2'
      ],
      landing: '',
    }
  }
}
</script>

<style lang="sass" scoped>
.future-mailing
  .mailing-block__left
    p::before
      background: #757575

  .mailing-block__right-block
    display: flex
    justify-content: center
    align-self: center
    height: 55px

    span
      align-self: center

  .mailing-block__add
    display: flex
    justify-content: center
    align-self: center
    border: 2px dashed #424242
    height: 51px
    border-radius: 10px
    cursor: pointer

    .button-wrapper
      align-self: center

  &__popup
    p
      margin-bottom: 20px

    &-select
      display: flex
      align-items: center
      margin-bottom: 40px

      .select-wrapper
        margin-right: 23px

// SP

.sp
  .future-mailing .mailing-block__add
    border: 2px dashed #D6D6D6

// SD

.sd
  .future-mailing .mailing-block__add
    border: 2px dashed #CBD9E8

</style>
