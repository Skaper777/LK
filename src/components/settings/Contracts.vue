<template>
  <section class="settings-block">
    <div class="content-container container">
      <BlockDesc
        title="Договоры"
      >
        <p>
          <span>Три простых шага и договор будет заключен</span><br>
          1. Заполните реквизиты<br>
          2. Скачайте договор, распечатайте, на каждой странице в поле "Контрагент" поставьте подпись, на страницах, где указано место печати "м.п." поставьте печать Вашей организации.<br>
          3. Отправьте нам отсканированную копию
        </p>
      </BlockDesc>

      <ul>
        <li v-for="(doc, index) in contracts" :key="index">
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
  name: 'Contracts',
  components: {
    BlockDesc,
    Doc
  },

  computed: {
    contracts() {
      return this.$store.getters.getContracts
    }
  }
}
</script>
