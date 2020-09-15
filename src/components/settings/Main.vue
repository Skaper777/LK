<template>
  <section class="settings-block">
    <div class="content-container container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
      />

      <div class="profile-block">
        <div class="profile-block__ava">
          <div class="profile-block__ava-wrapper">
            <img src="../../assets/img/settings/ava.jpg" alt="">
          </div>
          <File svg="edit" fileClass="text" text="Изменить аватар" id="avatar" accept="image/*" />
        </div>
        <div class="profile-block__inputs">
          <Input @save="() => changeProfile('name', user.name)" :btn="true" plchldr="Имя" inputId="userName" v-model="user.name" />
          <Input @save="() => changeProfile('phone', user.phone)" :btn="true" plchldr="Телефон" inputId="userPhone" v-model="user.phone" />
          <Input @save="() => changeProfile('email', user.email)" :btn="true" plchldr="e-mail" inputId="userEmail" v-model="user.email" />
          <h3>Изменить пароль</h3>
          <Input plchldr="Новый пароль" v-model="user.password" />
          <Input @save="() => changeProfile('password', user.password)" :btn="true" plchldr="Повторите новый пароль" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Input from '../forms/Input'
import File from '../forms/File-button'
import BlockDesc from '../page-chunks/Block-description'
import { setInputValue } from '../../mixins/setInputValue'

export default {
  name: 'Main-settings',
  mixins: [setInputValue],
  components: {
    Input,
    BlockDesc,
    File
  },

  data() {
    return {
      blockDescription: {
        title: "Основные настройки",
        text: "Выберете канал через который вы хотите совершить рассылку. Правильный выбор канала рассылки зависит от типа базы, по которой будет осущетсвляться рассылка. Более подробно этот вопрос вы можете изучить в нашей базе знаний"
      }
    }
  },

  methods: {
    changeProfile(target, data) {
      this.$store.dispatch('changeProfile', {
        target,
        data
      })
    }
  },

  computed: {
    user() {
      return this.$store.getters.getProfile
    }
  },

  mounted() {
    this.setInputValue(userName, this.user.name)
    this.setInputValue(userPhone, this.user.phone)
    this.setInputValue(userEmail, this.user.email)
  }
}
</script>

<style lang="sass" scoped>
.profile-block
  display: flex

  &__ava-wrapper
    position: relative
    width: 190px
    height: 190px
    border-radius: 10px
    margin-bottom: 20px
    overflow: hidden
    margin-right: 40px

    img
      position: absolute
      top: calc( 50% - 96px )
      left: calc( 50% - 96px )
      width: 101%

  &__inputs
    .input-wrapper
      width: 482px
      margin-bottom: 20px

    h3
      margin-bottom: 10px

</style>
