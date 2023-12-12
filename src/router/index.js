import Vue from "vue"
import VueRouter from "vue-router"
import Layout from '@/layout'
import store from '@/store'
import { getToken } from "../utils/auch"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

// 调用menu模块里面的异步方法
store.dispatch("menu/getpermission")
const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/dashboard/index"),
				meta: { title: "首页", icon: "menu", isAthoout: false }
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  }
]

// 首页信息
const Dashboard = {
  path: "dashboard",
  name: "dashboard",
  component: () => import("@/views/dashboard/index"),
  meta: { title: "首页", icon: "menu", isAthoout: false }
}

const router = new VueRouter({
  routes
})

/***
 * 思路
 * 1. 前置路由守卫是进入路由的第一步关卡,所以动态路由的接口在这里去请求.获取路由信息
 * 			获取路由表信息有两种方法
 *      (1). store.getters.menuNewList
 *      (2). store.state.menuList.newList
 * 2. 我们获取到的路由信息,不符合路由规则,所以我们需要处理数据,变成路由规则的数据
 * 3. 注册一条新的子路由,调用router.addRoute的方法, router.addRoute(parentname,child)
 * 4. 但是,左侧side组件是引用路由表中的动态路由完成子路由页面渲染,需要将动态路由添加到一个数组中,
 *    方便Side.vue页面使用
 * 5. 首页是每个人都可以看到的信息,所以我们手动添加首页信息
 *
 *
 * 权限按钮标识
 * 1. 后端在返回菜单的信息的时候,会返回一个permission标识,里面包含按钮的权限标识
 * 2. 我们使用v-if控制权限按钮的加载,
 * 			1. 写一个公共方法,判断一下传递进来的按钮标识,是否包含在数组中,返回true和false显隐
 *      2. 自定义指令
 */

router.beforeEach((to, from, next) => {
  let tokens = getToken()
	NProgress.start()
  if(!tokens){
		if(to.path!=='/login'){
			next({path:'/login'})
		}else{
			next()
		}
	}else{
		setTimeout(()=>{
			  // 没有处理的初始化动态路由信息
				let initDynamic = store.state.menu.newList
				let Dynamic = []
				initDynamic.forEach((childRoute)=>{
					let item={
						path: "/"+childRoute.code,
						name: childRoute.code,
						component: () => import(`@/views/${childRoute.code}/index.vue`),
						meta: { title: childRoute.name, icon: "menu" }
					}
					router.addRoute('layout',item)
					Dynamic.push(item)
				})
				Dynamic.unshift(Dashboard)

				localStorage.setItem("Routes", JSON.stringify(Dynamic))
		},1000)
		next()
	}
})

router.afterEach(() => {
  NProgress.done()
})

export default router
