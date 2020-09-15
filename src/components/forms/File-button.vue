<template>
  <div class="file-button" :class="fileClass ? `file-button--${fileClass}` : ``">
    <input
      type="file"
      :id="id"
      ref="file"
      :name="name"
      :accept="accept"
      @change="(e) => func(e)"
    />
    <label :for="id">
      <svg v-if="svg === 'recover'" id="file-recover" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10C20 14.3407 17.2354 18.0516 13.3333 19.4308C12.9271 19.5744 12.4803 19.3619 12.3363 18.9546C12.1925 18.5478 12.4059 18.1013 12.8127 17.9576C16.1771 16.7685 18.4375 13.5706 18.4375 10C18.4375 6.02737 15.7156 2.77695 12.1648 1.84128L13.6253 3.30185C13.9304 3.60687 13.9304 4.10156 13.6253 4.40659C13.3202 4.71161 12.8256 4.71176 12.5204 4.40659L9.44748 1.33362C8.95615 0.842285 9.30603 0 10 0C15.5275 0 20 4.47327 20 10ZM7.47955 15.5934C7.17438 15.2882 6.67984 15.2882 6.37466 15.5934C6.06964 15.8984 6.06964 16.3931 6.37466 16.6982L7.83524 18.1587C4.28436 17.2231 1.5625 13.9726 1.5625 10C1.5625 6.42944 3.82294 3.23151 7.1875 2.04239C7.5943 1.89865 7.80746 1.45233 7.66373 1.04553C7.51999 0.638733 7.07367 0.425415 6.66672 0.569305C2.76459 1.94839 0 5.65933 0 10C0 15.5267 4.4725 20 10 20C10.694 20 11.0439 19.1577 10.5524 18.6664L7.47955 15.5934ZM10 6.14578C12.1252 6.14578 13.8542 7.87476 13.8542 10C13.8542 12.1252 12.1252 13.8542 10 13.8542C7.87476 13.8542 6.14578 12.1252 6.14578 10C6.14578 7.87476 7.87476 6.14578 10 6.14578ZM7.70828 10C7.70828 11.2636 8.73642 12.2917 10 12.2917C11.2636 12.2917 12.2917 11.2636 12.2917 10C12.2917 8.73642 11.2636 7.70828 10 7.70828C8.73642 7.70828 7.70828 8.73642 7.70828 10Z"/>
      </svg>

      <svg
        v-else-if="svg === 'arrow'"
        id="arrow"
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7276 6.34243L13.776 0.390753C13.4128 0.0276266 12.8239 0.0276266 12.4608 0.390753C12.0976 0.753954 12.0976 1.34272 12.4608 1.70592L16.8249 6.07006H0.929949C0.416394 6.07006 0 6.48646 0 7.00001C0 7.51349 0.416394 7.92996 0.929949 7.92996H16.8249L12.4609 12.2941C12.0977 12.6573 12.0977 13.2461 12.4609 13.6093C12.6425 13.7907 12.8805 13.8816 13.1185 13.8816C13.3565 13.8816 13.5945 13.7907 13.7761 13.6093L19.7276 7.6576C20.0908 7.2944 20.0908 6.70563 19.7276 6.34243Z"
        />
      </svg>

      <svg
        v-else-if="svg === 'edit'"
        id="file-edit"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 15.375C16 15.7202 15.7202 16 15.375 16H8C7.65478 16 7.375 15.7202 7.375 15.375C7.375 15.0298 7.65478 14.75 8 14.75H15.375C15.7202 14.75 16 15.0298 16 15.375ZM15.375 12.2916H10.4584C10.1132 12.2916 9.83337 12.5715 9.83337 12.9166C9.83337 13.2618 10.1132 13.5416 10.4584 13.5416H15.375C15.7202 13.5416 16 13.2618 16 12.9166C16 12.5715 15.7202 12.2916 15.375 12.2916ZM15.375 9.83337H12.9166C12.5714 9.83337 12.2916 10.1132 12.2916 10.4584C12.2916 10.8036 12.5714 11.0834 12.9166 11.0834H15.375C15.7202 11.0834 16 10.8036 16 10.4584C16 10.1132 15.7202 9.83337 15.375 9.83337ZM15.8169 4.75439L4.75439 15.8169C4.6372 15.9342 4.47827 16 4.3125 16H0.625C0.279785 16 0 15.7202 0 15.375V11.6875C0 11.5217 0.0657959 11.3628 0.183105 11.2456L11.2456 0.183105C11.4896 -0.0610351 11.8854 -0.0610351 12.1294 0.183105L15.8169 3.8706C16.061 4.11462 16.061 4.51037 15.8169 4.75439ZM14.4911 4.3125L11.6875 1.50891L1.25 11.9464V14.75H4.05359L14.4911 4.3125Z"
          fill="#82C198"
        />
      </svg>

      <svg
        v-else
        id="file-plus"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5136 20 10C20 4.48645 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.66 1.54918 10C1.54918 5.34004 5.34082 1.54918 10 1.54918C14.6592 1.54918 18.4508 5.34004 18.4508 10C18.4508 14.66 14.66 18.4508 10 18.4508Z"
          fill="#82C198"
        />
        <path
          d="M13.873 9.15568H10.7746V6.05732C10.7746 5.62975 10.4284 5.28271 10 5.28271C9.57164 5.28271 9.22539 5.62975 9.22539 6.05732V9.15568H6.12703C5.69867 9.15568 5.35242 9.50271 5.35242 9.93029C5.35242 10.3579 5.69867 10.7049 6.12703 10.7049H9.22539V13.8033C9.22539 14.2308 9.57164 14.5779 10 14.5779C10.4284 14.5779 10.7746 14.2308 10.7746 13.8033V10.7049H13.873C14.3013 10.7049 14.6476 10.3579 14.6476 9.93029C14.6476 9.50271 14.3013 9.15568 13.873 9.15568Z"
          fill="#82C198"
        />
      </svg>
      {{text}}
    </label>
  </div>
