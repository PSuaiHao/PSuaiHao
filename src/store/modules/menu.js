import {queryperm,queryhpage} from '@/utils/http'
const state={
	// 菜单
	menuList:[],
	// 个人
	userList:[],
	newList:[],
	permission:[],
}

const mutations={
	getpermis(state, data) {
    state.menuList = data.data
  },
	// 个人信息数据
	getpro(state, data) {
    state.userList = data.data.roles.menus
    // 模拟接口返回数据
    state.permission = ["employees:add", "employees:list", "employees:info", "employees:daochu"]
    console.log(state.userList, "userList")
  },
	// 过滤过后的数据
	filterList(state, played) {
    console.log(played)
    const {
      singleList,
      alliMenlist: { data }
    } = played
    const { menus } = singleList.data.roles
    state.newList = data.filter((item) => {
      return menus.filter((element) => element === item.code).length > 0
    })
    console.log(state.newList, "新数组")
  }
}

const actions={
	async getpermission({ commit }) {
		// 调取菜单接口
		let alliMenlist = await queryperm()
    let singleList = await queryhpage()
    commit("filterList", { alliMenlist, singleList })
		// 左侧菜单
    commit("getpermis", alliMenlist)
    // 单人信息储存
    commit("getpro", singleList)
  }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}