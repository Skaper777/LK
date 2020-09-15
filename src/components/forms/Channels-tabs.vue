<template>
  <div class="channels-tabs">
    <input type="radio" name="channels" value="SMS" v-model="model" id="smsChannel">
    <label for="smsChannel">SMS <span>(от 0.75 ₽)</span></label>
    <input type="radio" name="channels" value="Whatsapp" v-model="model" id="whatsAppChannel">
    <label for="whatsAppChannel">Whatsapp <span>(от 0.75 ₽)</span></label>
    <input type="radio" name="channels" value="Voice" v-model="model" id="voiceChannel">
    <label for="voiceChannel">Voice <span>(от 0.75 ₽)</span></label>
  </div>
</template>

<script>
export default {
  name: 'Channels-tabs',
  props: ['val', 'value'],

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>

<style lang="sass">
.channels-tabs
  width: 100%
  display: flex
  align-items: center

  input
    position: absolute
    opacity: 0
    z-index: -500

  label
    padding: 20px 28px
    cursor: pointer
    border: 1px solid $icon-blur

    span
      @media(max-width: 1024px)
        display: none

    &:first-of-type
      border-radius: 10px 0 0 10px

    &:last-of-type
      border-radius: 0 10px 10px 0

  input:checked + label
    padding: 18px 28px
    background: $main-color-trans
    border: 1px solid $main-color


// SP
.sp
  .channels-tabs
    label
      color: $sp-color
      font-weight: 500
      border: 1px solid $sp-icon-blur

    input:checked + label
      background: $sp-color-trans
      border: 1px solid $sp-color


// SD
.sd
  .channels-tabs
    label
      color: $sd-color
      font-weight: 500
      border: 1px solid $sd-icon-blur

    input:checked + label
      background: $sd-color-trans
      border: 1px solid $sd-color

</style>
