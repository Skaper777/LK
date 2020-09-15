<template>
  <div :id="id">
    <div ref="domen" class="domen toggle-block">
      <div class="domen__title">
        <Toggle :isChecked="true" :num="index + 1" @toggle="toggle" />
        <h3>{{title}}</h3>
      </div>

      <div class="domen__actions">
        <Button btnText="Создать лендинг" btnSvg="rocket" wrapperClass="button-wrapper--text" />
        <Button @func="edit = true" btnText="Редактировать" btnSvg="edit" wrapperClass="button-wrapper--text" />
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div class="domen-edit popup" v-show="edit">
        <div class="popup__blur" @click="edit = false"></div>
        <div class="popup__wrapper popup__wrapper--small">
          <div class="popup__close" @click="edit = false"></div>
          <h2>Изменение домена</h2>
          <p>Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний</p>
          <div class="domen-edit__input-block">
            <div class="input-wrapper">
              <input class="input" v-model="editTitle" :id="'domenTitle' + index" autocomplete="off">
            </div>
            <Button @func="saveDomen" btnText="Сохранить" wrapperClass="button-wrapper--no-svg" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import Input from '../forms/Input'
import Toggle from "../others/Toggle";
import Button from "../forms/Button";

export default {
  name: "Domen",
  props: ['id', "title", "index"],
  components: {
    Input,
    Toggle,
    Button
  },

  data() {
    return {
      editTitle: this.title,
      edit: false
    }
  },

  methods: {
    toggle() {
      this.$refs.domen.classList.toggle("blur");
    },

    saveDomen() {
      this.$store.dispatch('editDomen', {
        id: this.id,
        title: this.editTitle
      })
      .then(this.edit = false)

      console.log(this.title)
    }
  }
};
</script>

<style lang="sass" scoped>
.domen
  &__title
    display: flex
    align-items: center

    h3
      margin-left: 30px

  &__actions
    display: flex
    align-items: center

    .button-wrapper
      margin-left: 30px

.domen-edit
  h2
    margin-bottom: 13px

  p
    margin-bottom: 30px

  .popup__wrapper
    padding-bottom: 80px

  &__input-block
    display: flex
    justify-content: space-between

    .input-wrapper
      width: 450px

</style>
