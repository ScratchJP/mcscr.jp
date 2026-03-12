// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  stylistic.configs.customize({
    "comma-dangle": "off"
  })  
)
