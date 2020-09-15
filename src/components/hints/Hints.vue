<template>
  <transition name="fade">
    <div class="hints" v-if="hint.show">
      <p>{{hint.title}}</p>
      <span>{{hint.text}}</span>
    </div>
  </transition>

</template>

<script>
export default {
  props: ['hint'],
  name: 'Hints'
}
</script>

<style lang="sass" scoped>
.hints
  position: absolute
  width: 209px
  box-sizing: border-box
  padding: 7px 10px
  background: #EAE9E6
  border-radius: 10px
  z-index: 4

  @media(max-width: 1024px)
    display: none

  &::before
    position: absolute
    content: ''
    width: 15px
    height: 15px
    background: #EAE9E6
    transform: rotate(45deg)

  p
    color: $text-black
    font-size: 12px
    font-weight: 500

  span
    color: $icon-blur
    font-size: 10px
    line-height: 14px

.chat
  .hints
    top: 0
    right: -210px

    &::before
      left: -8px
      top: calc(50% - 8px)

.last-item__rating-value
  .hints
    bottom: -90px
    right: 0

    &::before
      right: 10px
      top: -6px


// White

.white
  .hints
    background: grey

    p,
    span
      color: white

    &::before
      background: grey

</style>
