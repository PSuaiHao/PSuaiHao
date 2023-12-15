<template>
	<div>
		<el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                <img src="../assets/微信图片_20220922141811.gif" alt="" /> {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>{{ $t("route.dashboard") }}</el-dropdown-item>
                <el-dropdown-item> <a href="https://gitee.com/shuiruohanyu/hrsaas139">项目地址</a></el-dropdown-item>
                <el-dropdown-item command="b">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
	</div>
</template>

<script>
import { removetoken } from "@/utils/auch"
export default {
 data() {
	 return {
		username:''
	 };
 },
 methods: {
	handleCommand(command) {
      if (command == "b") {
        removetoken()
        this.$router.push("/login")
      }
    }
 },
 created(){
	this.username=localStorage.getItem('username')
 }
};
</script>

<style lang="scss" scoped>
 img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
    }
</style>