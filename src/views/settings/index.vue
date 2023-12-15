<template>
  <div>
    <div class="box hzyy">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane class="box-top" label="角色管理" name="first">
          <div class="btn" style="margin: 20px">
            <el-button type="primary" @click="logtrue = true">新增角色</el-button>
          </div>
          <!-- 表格 -->
          <setable ref="setable" @handlefenpei="handlefenpei" @handleEdit="handleEdit" @handleDelete="handleDelete"></setable>
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
    <setfenpei @close="close1" ref="setfenpeis" v-if="qxtrue" :id="id"></setfenpei>
  </div>
</template>
<script>
import gsxx from "@/components/setingchildren/gsxx.vue"
import setdialog from "@/components/setingchildren/setdialog.vue"
import setfenpei from "@/components/setingchildren/setfenpei.vue"
import setable from "@/components/setingchildren/setable.vue"
import { queryrole, querydelrole, queryroleht } from "../../utils/http"
export default {
  data() {
    return {
      activeName: "first",
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
  components: { setdialog, setfenpei, gsxx, setable },
  methods: {
    handleClick(tab, event) {},
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
			querydelrole(id).then((res) => {
            console.log(res, "删除")
          })
          this.getrole()
    },
    // 分配回填
    handlefenpei(id) {
      this.qxtrue = true
      this.id = id
    },
    // 权限关闭

    close() {
      this.logtrue = false
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
				this.$refs.setable.rolelist=res.data.rows
        console.log(this.$refs.setable.rolelist)
      })

    }
  },
  created() {
    this.getrole()
  }
}
</script>
<style lang="scss" scoped>
.bottom {
  text-align: center;
}
</style>
