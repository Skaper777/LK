<template>
  <section class="bases-mailing">
    <div class="container">
      <div class="bases-mailing__actions">
        <Button @func="checkingBase = true" btnText="Проверка базы" btnSvg="check" wrapperClass="button-wrapper--narrow" />
        <Button @func="openRecycle" :btnText="`Корзина (${recycleList})`" btnSvg="plus" wrapperClass="button-wrapper--narrow button-wrapper--grey" />
      </div>
      <div class="content-container">
        <BlockDesc
          :title="blockDescription.title"
          :text="blockDescription.text"
          :btnText="blockDescription.btn.text"
          :btnSvg="blockDescription.btn.svg"
          :wrapper="blockDescription.btn.wrapper"
          @open="newBasePopup = true"
        />
        <div class="bases-mailing__list">
          <ul>
            <li v-for="(base, index) in bases" :key="index">
              <BaseMailing
                :id="base.id"
                :index="index"
                :title="base.title"
                :rating="base.rating"
                :length="base.numbers.length"
                :createMailing="true"
                :inBlackList="true"
                :phones="base.numbers"
              />
            </li>
          </ul>
          <Button v-if="basesList.length > 3" @func="toggleBasesList" :btnText="allBases ? 'Свернуть' : 'Показать еще'" btnSvg="dots" wrapperClass="button-wrapper--narrow" />
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div class="checking-popup popup" v-if="checkingBase">
        <div class="popup__blur" @click="checkingBase = false"></div>
        <div class="popup__wrapper popup__wrapper--small">
          <div class="popup__close" @click="checkingBase = false"></div>
          <h2>Проверка базы</h2>
          <p class="checking-popup__descr">
            Проверка базы на предмет наличия номеров телефонов в мессаджерах. Таким образом это позволит сохранить вам бюджет на рассылку при отправке сообщений через мессаджеры
          </p>
          <div class="checking-popup__inputblock">
            <div class="select-wrapper">
              <multiselect
                class="select"
                :show-labels="false"
                v-model="checkedOption"
                placeholder="Выберете условие"
                :options="checkingOptions">
              </multiselect>
            </div>
            <div class="checking-popup__info">
              <span>Цена</span>
              <p>0.5 ₽</p>
            </div>
            <div class="checking-popup__info">
              <span>Кол-во</span>
              <p>12 456</p>
            </div>
            <div class="checking-popup__info">
              <span>Сумма</span>
              <p>4 456 ₽</p>
            </div>
          </div>
          <Button btnText="Провести проверку базы" wrapperClass="button-wrapper--green button-wrapper--no-svg" />
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="new-base popup" v-if="newBasePopup">
        <div class="popup__blur" @click="closeNewBase"></div>
        <div class="popup__wrapper popup__wrapper--small">
          <div class="popup__close" @click="closeNewBase"></div>
          <h2>Загрузка новой базы</h2>
          <p class="checking-popup__descr">
            Выберете название для новой базы и загрузить файл с Вашего компьютера
          </p>
          <Input v-model="newBase.title" plchldr="Название базы" />
          <p class="new-base__filename" v-show="newBase.file">Файл <span>{{newBase.file}}</span> загружен</p>
          <File
            v-if="newBase.file"
            text="Заменить файл"
            fileClass="text"
            svg="recover"
            id="changeBase"
            name="changeBase"
            @func="(e) => newBaseFunc(e)"
          />
          <File
            v-if="!newBase.file"
            text="Загрузить файл базы"
            fileClass="big"
            id="newBase"
            name="newBase"
            @func="(e) => newBaseFunc(e)"
          />
          <Button @func="addNewBase" v-else btnText="Добавить базу" wrapperClass="button-wrapper--no-svg button-wrapper--green" />
        </div>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <Recycle/>
    </transition>
  </section>
</template>

<script>

import BlockDesc from '../page-chunks/Block-description'
import BaseMailing from './Base-mailing'
import Button from "../forms/Button";
import Recycle from './Recycle'
import Input from '../forms/Input'
import File from '../forms/File-button'

export default {
  name: 'Bases-mailing',
  components: {
    BlockDesc,
    BaseMailing,
    Recycle,
    Button,
    Input,
    File
  },

  data() {
    return {
      checkingOptions: [
        'По всем базам',
        'По вашим базам',
        'По нашим базам'
      ],
      checkedOption: '',
      checkingBase: false,
      bases: '',
      allBases: false,
      newBasePopup: false,
      newBase: {
        title: '',
        file: ''
      },
      blockDescription: {
        title: "Базы рассылки",
        text: "Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний",
        btn: {
          text: "Загрузить базу",
          svg: "arrow",
          wrapper: 'button-wrapper--download'
        }
      }
    }
  },

  methods: {
    closeNewBase() {
      this.newBasePopup = false
      this.newBase = {
        title: '',
        file: ''
      }
    },

    newBaseFunc(e) {
      this.newBase.file = e.target.files[0].name
    },

    toggleBasesList() {
      this.allBases = !this.allBases
    },

    openRecycle() {
      this.$eventHub.$emit('openBasesRecycle')
    },

    addNewBase() {
      if (!this.newBase.id) this.newBase.id = 'base' + Math.random().toString(36).substr(2, 9)
      this.$store.dispatch('addBase', this.newBase)
      .then(this.closeNewBase)
    }
  },

  computed: {
    basesList() {
      return this.$store.getters.getBases
    },

    firstBasesList() {
      return this.$store.getters.getFirstBases
    },

    recycleList() {
      return this.$store.getters.getRecycleBases.length
    },
  },

  mounted() {
    this.bases = this.firstNamesList
  },

  updated() {
    if (this.allBases) this.bases = this.basesList
    else this.bases = this.firstBasesList
  }
}
</script>

<style lang="sass" scoped>
.bases-mailing
  padding: 20px 0 40px
  border-bottom: 1px solid #313131

  ul
    margin-bottom: 20px

  &__actions
    display: flex
    justify-content: flex-end
    margin-bottom: 30px

    .button-wrapper
      margin-left: 20px

.checking-popup
  h2
    margin-bottom: 15px

  &__descr
    font-size: 12px
    margin-bottom: 22px

  &__inputblock
    margin-bottom: 34px
    display: flex
    align-items: center

  &__info
    margin-left: 26px

    span
      font-size: 12px
      color: $text-blur

.new-base
  .popup__wrapper
    width: 516px

  .input-wrapper
    margin-bottom: 20px

  &__filename
    margin-bottom: 11px
    font-weight: 500

    span
      color: $main-color

  .file-button--text
    margin-bottom: 30px


// White

.white
  .bases-mailing
    border-bottom: 1px solid #F4F4F4

</style>
