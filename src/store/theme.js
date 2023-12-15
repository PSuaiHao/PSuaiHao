const state = {
  themeColor: "#008cff"
}
const mutations = {
  changeThemeColor(state, val) {
    state.themeColor = val
		console.log(val,'22222222222222');
  }
}
export default { namespaced: true, state, mutations }
