<template>
  <div>
    <div class="box hzyy">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane class="box-top" label="角色管理" name="first">
          <div class="btn" style="margin: 20px">
            <el-button type="primary" @click="logtrue = true">新增角色</el-button>
          </div>
          <!-- 表格 -->
          <el-table :data="rolelist" style="width: 100%" border>
            <el-table-column align="center" type="index" label="序号" width="180"> </el-table-column>
            <el-table-column align="center" prop="name" label="名称" width="180"> </el-table-column>
            <el-table-column align="center" prop="description" label="描述"> </el-table-column>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope" align="center">
                <el-button size="mini" type="success" @click="handlefenpei(scope.row.id)">分配权限</el-button>
                <el-button size="mini" type="primary" @click="handleEdit(scope.row.id)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div class="bottom">
            <el-pagination
              background
              @current-change="getrole"
              @size-change="getrole"
              :current-page.sync="formInline.page"
              :page-size.sync="formInline.pagesize"
              layout="prev, pager, next"
              :total="total"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane class="box-top" label="公司信息" name="second">
          <gsxx></gsxx>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 弹出框 -->
    <setdialog v-if="logtrue" ref="setdialog" @close="close" @add="add" :title="title" @edit="edit"></setdialog>
    <setfenpei @close1="close1" ref="setfenpeis" v-if="qxtrue" :id="id" @add1="add1"></setfenpei>
  </div>
</template>

<script>
import gsxx from "@/components/setingchildren/gsxx.vue"
import setdialog from "@/components/setingchildren/setdialog.vue"
import setfenpei from "@/components/setingchildren/setfenpei.vue"
import { queryrole, querydelrole, queryroleht } from "../../utils/http"
export default {
  data() {
    return {
      activeName: "first",
      rolelist: [],
      logtrue: false,
      formInline: {
        pagesize: 10,
        page: 1
      },
      total: 0,
      title: "新增弹层",
      qxtrue: false,
      id: ""
    }
  },
  components: { setdialog, setfenpei, gsxx },
  methods: {
    handleClick(tab, event) {
      console.log(tab, "tab")
      console.log(event, "event")
    },
    // 编辑
    handleEdit(id) {
      this.logtrue = true
      this.title = "编辑弹层"
      queryroleht(id).then((res) => {
        this.$refs.setdialog.form = res.data
        console.log(res, "回填")
      })
    },
    // 删除
    handleDelete(id) {
      this.$confirm("确定删除该角色吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          querydelrole(id).then((res) => {
            console.log(res, "删除")
          })
          this.$message({
            type: "success",
            message: "删除成功!"
          })
          this.getrole()
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    // 分配回填
    handlefenpei(id) {
      this.qxtrue = true
      this.id = id
    },
    // 权限关闭
    add1() {
      this.qxtrue = false
    },
    close() {
      this.logtrue = false
    },
    close1() {
      this.qxtrue = false
    },
    // 刷新
    add() {
      this.getrole()
      this.logtrue = false
    },
    edit() {
      this.title = "新增弹层"
      this.getrole()
      this.logtrue = false
    },
    // 获取接口
    getrole() {
      queryrole(this.formInline).then((res) => {
        this.total = res.data.total
        this.rolelist = res.data.rows
        console.log(this.rolelist)
      })
    }
  },
  created() {
    this.getrole()
  }
}
</script>

<style lang="scss" scoped>
.el-tabs__item {
  font-size: 30px !important;
}
.bottom {
  text-align: center;
}
</style>
