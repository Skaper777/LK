<template>
  <div class="block-description">
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <slot></slot>
    <Button v-if="btnText" :btnText="btnText" :btnSvg="btnSvg" @func="openFunc" :wrapperClass="wrapper" />
    <span v-if="hint" class="block-description__hint">{{hint}}</span>
  </div>
</template>

<script>

import Button from '../forms/Button'

export default {
  name: 'Block-description',
  props: ['title', 'text', 'btnText', 'btnSvg', 'wrapper', 'hint'],
  components: {
    Button
  },

  methods: {
    openFunc() {
      this.$emit('open')
    }
  }
}
</script>

<style lang="sass" scoped>
.block-description
  max-width: 568px
  margin-right: 20px

  @media(max-width: 1380px)
    max-width: 100%
    margin-bottom: 20px

  h2
    font-size: $title-size
    margin-bottom: 13px

  .button-wrapper
    margin-top: 20px

    @media(max-width: 1024px)
      display: none

  p
    span
      display: block
      font-size: 14px
      color: inherit

  span
    display: block
    margin-top: 16px
    font-size: 12px
    color: $text-blur

    @media(max-width: 1024px)
      display: none


</style>
