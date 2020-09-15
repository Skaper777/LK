<template>
  <section class="settings-block">
    <div class="content-container container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
      />

      <ul>
        <li v-for="(doc, index) in docs" :key="index">
          <Doc :doc="doc" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import BlockDesc from '../page-chunks/Block-description'
import Doc from './Document'

export default {
  name: 'Other-docs',
  components: {
    BlockDesc,
    Doc
  },

  data() {
    return {
      blockDescription: {
        title: "Другие документы",
        text: "Три простых шага и договор будет заключен1. Заполните реквизиты2. Скачайте договор, распечатайте, на каждой странице в поле поставьте подпись, на страницах, где указано место печати поставьте печать Вашей организации.3. Отправьте нам отсканированную копию"
      }
    }
  },

  computed: {
    docs() {
      return this.$store.getters.getOtherDocs
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
