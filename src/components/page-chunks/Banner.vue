<template>
  <div class="banner">
    <div class="banner__text">
      <p>Получи +10% на счет</p>
      <span>Пополни баланс в течении 3-х дней и получили +10% к сумме пополнения.</span>
    </div>
    <Button btnText="Пополнить баланс" btnSvg="purse" wrapperClass="button-wrapper--narrow button-wrapper--white" />
  </div>
</template>

<script>

import Button from '../forms/Button'

export default {
  name: 'Banner',
  components: {
    Button
  }
}
</script>
