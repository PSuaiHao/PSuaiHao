<template>
  <div>
    <el-tree :data="data" node-key="id" default-expand-all :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ data }">
        <span>{{ data.name }}</span>

        <div>
          <span>{{ data.manager }}</span>
          <el-dropdown @command="addAndEdit($event, data)">
            <span class="el-dropdown-link"> 操作<i class="el-icon-arrow-down el-icon--right" /> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add1">添加子部门</el-dropdown-item>
              <el-dropdown-item command="edit">编辑部门</el-dropdown-item>
              <el-dropdown-item command="delete">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </span>
    </el-tree>
    <!-- 弹出框 -->
    <diralog
      v-if="dialogtrue"
      ref="diralog"
      @closedialog="closedialog"
      @add="add"
      :pid="pid"
      :title="title"
      @edit="edit"
    ></diralog>
  </div>
</template>

<script>
import { querydeepart, querydelete, queryht } from "@/utils/http"
import diralog from "@/components/departchildren/diralog.vue"
export default {
  data() {
    return {
      data: [],
      dialogtrue: false,
      pid: "",
      it: {},
      title: "添加"
    }
  },
  components: { diralog },
  methods: {
    add() {
      this.dialogtrue = false
      this.data = []
      this.qwe()
    },
    edit() {
      this.dialogtrue = false
      this.data = []
      this.qwe()
    },

    // 添加 删除 编辑
    addAndEdit(command, item) {
      console.log(command, "command")
      console.log(item, "id")
      if (command == "add1") {
        this.dialogtrue = true
        this.pid = item.id
        this.title = "添加"
        console.log(this.pid, "111")
      } else if (command == "delete") {
        console.log(item.id, "5555555")
        querydelete({ id: item.id }).then((res) => {
          console.log(res)
          this.data = []
          this.qwe()
        })
      } else {
        // 编辑
        this.dialogtrue = true
        this.title = "编辑"
        this.$nextTick(() => {
          queryht(item.id).then((res) => {
            console.log(res)
            this.$refs.diralog.form = res.data
          })
        })
      }
    },

    closedialog() {
      this.dialogtrue = false
    },

    // 获取接口
    qwe() {
      querydeepart().then((res) => {
        const newarray = res.data.depts
        newarray.forEach((item) => {
          if (item.pid == "-1") {
            this.data.push(item)
          }
        })
        this.data[0].children = this.getdepart(res.data.depts, "")
        //  console.log(this.data,'999999999');
      })
    },

    // 数组中添加children
    getdepart(list, id) {
      var arr = []

      list.forEach((item) => {
        // console.log(item);
        // 判断这一项的pid是不是等于
        if (item.pid == id) {
          // 这一步是判断每一项里面有没有children 如果没有就添加一个children空数组
          const children = this.getdepart(list, item.id)
          // console.log(children,'5555555555');
          if (!item.children) {
            item.children = children
          }
          arr.push(item)
        }
      })
      // console.log(arr);
      return arr
    }
  },
  created() {
    this.qwe()
  }
}
</script>

<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  .el-dropdown-link {
    margin-left: 20px;
  }
}
</style>
