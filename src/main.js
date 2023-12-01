import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button } from "element-ui"
import http from "./utils/request"
Vue.config.productionTip = false
Vue.prototype.$http = http

Vue.use(Button)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
