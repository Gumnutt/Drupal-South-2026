const postcssJitProps = require("postcss-jit-props")
const OpenProps = require("open-props")
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-custom-media"),
    postcssJitProps(OpenProps),
    require("autoprefixer"),
  ],
}
