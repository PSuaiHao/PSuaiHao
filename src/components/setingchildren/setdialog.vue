<template>
  <div>
		<el-dialog :title="title" :visible="dialogFormVisible" :before-close="handleClose">
  <el-form :model="form" ref="forms" :rules="rules">
    <el-form-item label="角色名称" prop="name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="角色描述" :label-width="formLabelWidth">
			<el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="handlefalse">取 消</el-button>
    <el-button type="primary" @click="handleadd">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
import { queryroleadd,queryeditrole } from '@/utils/http'
export default {
	props:['title'],
  data() {
    return {
			dialogFormVisible:true,
			form:{
				id:'',
				name:'',
				description:''
			},
			formLabelWidth:'100px',
      rules:{
				name:[{required:true,message:'请输入角色名称',trigger:'blur'}]
			}
		}
  },
  methods: {
		// 添加
		handleadd(){
			if(this.title=='新增弹层'){
				queryroleadd(this.form).then(res=>{
						console.log(res,'添加角色');
		   	})
				 this.$emit('add')
			}else{

				queryeditrole(this.form).then(res=>{
					console.log(res,'编辑');
				})
				this.$emit('edit')
			}


			this.handleClose()
		},
		// quxiao
		handlefalse(){
			this.handleClose()
		},
		handleClose(){
			this.$emit('close')
		}
	}
}
</script>

<style lang="scss" scoped></style>
