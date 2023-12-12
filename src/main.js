import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "./utils/request"
import '@/styles/element-variables.scss'
import  "./style/comments.css"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import {isAuth} from './utils/btnpermise'

// import VueI18n from 'vue-i18n'
import enLocale from "element-ui/lib/locale/lang/en"
import zhLocale from "element-ui/lib/locale/lang/zh-CN"
// import i18n from "./language/index"
// ElementLocale.i18n((key, value) => i18n.t(key, value))
import "@/icons"

import VueI18n from "vue-i18n"
//引入element处理语言
import ElementLocale from "element-ui/lib/locale"

// 引入我们实例化后vue-i18
import i18n from "./language/index"
//将我们实例化的vue-i8编写公共方法,绑定要elementui语言上
ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.isAuth= isAuth

Vue.use(ElementUI)
Vue.use(VueI18n)
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app")
