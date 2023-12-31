const getters = {
  // 开放username
  username: (state) => state.users.userInfo.username,
  userId: (state) => state.users.userInfo.userId,
  staffPhoto: (state) => state.users.userInfo.staffPhoto,
  userInfo: (state) => state.users.userInfo,
  // 员工列表的总条数
  workerTotal: (state) => state.worker.total,
  // 员工列表
  workertableList: (state) => state.worker.tableList,
  // 筛选后的数组列表
  menuNewList: (state) => state.menu.newList,
  // 个人按钮权限标识
  btnPermission: (state) => state.menu.permission
}
export default getters