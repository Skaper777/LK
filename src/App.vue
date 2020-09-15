<template>
  <div id="app" class="zm">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
html
  @media(max-width: 1024px)
    height: 100%

body
  margin: 0

  @media(max-width: 1024px)
    display: flex
    flex-direction: column
    min-height: 100vh

#app
  position: relative
  font-family: 'GothamPro', Arial, Helvetica, sans-serif
  font-weight: 400
  min-width: 320px
  height: 100vh
  overflow-x: hidden
  font-size: $text-size
  line-height: 150%

  @media(max-width: 1024px)
    padding-bottom: 100px
    z-index: 3
    height: auto
    flex-grow: 1

.content-container
  display: grid
  grid-template-columns: 26% 74%

  @media(max-width: 1240px)
    display: flex
    flex-direction: column
    align-items: flex-start

.steps
  display: flex
  align-items: center
  padding: 12px 15px
  background: $modal-bg
  border-radius: 10px
  color: $main-color
  font-size: 12px
  font-weight: 500
  margin-bottom: 30px

  p
    margin-right: 40px

.dots
  display: flex

  &__dot
    width: 6px
    height: 6px
    background: $icon-blur
    border-radius: 50%
    margin-right: 8px

    &--active
      background: $main-color

.toggle-block
  width: 100%
  padding: 17px 20px
  box-sizing: border-box
  display: flex
  justify-content: space-between
  align-items: center
  background: $modal-bg
  border-radius: 10px
  margin-bottom: 5px

h3
  font-size: 16px
  font-weight: 500

.container
  padding: 0 50px 0 150px

  @media(max-width: 1024px)
    padding: 0 20px 0 20px

.blur
  opacity: .6

.notifications-count
  text-align: center
  color: white
  position: absolute
  width: 22px
  height: 22px
  background: #EA6363
  border-radius: 50%
  border: 3px solid black

section
  position: relative
  width: 100%
  box-sizing: border-box

button
  font-family: 'GothamPro', Arial, Helvetica, sans-serif
  background: none
  border: none
  cursor: pointer

a
  text-decoration: none
  color: inherit

h1
  margin: 0
  color: $title-color
  font-size: $title-size
  font-weight: 500
  line-height: 27px

h2
  color: $title-color
  font-size: $title-size
  font-weight: 500

h3,
h4
  color: $title-color

h3,
h2,
p,
ul
  margin: 0

ul
  list-style: none
  padding: 0

.fade-enter-active, .fade-leave-active
  transition: opacity .2s

.fade-enter, .fade-leave-to
  opacity: 0


// ZM

.zm
  color: $text-color
  background: $page-bg


// SD

.sd
  background: $sd-page-bg

  .steps
    background: white
    color: $sd-color

  .toggle-block
    background: white

  .dots
    &__dot
      background: $sd-icon-blur

      &--active
        background: $sd-color


// SP

.sp
  background: white

  .steps
    background: $sp-card-bg
    color: $sp-color

  .toggle-block
    background: $sp-card-bg

  .dots
    &__dot
      background: $sp-icon-blur

      &--active
        background: $sp-color


// WHIte

.white
  color: $white-text-color

  h1,
  h2,
  h3
    color: $white-title-color

  .notifications-count
    border: 3px solid white


</style>

<style>
.select {
  width: auto;
}

.select .multiselect__tags {
  padding: 17px 40px 12px 15px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}

.select .multiselect__input {
  color: #C8C8C8;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.1)
}

.select .multiselect__select {
  top: calc(50% - 20px);
}

.select .multiselect__select:before {
  border-color: #82C198 transparent transparent
}

.select .multiselect__placeholder {
  color: #C8C8C8;
  margin-bottom: 5px;
}

.select .multiselect__single {
  background: none;
  color: #C8C8C8;
  font-size: 14px
}

.select .multiselect__content-wrapper {
  background: rgba(0, 0, 0, 0.8);
  border: none;
}

.select .multiselect__option {
  color: #C8C8C8;
  font-size: 14px;
  white-space: normal;
}

.select .multiselect__option--selected .multiselect__option--highlight {
  background: rgba(0, 0, 0, 0.4);
  color: #C8C8C8;
}

.select .multiselect__option--highlight {
  background: rgba(0, 0, 0, 0.4);
}

.select .multiselect__option--selected {
  background: rgba(0, 0, 0, 0.4);
  font-weight: 400;
}

.mobile .select .multiselect__tags {
  background: #EEEEEE;
}

.mobile .select .multiselect__single {
  color: grey;
}

.mobile .select .multiselect__placeholder {
    color: grey;
}

.select--narrow .multiselect__tags {
  display: flex;
  align-items: center;
  padding: 0;
  padding-right: 35px;
  background: none;
}

.select--narrow .multiselect__single,
.select--narrow .multiselect__placeholder,
.select--narrow .multiselect__input {
  margin-bottom: 0;
  font-weight: 500;
  font-size: 12px;
  padding: 0;
}

.select--narrow .multiselect__single {
  height: 0;
}

.select--narrow .multiselect__select {
  padding: 0;
}


/* SP */

.sp .select .multiselect__tags {
  background-color: rgba(225, 225, 225, 0.2)
}

.sp .select--narrow .multiselect__tags {
  background: none;
}

.sp .select .multiselect__select:before {
  border-color: #DF2E2E transparent transparent;
}

.sp .select .multiselect__single {
  color: #575757;
}

.sp .select-white .multiselect__select:before {
  border-color: white transparent transparent;
}

.sp .select .multiselect__placeholder {
  color: #575757;
  opacity: .6;
}

.sp .select-white .multiselect__placeholder {
  color: white;
  opacity: .6;
}

.sp .select-white .multiselect__single {
  color: white;
  opacity: .6;
}


/* SD */

.sd .select .multiselect__tags {
  background-color: rgba(189, 203, 222, 0.2)
}

.sd .select--narrow .multiselect__tags {
  background: none;
}

.sd .select .multiselect__select:before {
  border-color: #3F8DF6 transparent transparent;
}

.sd .select .multiselect__single {
  color: #575757;
}

.sd .select-white .multiselect__select:before {
  border-color: white transparent transparent;
}

.sd .select .multiselect__placeholder {
  color: #575757;
  opacity: .6;
}

.sd .select-white .multiselect__placeholder {
  color: white;
  opacity: .6;
}

.sd .select-white .multiselect__single {
  color: white;
  opacity: .6;
}

</style>
