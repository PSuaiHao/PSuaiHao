import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "./utils/request"
import "./style/comments.css"
import "@/icons"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
