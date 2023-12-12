<template>
  <div>
    <div class="top hzyy">
      <el-button type="primary" icon="el-icon-info" plain>共{{total}}条记录</el-button>
      <div class="left">
        <el-button type="danger" v-if="isAuth('employees:ooo')">简单表头导出</el-button>
        <el-button type="info">复杂表头导出</el-button>
        <el-button type="success">excel导入</el-button>
        <el-button type="primary" disabled>新增员工</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="50"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="100"> </el-table-column>
      <el-table-column label="头像" width="100">
        <template slot-scope="scope">
          <img src="https://ihrm.itheima.net/static/img/bigUserHeader.fda3837f.png" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号" width="180"> </el-table-column>
      <el-table-column prop="workNumber" label="工号" width="100"> </el-table-column>
      <el-table-column prop="workNumber" label="聘用形式" width="100">
        <template slot-scope="scope">
          {{ scope.row.formOfEmployment == 1 ? "正式" : "非正式" }}
        </template>
      </el-table-column>
      <el-table-column prop="departmentName" label="部门" width="100"> </el-table-column>
      <el-table-column prop="timeOfEntry" label="入职时间" width="150"> </el-table-column>
      <el-table-column prop="workNumber" label="账户状态" width="100">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.enableState" :active-value="1" :inactive-value="0"> </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">转正</el-button>
          <el-button type="text" size="small">调岗</el-button>
          <el-button type="text" size="small">离职</el-button>
          <el-button type="text" size="small" @click="handlerole(scope.row.id)">角色</el-button>
          <el-button type="text" size="small" disabled>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
		<div class="bottom">
			<el-pagination
			 background
			@current-change="getempl"
			@size-change="getempl"
      :current-page.sync="formInline.page"
			:page-size.sync="formInline.size"
			layout="prev, pager, next"
			:total="total">
		</el-pagination>
		</div>
		<roles @colse="colse" v-if="trueroles" ref="roles"></roles>
  </div>
</template>

<script>
import { queryempl } from "../../utils/http"
import roles from "@/components/employchildren/roles.vue"
export default {
  data() {
    return {
      tableData: [],
      total: 0,
			formInline:{
			size:10,
			page:1
			},
			trueroles:false

    }
  },
	components:{roles},
  methods: {
		colse(){
			  this.trueroles=false
		},
    // 点击查看
    handleClick(row) {
      this.$router.push({
        path: "/empldetail",
        query: {
          id: row.id
        }
      })
    },
		// 分配角色
		handlerole(id){
			this.trueroles=true
			this.$nextTick(()=>{
				this.$refs.roles.id=id
			})

		},
    // 获取接口
    getempl() {
      queryempl(this.formInline).then((res) => {
        this.tableData = res.data.rows
        this.total = res.data.total
        console.log(res)
      })
    }
  },
  created() {
    this.getempl()
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
img {
  width: 80px;
  height: 80px;
}
.bottom{
	width: 100%;
	text-align: center;
}
</style>
