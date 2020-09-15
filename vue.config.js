let zmVars = "~@/assets/styles/zm-vars.sass"
let spVars = "~@/assets/styles/sp-vars.sass"
let sdVars = "~@/assets/styles/sd-vars.sass"
let whiteVars = "~@/assets/styles/white-vars.sass"
let commonVarsPath = '~@/assets/styles/commonVars.sass'

module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import ${zmVars}, ${spVars}, ${sdVars}, ${whiteVars}, ${commonVarsPath}`
      }
    }
  }
}
