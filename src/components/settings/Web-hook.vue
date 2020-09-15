<template>
  <section class="settings-block">
    <div class="content-container container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
      />

      <Input plchldr="Адрес ссылки" />
    </div>
  </section>
</template>

<script>
import Input from '../forms/Input'
import BlockDesc from '../page-chunks/Block-description'

export default {
  name: 'Web-hook-settings',
  components: {
    Input,
    BlockDesc
  },

  data() {
    return {
      blockDescription: {
        title: "Веб-хук",
        text: "Описание что такое веб-хук и как подключить"
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.input-wrapper
  width: 560px

</style>
