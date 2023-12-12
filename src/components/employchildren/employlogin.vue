<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
			<el-form-item label="新密码" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
			<el-form-item label="">
    <el-button type="primary" @click="submitForm('ruleForm')">更新</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { querybcygxx } from '../../utils/http';
export default {
  data() {
    return {
			ruleForm:{
				username:'',
				password:'',
				id:''
			},
			rules:{
				username:[{required:true,message:'姓名不能为空',trigger:'blur'}],
				password:[{required:true,message:'新密码不能为空',trigger:'blur'}],
			}
		}
  },
  methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
          if (valid) {
						querybcygxx(this.ruleForm).then(res=>{
					  console.log(res);
				})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
			setygxx(){

			}
	},
	created(){

	}
}
</script>

<style lang="scss" scoped>
.demo-ruleForm{
  width: 50%;
	margin-left: 150px;
	margin-top: 50px;
}
</style>
