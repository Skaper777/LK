<template>
  <div class="requisites">
    <div class="requisites__double">
      <Input v-model="reqs.inn" inputId="inn" plchldr="ИНН" />
      <Input v-model="reqs.kpp" inputId="kpp" plchldr="КПП" />
    </div>
    <Input v-model="reqs.name" inputId="legalName" plchldr="Наименование" />
    <Input v-model="reqs.address" inputId="legalAddress" plchldr="Юридический адрес" />
    <Input v-model="reqs.bankReqs" inputId="bankReqs" plchldr="Банковские реквизиты" />
    <Button v-if="isEdit" @func="saveReqs" btnText="Сохранить реквизиты" wrapperClass="button-wrapper--green button-wrapper--no-svg" />
  </div>
</template>

<script>
import Input from '../forms/Input'
import Button from '../forms/Button'
import { setInputValue } from '../../mixins/setInputValue'

export default {
  name: 'Requisites',
  props: ['isEdit', 'reqs'],
  mixins: [setInputValue],
  components: {
    Input,
    Button
  },

  methods: {
    saveReqs() {
      this.$store.dispatch('changeReqs', this.reqs)
    }
  },

  mounted() {
    this.setInputValue(inn, this.reqs.inn)
    this.setInputValue(kpp, this.reqs.kpp)
    this.setInputValue(legalName, this.reqs.name)
    this.setInputValue(legalAddress, this.reqs.address)
    this.setInputValue(bankReqs, this.reqs.bankReqs)
  }
}
</script>

<style lang="sass" scoped>
.requisites
  width: 460px

  @media(max-width: 768px)
    width: 100%

  &__double
    display: flex
    justify-content: space-between

    .input-wrapper
      width: 48%

  .input-wrapper
    margin-bottom: 20px

    @media(max-width: 768px)
      margin-bottom: 15px


</style>
