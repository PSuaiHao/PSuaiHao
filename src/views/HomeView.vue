<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <div class="left">
            <i class="el-icon-s-fold"></i>
          </div>
          <div class="right"></div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { queryhpage } from "@/utils/http"
export default {
  data() {
    return {}
  },
  methods: {
    gethpage() {
      queryhpage().then((res) => {
        console.log(res)
      })
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
}
.el-header {
  height: 60px;
  background-color: #4b7bfb;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    font-size: 30px;
  }
}
</style>
