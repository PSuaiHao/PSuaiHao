import Vue from "vue"
import Vuex from "vuex"
import menu from './modules/menu'
import getters from './getters'
import worker from "./modules/worker"
import users from './modules/user'
import theme from "./theme"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
	getters,
  modules: {
		menu,
		worker,
		users,
		theme
	}
})
