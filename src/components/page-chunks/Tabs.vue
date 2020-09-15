<template>
  <div class="tabs">
    <button
      @click.prevent="() => changeTab(index)"
      class="tabs__item"
      :class="tab.show ? 'tabs__item--active' : false"
      v-for="(tab, index) in tabs"
      :key="index"
    >{{tab.name}}</button>
  </div>
</template>

<script>
export default {
  name: "Tabs",

  props: ["tabs", "block1", "block2"],

  methods: {
    changeTab(index) {
      this.tabs.forEach(tab => {
        tab.show = false
      })

      this.tabs[index].show = true
    }
  }
};
</script>

<style lang="sass" scoped>
.tabs
  display: flex
  width: 80%
  margin: 0 auto
  justify-content: space-around
  align-items: flex-start

  @media(max-width: 1024px)
    width: 100%

  &__item
    display: block
    padding: 0
    padding-bottom: 10px
    color: $title-color
    opacity: .5
    font-size: 16px
    font-weight: 500

    &--active
      opacity: 1
      border-bottom: 3px solid $main-color

.mailing-page,
.black-list,
.recycle,
.finance,
.payments-block
  .tabs
    justify-content: flex-start
    margin: 0

    &__item:not(:last-of-type)
      margin-right: 30px

.finance,
.payments-block
  .tabs
    &__item:not(:last-of-type)
      margin-right: 50px

      @media(max-width: 1024px)
        margin-right: 25px

      @media(max-width: 500px)
        margin-right: 15px

.black-list .tabs
  margin-bottom: 20px

.chat
  .tabs
    width: 100%
    justify-content: flex-start
    margin: 0

    &__item
      color: black
      font-size: 12px
      margin-right: 20px
      font-weight: 500

.notifications
  .tabs
    width: 100%
    justify-content: space-between

    &__item
      font-size: 12px


// WHite
.white
  .tabs__item
    color: $white-title-color


// SD

.sd
  .tabs__item--active
    border-bottom: 3px solid $sd-color


// SP

.sp
  .tabs__item--active
    border-bottom: 3px solid $sp-color


</style>
