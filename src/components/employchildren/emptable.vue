<template>
	<div>
            <!-- 表格 -->
    <el-table :data="workertableList" style="width: 100%">
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
	</div>
</template>

<script>
export default {
	props:['workertableList'],
 data() {
	 return {
	 };
 },
 methods: {
	handleClick(row) {
      this.$router.push({
        path: "/empldetail",
        query: {
          id: row.id
        }
      })
    },
	handlerole(id){
		this.$emit('handlerole',id)
	}
 },
};
</script>

<style lang="scss" scoped>
img {
  width: 80px;
  height: 80px;
}
</style>