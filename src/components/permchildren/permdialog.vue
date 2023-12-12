<template>
  <div>
    <el-dialog :title="title" :visible="dialogFormVisible" @close="handleClose">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="权限名称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="权限标识" prop="code" :label-width="formLabelWidth">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="权限描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="开启" :label-width="formLabelWidth">
          <el-switch v-model="form.type" active-value="0" inactive-value="1"> </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleadd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {querypermadd,queryeditperm} from '../../utils/http'
export default {
	props:['pid','title'],
  data() {
    return {
			dialogFormVisible:true,
			form:{
				pid:'',
				description:'',
				name:'',
				code:'',
				id:''
			},
			formLabelWidth: '120px',
			rules:{
				name:[{required:true, message: '权限名称不能为空', trigger: 'blur' }],
				code:[{required:true, message: '权限名称不能为空', trigger: 'blur' }],
			}
		}
  },
  methods: {
		// 关闭弹窗
		handleClose(){
			this.$emit('closedialog')
		},
		// 添加权限
		handleadd(){
			if(this.title=='添加权限'){
				querypermadd(this.form).then(res=>{
				console.log(res);
				this.$emit('add')
			})
			}else{
				queryeditperm(this.form).then(res=>{
					console.log(res);
					this.$emit('add')
				})
			}


		}
	},
	created(){
		this.form.pid=this.pid
	}
}
</script>

<style lang="scss" scoped></style>
