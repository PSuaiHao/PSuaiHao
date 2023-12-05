import http from "./request"

// 登录页面
export const querylogin = (data) => http.post(http.addurl("/sys/login"), data)
// 首页
export const queryhpage = () => http.post(http.addurl("/sys/profile"))
// 组织架构
export const querydeepart = (data) => http.get(http.addurl("/company/department"), { data })
// 新增组织架构
export const queryadddep = (data) => http.post(http.addurl("/company/department"), data)
//  获取部门负责人
export const queryfzr = () => http.get(http.addurl("/sys/user/simple"))
// 删除部门组织架构
export const querydelete = (params) => http.delete(http.addurl(`/company/department/${params.id}`))
// 回填
export const queryht = (id) => http.get(http.addurl(`/company/department/${id}`))
// 修改
export const queryeditdep = (data) => http.put(http.addurl(`/company/department/${data.id}`), data)
