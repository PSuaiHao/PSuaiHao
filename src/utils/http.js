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
// 获取权限点
export const queryperm=()=>http.get(http.addurl('/sys/permission'))
// 获取添加权限
export const querypermadd=(data)=>http.post(http.addurl('/sys/permission'),data)
// 删除权限
export const querydel=(id)=>http.delete(http.addurl(`/sys/permission/${id}`))
// 回填权限
export const queryhuitian=(id)=>http.get(http.addurl(`/sys/permission/${id}`))
// 修改权限
export const queryeditperm=(data)=>http.put(http.addurl(`/sys/permission/${data.id}`),data)
// 获取角色列表
export const queryrole=()=>http.get(http.addurl('/sys/role'))
// 获取员工列表
export const queryempl=(params)=>http.get(http.addurl('/sys/user'),{params})
// 获取员工基本信息
export const queryemplgr=(id)=>http.get(http.addurl(`/sys/user/${id}`))
// 保存员工基本信息
export const querybcygxx=(data)=>http.put(http.addurl(`/sys/user/${data.id}`),data)
// 获取个人详情
export const querygeren=(id)=>http.get(http.addurl(`/employees/${id}/personalInfo`))
// 保存员工个人信息
export const querysetge=(data)=>http.put(http.addurl(`/employees/${data.id}/personalInfo`),data)
// 获取岗位信息
export const queryganwei=(id)=>http.get(http.addurl(`/employees/${id}/jobs`))
// 保存岗位信息
export const querysetgan=(data)=>http.put(http.addurl(`/employees/${data.id}/jobs`),data)
// 分配角色
export const queryfenpei=(data)=>http.put(http.addurl('/sys/user/assignRoles'),data)
// 添加角色
export const queryroleadd=(data)=>http.post(http.addurl('/sys/role'),data)
// 删除角色
export const querydelrole=(id)=>http.delete(http.addurl(`/sys/role/${id}`))
// 回填角色
export const queryroleht=(id)=>http.get(http.addurl(`/sys/role/${id}`))
// 编辑角色
export const queryeditrole=(data)=>http.put(http.addurl(`/sys/role/${data.id}`),data)
// 分配角色权限
export const queryrolesqx=(data)=>http.put(http.addurl(`/sys/role/assignPrem`),data)
// 公司信息
export const querygsxx=()=>http.get(http.addurl('/company'))

