<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <el-menu
          router
          default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#4c7dfb"
          text-color="#fff"
          :collapse="isCollapse"
        >
          <el-menu-item index="/dashboard">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">员工</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">公司设置</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">社保</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">审批</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">考勤</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">工资</span>
          </el-menu-item>
          <el-menu-item index="/departments">
            <i class="el-icon-setting"></i>
            <span slot="title">组织架构</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="left">
            <i class="el-icon-s-fold" @click="isCollapse = !isCollapse"></i>
            <h4>江苏传智博客教育科技股份有限公司</h4>
            <button>体验版</button>
          </div>
          <div class="right">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                <img src="../assets/微信图片_20220922141811.gif" alt="" /> {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item> <a href="https://gitee.com/shuiruohanyu/hrsaas139">项目地址</a></el-dropdown-item>
                <el-dropdown-item command="b">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <div class="hh">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { queryhpage } from "@/utils/http"
import { removetoken } from "@/utils/auch"
export default {
  data() {
    return {
      username: "",
      isCollapse: false
    }
  },
  methods: {
    gethpage() {
      queryhpage().then((res) => {
        console.log(res.data)
        this.username = res.data.username
        localStorage.setItem("username", res.data.username)
        localStorage.setItem("company", res.data.company)
      })
    },
    handleCommand(command) {
      if (command == "b") {
        removetoken()
        this.$router.push("/login")
      }
    }
  },
  created() {
    this.gethpage()
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-color: #4c7dfb;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-vertical-demo {
    margin-top: 60px;
  }
  i {
    color: #fff;
  }
}
.el-header {
  height: 60px;
  background-color: #4b7bfb;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      font-size: 26px;
    }
    h4 {
      margin: 0 10px;
    }
    button {
      border: 0;
      padding: 5px;
      border-radius: 5px;
      background-color: #84a9fe;
      color: #fff;
    }
  }
  .right {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .el-dropdown-link {
      color: #fff;
    }
  }
}
.el-main {
  width: calc(100vw - 200px);
  height: calc(100vh - 60px);
  .hh {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
}
</style>
