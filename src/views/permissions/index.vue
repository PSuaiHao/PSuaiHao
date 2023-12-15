<template>
  <div>
    <div class="top hzyy">
      <el-button type="primary" @click="handleClick">添加权限</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      border
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column align="center" prop="name" label="名称" width="220"> </el-table-column>
      <el-table-column align="center" prop="code" label="标识" width="220"> </el-table-column>
      <el-table-column align="center"  prop="description" label="描述" width="220"> </el-table-column>
      <el-table-column align="center" label="操作" width="220">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small" v-if="scope.row.pid=='0'">添加</el-button>
          <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button @click="handledelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

		<!-- 对话框 -->
		<permdialog  v-if="truedialog" ref="permdialog"  @closedialog="closedialog" :title="title" :pid="pid" @add="add"></permdialog>
  </div>
</template>

<script>
import {queryperm,querydel,queryhuitian} from '../../utils/http';
import permdialog from '../../components/permchildren/permdialog.vue'
export default {
  data() {
    return {
			truedialog:false,
      tableData: [],
			pid:'',
			title:'添加权限'
    }
  },
	components:{permdialog},
  methods: {
		// 添加按钮
		handleClick( row){
			console.log(row);
			this.title='添加权限'
			this.pid=row.id
			this.truedialog=true
		},
		// 回填
		handleEdit(row){
        //  console.log(row);
				 this.truedialog=true
				 this.title='修改权限'
				 this.$nextTick(()=>{
					queryhuitian(row.id).then(res=>{
						console.log(res);
						this.$refs.permdialog.form=res.data
					})

				 })
		},
		// 删除
		handledelete(row){
			querydel(row.id).then(res=>{
				console.log(res);
				this.getperm()
			})
		},
		// 关闭弹窗
		closedialog(){
			this.truedialog=false
		},
		// 关闭弹窗  刷新页面
		add(){
			this.truedialog=false
			this.getperm()
		},
		// 获取接口
		getperm(){
			queryperm().then(res=>{
				this.tableData=this.getdepart(res.data,"0")
			})
		},
		// 递归
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
      // console.log(arr,'arr');
      return arr
    }
	},
	created(){
		this.getperm()
	}
}
</script>
<style lang="scss" scoped>
.top {
  text-align: right;
}
.el-table{
	margin-top: 20px;
}

</style>
