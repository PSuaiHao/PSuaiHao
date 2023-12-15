<template>
	<div>
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
	</div>
</template>

<script>
export default {
 data() {
	 return {
		rolelist:[]
	 };
 },
 methods: {
	handlefenpei(id){
		this.$emit('handlefenpei',id)
	},
	handleEdit(id){
		this.$emit('handleEdit',id)
	},
	handleDelete(id){
		this.$confirm("确定删除该角色吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
					this.$emit('handleDelete',id)
          this.$message({
            type: "success",
            message: "删除成功!"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
	}

 },
};
</script>

<style lang="scss" scoped>

</style>