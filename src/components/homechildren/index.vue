<template>
	<div>
		<el-menu
          router
          default-active="$route.path"
          class="el-menu-vertical-demo"
          text-color="#fff"
          :collapse="isCollapse"
          active-text-color="#fff"
        >

          <el-menu-item v-for="item in routes" :key="item.path" :index="item.path">
            <i class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </el-menu>
	</div>
</template>

<script>
export default {
	props:['isCollapse'],
 data() {
	 return {
		routes: JSON.parse(localStorage.getItem("Routes"))
	 };
 },
 methods: {},
};
</script>

<style lang="scss" scoped>
.el-menu{
		border-right: 0;
		background-color: transparent;
		i {
    color: #fff;
    vertical-align: middle !important;
    margin-right: 16px !important;
  }
	.el-menu-item:hover {
    color: #4b7bfb !important;
    &:hover i {
      color: #4b7bfb !important;
    }
  }
	.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
	}
</style>