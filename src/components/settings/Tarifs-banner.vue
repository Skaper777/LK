<template>
  <div class="tarifs-banner banner">
    <div class="banner__text">
      <p>До скидки осталось 3455 сообщений</p>
      <span>Пополни баланс в течении 3-х дней и получили +10% к сумме пополнения.</span>
    </div>
    <div :style="`width: 65%`" class="tarifs-banner__progress"></div>
  </div>
</template>

<script>
export default {
  name: 'Tarifs-banner'
}
</script>

<style lang="sass" scoped>
.tarifs-banner
  position: relative
  background: #542B2C
  overflow: hidden
  margin-bottom: 50px

  .banner__text
    z-index: 2

  &__progress
    position: absolute
    left: 0
    top: 0
    height: 100%
    border-radius: 10px
    background: linear-gradient(90.85deg, #AF51F9 2.93%, #F76646 98.26%)


// White

.white
  .tarifs-banner
    background: #EFD7DA


</style>
