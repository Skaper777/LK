<template>
  <div class="checkbox" :class="noMarginTop ? 'checkbox--no-margin-top' : false">
    <input
      ref="input"
      :id="checkId"
      type="checkbox"
      @change="func"
      :checked="isChecked"
    />
    <label :for="checkId">{{text}}</label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: ["text", "model", "checkId", 'isChecked', 'noMarginTop'],

  methods: {
    func() {
      this.$emit("func");
    }
  }
};
</script>

<style lang="sass" scoped>
.checkbox
  margin: 28px 0 11px

  &--no-margin-top
    margin-top: 0

  input
    position: absolute
    z-index: -900
    opacity: 0
    visibility: hidden

  label
    position: relative
    padding-left: 32px
    cursor: pointer

    &::before
      position: absolute
      left: 0
      top: calc(50% - 11px)
      content: ''
      width: 22px
      height: 22px
      border-radius: 4px
      background: #313131

    &::after
      display: none
      position: absolute
      top: 3px
      left: 5px
      width: 12px
      height: 8px
      content: ''
      background: url(../../assets/img/icons/check.png)

  input:checked + label::before
    background: $main-color

  input:checked + label::after
    display: block


// SP

.sp
  .checkbox
    label
      &::before
        background: $sp-modal-bg

      &::after
        background: url(../../assets/img/icons/white-check.png)
        background-size: cover

    input:checked + label::before
      background: $sp-color


// SD

.sd
  .checkbox
    label
      &::before
        background: $sd-modal-bg

      &::after
        background: url(../../assets/img/icons/white-check.png)
        background-size: cover

    input:checked + label::before
      background: $sd-color

</style>
