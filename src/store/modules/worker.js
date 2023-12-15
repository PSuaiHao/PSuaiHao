import { queryempl } from "@/utils/http"

const state = {
  tableList: [],
  total: 0,
  page: 1,
  size: 10
}
const mutations = {
  getlist(state, obj) {
    state.tableList = obj.data.rows
    state.total = obj.data.total // console.log(obj, '12313132123');
  },
  chengepage1(state, val) {
    state.page = val
  },
  chengesize1(state, val) {
    state.size = val
  }
}
const actions = {
  async getyg({ commit, state }) {
    let res = await queryempl({ page: state.page, size: state.size })
    commit("getlist", { ...res })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
