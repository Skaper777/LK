<template>
  <section class="tarifs-table">
    <div class="content-container">
      <BlockDesc
        :title="blockDescription.title"
        :text="blockDescription.text"
      />

      <table class="table" cellspacing="0">
        <tr class="table__header">
          <th><span>Оператор</span></th>
          <th><span>WhatsApp рассылка</span></th>
          <th><span>SMS рассылка нейтральное ИО</span></th>
          <th><span>Голосовая рассылка</span></th>
        </tr>

        <tr>
          <td><p>Мегафон</p></td>
          <td><p>2.49</p></td>
          <td><p>2.29</p></td>
          <td><p>1.99</p></td>
        </tr>

        <tr>
          <td><p>МТС</p></td>
          <td><p>2.49</p></td>
          <td><p>2.29</p></td>
          <td><p>1.99</p></td>
        </tr>

        <tr>
          <td><p>Билайн</p></td>
          <td><p>2.49</p></td>
          <td><p>2.29</p></td>
          <td><p>1.99</p></td>
        </tr>

        <tr>
          <td><p>Теле2</p></td>
          <td><p>2.49</p></td>
          <td><p>2.29</p></td>
          <td><p>1.99</p></td>
        </tr>

        <tr>
          <td><p>Другие</p></td>
          <td><p>2.49</p></td>
          <td><p>2.29</p></td>
          <td><p>1.99</p></td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import BlockDesc from '../page-chunks/Block-description'

export default {
  name: 'Tarifs-table',
  components: {
    BlockDesc
  },

  data() {
    return {
      blockDescription: {
        title: "Тарифы",
        text: "Три простых шага и договор будет заключен1. Заполните реквизиты2. Скачайте договор, распечатайте, на каждой странице в поле поставьте подпись, на страницах, где указано место печати поставьте печать Вашей организации.3. Отправьте нам отсканированную копию"
      }
    }
  }
}
</script>