</template>

<script>
export default {
  name: "File-button",
  props: ["id", "name", 'svg', "text", "accept", 'fileClass'],

  methods: {
    func(e) {
      this.$emit('func', e)
    }
  }
};
</script>

<style lang="sass" scoped>
.file-button
  input
    display: none

  label
    position: relative
    display: block
    padding: 8.5px 12px 8.5px 36px
    background: $main-color
    color: $button-text
    border-radius: 10px
    font-size: 12px
    line-height: 19px
    font-weight: 500
    transition: .2s
    white-space: nowrap
    cursor: pointer
    box-sizing: border-box

    &:hover
      background: $main-color-hover

    svg
      position: absolute
      left: 10px

      path
        fill: $button-text

  &--big
    label
      width: 250px
      padding: 18.5px 12px 18.5px 61px
      font-size: 14px

      svg
        left: 30px

  &--like-btn
    label
      background: rgba(130, 193, 152, 0.14)
      color: $main-color

      &:hover
        background: rgba(130, 193, 152, 0.2)

    #arrow
      left: 30px
      transform: rotate(-90deg)

      path
        fill: $main-color

  &--text
    label
      padding: 0 0 0 30px
      background: none
      color: $text-blur
      font-weight: 500

      &:hover
        background: none
        color: $main-color

      svg
        left: 0

        path
          fill: $main-color


// SP

.sp
  .file-button
    label
      background: $sp-color
      color: white

      svg
        path
          fill: white

    &--text
      label
        background: none
        color: $white-text-blur
        font-weight: 500

        &:hover
          background: none
          color: $sp-color

        svg
          left: 0

          path
            fill: $sp-color

// SD

.sd
  .file-button
    label
      background: $sd-color
      color: white

      svg
        path
          fill: white

    &--text
      label
        background: none
        color: $white-text-blur
        font-weight: 500

        &:hover
          background: none
          color: $sd-color

        svg
          left: 0

          path
            fill: $sd-color


</style>
