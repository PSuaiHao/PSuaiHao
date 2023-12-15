<template>
  <div>
    <div class="top hzyy">
      <el-button type="primary" icon="el-icon-info" plain>共{{ workerTotal }}条记录</el-button>
      <div class="left">
        <el-button :style="{ background: themeColor }" size="small" type="danger" @click="exportData"
          >简单表头导出</el-button
        >
        <el-button size="small" type="info">复杂表头导出</el-button>
        <el-button size="small" type="success" @click="$router.push('/import')">excel导入</el-button>
        <el-button size="small" type="primary" @click="showDialog = true">新增员工</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <emptable :workertableList="workertableList" @handlerole="handlerole"></emptable>
    <!-- 分页 -->
    <div class="bottom">
      <el-pagination
        background
        @current-change="get1"
        @size-change="get2"
        :current-page="1"
        :page-size="10"
        layout="prev, pager, next"
        :total="workerTotal"
      >
      </el-pagination>
    </div>
    <roles @colse="colse" v-if="trueroles" ref="roles"></roles>
  </div>
</template>

<script>
import { xlsx } from "@/utils/xlsx"
import { mapActions, mapMutations, mapState, mapGetters } from "vuex"
import emptable from "@/components/employchildren/emptable.vue"
import roles from "@/components/employchildren/roles.vue"
export default {
  data() {
    return {
      listHander: {
        username: "姓名",
        mobile: "手机号",
        workNumber: "工号",
        formOfEmployment: "聘用形式",
        departmentName: "部门",
        timeOfEntry: "入职时间",
        enableState: "用户状态"
      },
      trueroles: false
    }
  },
  computed: {
    ...mapGetters(["workerTotal", "workertableList"]),
    ...mapState("theme", ["themeColor"])
  },
  components: { roles, emptable },
  methods: {
    ...mapMutations("worker", ["chengepage1", "chengesize1"]),
    ...mapActions("worker", ["getyg"]),
    colse() {
      this.trueroles = false
    },
    exportData() {
      xlsx(this.workertableList, this.listHander, "人资列表下载")
    },
    // 点击查看

    // 分配角色
    handlerole(id) {
      this.trueroles = true
      this.$nextTick(() => {
        this.$refs.roles.id = id
      })
    },
    // 获取分页
    get1(val) {
      this.chengepage1(val)
      this.getyg()
    },
    get2(val) {
      this.chengesize1(val)
      this.getyg()
    }
  },
  mounted() {
    this.getyg()
  },
  created() {
    console.log(this.themeColor, "44444444444444444")
  }
}
</script>

<style lang="scss" scoped>
.top {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom {
  width: 100%;
  text-align: center;
}
</style>
