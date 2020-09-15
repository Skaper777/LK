<template>
  <div class="toggle">
    <input type="checkbox" :id="`toggle-${num}`" :checked="isChecked">
    <label :for="`toggle-${num}`" @click="toggle"></label>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  props: ['num', 'isChecked'],

  methods: {
    toggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="sass" scoped>
.toggle
  input
    position: absolute
    z-index: -999
    opacity: 0

  label
    position: relative
    display: block
    width: 30px
    height: 8px
    background: #EA6363
    border-radius: 10px
    cursor: pointer
    transition: .2s

    &::before
      position: absolute
      top: -6px
      left: -8px
      content: ''
      width: 20px
      height: 20px
      border-radius: 50%
      background: linear-gradient(180deg, #757575 0%, #424242 100%)
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.78)
      transition: .2s

  input:checked + label
    background: #6EC977

  input:checked + label::before
    transform: translateX(26px)


// White

.white
  .toggle
    label
      &::before
        background: linear-gradient(180deg, #F9F9F9 0%, #F1F1F1 100%)
        box-shadow: 0px 2px 6px rgba(74, 30, 30, 0.3)

</style>
