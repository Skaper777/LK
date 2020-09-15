<template>
  <label ref="inputWrapper" class="input-wrapper" :class="wrapperClass" :style="styles">
    <input
      v-bind:value="model"
      v-on:input="$emit('input', $event.target.value)"
      ref="input"
      class="input"
      :id="inputId"
      :type="inputType"
      autocomplete="off"
      @focus="focusFunc"
      :readonly="onlyRead ? true : false"
    />
    <span ref="plchldr" class="input-placeholder" v-if="plchldr">{{plchldr}}</span>

    <div @click="save" ref="save" class="input-saveBtn">
      <Button v-if="btn" btnText="Сохранить" wrapperClass="button-wrapper--green button-wrapper--no-svg" />
    </div>

  </label>
</template>

<script>
import Button from './Button'

export default {
  name: "Input",
  components: {
    Button
  },
  props: [
    "wrapperClass",
    "styles",
    "inputId",
    "inputType",
    "plchldr",
    "onlyRead",
    "model",
    'btn'
  ],

  methods: {
    focusFunc() {
      this.$emit("focusFunc");
    },

    save() {
      this.$refs.save.classList.remove('input-saveBtn--active')
      this.$emit("save");
    },

    onFocus() {
      if (this.plchldr)
        this.$refs.plchldr.classList.add("input-placeholder--focus");
    },

    onBlur() {
      if (!this.$refs.input.value.length)
        this.$refs.plchldr.classList.remove("input-placeholder--focus");
    },

    toError() {
      this.$refs.inputWrapper.classList.add("input-wrapper--error");
    },

    toSuccess() {
      this.$refs.inputWrapper.classList.remove("input-wrapper--error");
    },

    checkInput() {
      if (this.$refs.input.value < 1) this.toError();
      else this.toSuccess();

      if (this.btn) {
        this.$refs.save.classList.add('input-saveBtn--active')
      }
    }
  },

  mounted() {
    this.$refs.input.addEventListener("focus", this.onFocus);
    this.$refs.input.addEventListener("blur", this.onBlur);
    this.$refs.input.addEventListener("input", this.checkInput);

    this.$eventHub.$on("onFocus", (id) => {
      id.nextElementSibling.classList.add("input-placeholder--focus");
    });
  }
};
</script>

<style lang="sass">
.calendar
  background: $modal-bg !important
  border-radius: 6px

.input-saveBtn
  opacity: 0
  z-index: -10

  &--active
    opacity: 1
    z-index: 1

.input-wrapper
  display: flex
  align-items: flex-start
  width: 100%
  position: relative

  .button-wrapper--green
    margin-left: 20px

  &--half
    width: 48%

  &--error
    .input
      background: $error-bg-trans

    .input-placeholder
      color: $text-error

  &--auto-width
    display: inline-block

    .input
      width: auto

.input
  position: relative
  width: 100%
  padding: 20px 20px
  font-size: 14px
  color: $text-color
  box-sizing: border-box
  background: rgba(255, 255, 255, 0.1)
  border-radius: 6px
  border: none

  &--date
    padding: 20px 20px 20px 53px
    width: 230px
    background-image: url(../../assets/img/icons/calendar.png), url(../../assets/img/icons/input-arrow.png)
    background-repeat: no-repeat
    background-position: 20px 50%, 200px 50%
    cursor: pointer

.input-placeholder
  position: absolute
  left: 20px
  top: 18px
  color: white
  opacity: .6
  transition: .2s

  &--focus
    font-size: 10px
    top: 3px

.profile-block
  .input
    max-width: 322px

.finance-history,
.finance-docs
  .input--date
    @media(max-width: 1024px)
      width: 100%
      background-position: 20px 50%, 90% 50%


// White

.white
  .input
    color: $white-text-color

  .input-placeholder
    color: $white-text-color


// SD

.sd
  .calendar
    background: $sd-modal-bg !important

  .input
    background: rgba(189, 203, 222, 0.2)

    &--date
      background-image: url(../../assets/img/icons/white-calendar.png), url(../../assets/img/icons/sd-input-arrow.png)
      background-repeat: no-repeat
      background-position: 20px 50%, 200px 50%

  .finance-history,
  .finance-docs
    .input--date
      background-position: 20px 50%, 90% 50%


// SP

.sp
  .calendar
    background: $sp-modal-bg !important

  .input
    background: rgba(225, 225, 225, 0.2)

    &--date
      background-image: url(../../assets/img/icons/white-calendar.png), url(../../assets/img/icons/sp-input-arrow.png)
      background-repeat: no-repeat
      background-position: 20px 50%, 200px 50%

  .finance-history,
  .finance-docs
    .input--date
      background-position: 20px 50%, 90% 50%


</style>
