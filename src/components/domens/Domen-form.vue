<template>
  <div class="domen-form popup" v-if="show">
    <div class="popup__blur" @click="closePopup"></div>
    <div class="popup__wrapper popup__wrapper--small">
      <div class="popup__close" @click="closePopup"></div>
      <h2>Добавление домена</h2>
      <p>Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний</p>
      <div class="domen-form__add">
        <Input plchldr="Адрес домена" inputId="domenTitle" v-model="domen.title" />
        <Button @func="saveDomen" btnText="Добавить домен" wrapperClass="button-wrapper--green button-wrapper--no-svg" />
      </div>
    </div>
  </div>
</template>

<script>

import Input from '../forms/Input'
import Button from '../forms/Button'

export default {
  name: 'Domen-form',
  components: {
    Input,
    Button
  },

  data() {
    return {
      show: false,
      domen: {
        id: '',
        title: ''
      }
    }
  },

  methods: {
    closePopup() {
      this.show = false
      domenTitle.value = ''
      domenTitle.nextElementSibling.classList.remove('input-placeholder--focus')
      this.domen = {
        id: '',
        title: ''
      }
    },

    saveDomen() {
      if (!this.domen.id) this.domen.id = 'domen' + Math.random().toString(36).substr(2, 9)

      this.$store.dispatch('addDomen', this.domen)
        .then(this.closePopup)
    }
  },

  mounted() {
    this.$eventHub.$on("openDomenPopup", () => {
      this.show = true;
    });
  }
}
</script>

<style lang="sass" scoped>
h2
  margin-bottom: 13px

p
  margin-bottom: 30px

.popup__wrapper
  padding-bottom: 80px

.domen-form__add
  display: flex
  justify-content: space-between

  .input-wrapper
    width: 400px

</style>
