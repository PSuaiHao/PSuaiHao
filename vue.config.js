const { defineConfig } = require("@vue/cli-service")
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

// console.log(process.env)

module.exports = defineConfig({
  // 关闭保存时候 代码格式化校验

  transpileDependencies: true,
  lintOnSave: false,
  // 在vue3.2.2以下是用baseURL
  // publicPath：是vue 3.2.2以上版本用
  publicPath: "/",
  // 修改打包的文件夹和路径
  outputDir: "dist",
  // 静态资源文件修改路径
  assetsDir: "assets",
  devServer: {
    open: true,
    proxy: {
      [process.env.VUE_APP_IDENT]: {
        // 配置代理默认开启代理方式
        changeOrigin: true,
        // 如果是http接口，需要配置该参数
        secure: false,
        // 配置代理路径
        target: process.env.VUE_APP_URL,
        //路径重写 ,向后端发起服务的时候,不带代理标识
        pathRewrite: {
          ["^" + process.env.VUE_APP_IDENT]: ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      /**路径别名 */
      alias: {
        // eslint-disable-next-line no-undef
        "@": resolve("src"),
        $components: resolve("src/components"),
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
})
