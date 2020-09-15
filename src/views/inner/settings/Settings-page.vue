<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>


<style lang="sass">
.settings-block
  padding: 40px 0

  @media(max-width: 1024px)
    padding: 20px 0

  &:not(:last-of-type)
    border-bottom: 1px solid #313131

    @media(max-width: 1024px)
      border-bottom: none

  &:not(:nth-of-type(2))
    @media(max-width: 1024px)
      display: none


// WHite

.white
   .settings-block
    &:not(:last-of-type)
      border-bottom: 1px solid $sp-modal-bg


</style>
