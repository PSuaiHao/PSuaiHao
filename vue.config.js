const { defineConfig } = require("@vue/cli-service")
const path = require("path")

function resolve(dir){
	   return path.join(__dirname,dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
	// 在vue3.3.0以下是用beasUrl
	// publicPath：是vue 3.3.0以上版本用
  publicPath:'/',
	// 修改打包的文件夹和路径
	outputDir:"dist",
	// 静态资源文件修改路径
	assetsDir:"assets",
	devServer:{
		open:true,
		proxy:{
			"/api":{
				// 配置代理默认开启代理方式
				changeOrigin:true,
				// 如果是http接口，需要配置该参数
				secure:false,
				// 配置代理路径
				target:'https://ihrm-java.itheima.net/api',
				//路径重写
				pathRewrite:{
					"^/api":""
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
  },
})
