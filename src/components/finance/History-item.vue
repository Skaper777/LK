<template>
  <div class="finance-item finance-item--events" :class="event.sum > 0 ? 'finance-item--plus' : 'finance-item--minus'">
    <div>
      <span>Дата</span>
      <p>{{event.date | moment('DD.MM.YYYY')}}</p>
    </div>
    <div>
      <span>{{event.sum > 0 ? 'Пополнение' : 'Списание'}}</span>
      <p class="finance-item__sum">{{event.sum}} р.</p>
    </div>
    <div>
      <span>{{event.sum > 0 ? 'Способ пополнения' : 'Причина списания'}}</span>
      <p>{{event.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History-item',
  props: ['event']
}
</script>
