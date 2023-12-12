<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <el-image
          class="img"
          style="margin-left: 12px; margin-top: 10px"
          :width="isCollapse ? '40px' : '140px'"
          :src="require('../assets/common/logo.png')"
          fit="contain"
        ></el-image>
        <homechildren :isCollapse="isCollapse"></homechildren>
      </el-aside>
      <el-container>
        <el-header>
          <div class="left">
            <div style="padding: 0 15px; vertical-align: sub" @click="toggleClick">
              <svg
                :class="{ 'is-actives': !isCollapse }"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#fff"
              >
                <path
                  d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
                />
              </svg>
            </div>
            <h4>江苏传智博客教育科技股份有限公司</h4>
            <button>体验版</button>
          </div>
          <div class="right">
            <!-- 切换中英文 -->
            <lang></lang>
            <div class="ic">
              <ScreenFull></ScreenFull>
            </div>
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
import ScreenFull from "@/components/ScreenFull"
import lang from "@/components/lang"
import homechildren from "../components/homechildren"
export default {
  data() {
    return {
      username: "",
      isCollapse: false
    }
  },
  components: { ScreenFull, lang, homechildren },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse
    },
    gethpage() {
      queryhpage().then((res) => {
        // console.log(res.data)
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
  background: url("../assets/common/leftnavBg.png") no-repeat 0 100%,
    -webkit-linear-gradient(bottom, #3d6df8, #5b8cff);
  transition: width 0.28s;
  background-color: transparent;
  height: 100vh;
  overflow-x: hidden !important;
  .img {
    height: 60px;
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
    .is-actives {
      transform: rotate(180deg);
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
    .ic {
      margin: 0 15px;
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