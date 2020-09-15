export const setInputValue = {
  methods: {
    setInputValue(input, value) {
      input.value = value || ''
      value ? this.$eventHub.$emit('onFocus', input) : false
    }
  }
}
