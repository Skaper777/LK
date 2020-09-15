<template>
  <section class="landing-block">
    <div class="container">
      <div class="landing-block__actions">
        <Button @func="openRecycle" :btnText="`Корзина (${recycle.length})`" btnSvg="plus" wrapperClass="button-wrapper--narrow button-wrapper--grey"  />
      </div>
      <div class="content-container">
        <BlockDesc
          :title="blockDescription.title"
          :text="blockDescription.text"
          :btnText="blockDescription.btn.text"
          :btnSvg="blockDescription.btn.svg"
          :wrapper="blockDescription.btn.wrapper"
          @open="createLanding"
        />
        <div class="landing-block__list">
          <ul>
            <li v-for="(land, index) in landings" :key="index">
              <Landing
                :id=land.id
                :index=index
                :conversion=land.conversion
                :name=land.name
                :transitions=land.transitions
                :requests=land.requests
                :mailing="true"
                :details="true"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <Recycle/>
    </transition>
  </section>
</template>

<script>

import BlockDesc from '../page-chunks/Block-description'
import Button from "../forms/Button"
import Landing from './Landing'
import Recycle from './Recycle'

export default {
  name: 'Landing-block',
  components: {
    BlockDesc,
    Button,
    Landing,
    Recycle
  },

  data() {
    return {
      blockDescription: {
        title: "Лендинги",
        text: "Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний",
        btn: {
          text: "Создать лендинг",
          svg: "plus"
        }
      }
    }
  },

  methods: {
    createLanding() {
      this.$router.push('landings/new')
    },

    openRecycle() {
      this.$eventHub.$emit('openLandingsRecycle')
    }
  },

  computed: {
    landings() {
      return this.$store.getters.getLandings
    },

    recycle() {
      return this.$store.getters.getLandingsRecycle
    }
  }
}
</script>

<style lang="sass" scoped>
.landing-block
  padding-top: 20px

  &__actions
    display: flex
    justify-content: flex-end
    margin-bottom: 30px

</style>
