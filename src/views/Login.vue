<template>
  <div class="login">
    <div class="box">
      <h1>IHRM后台登录系统</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="mobile">
          <el-input v-model="ruleForm.mobile"> <svg-icon slot="prefix" icon-class="yonghu" /></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" show-password><svg-icon slot="prefix" icon-class="mima" /></el-input>
        </el-form-item>

        <el-form-item>
          <div class="dl">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { setToken } from "@/utils/auch"
import { querylogin } from "@/utils/http"
export default {
  data() {
    return {
      ruleForm: {
        mobile: "13800000002",
        password: "hm#qd@23!"
      },
      rules: {
        mobile: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        password: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          querylogin(this.ruleForm).then((res) => {
            console.log(res)
            if (res.code === 10000) {
              this.$message({
                message: res.message,
                type: "success"
              })
              setToken(res.data)
              this.$router.push("/")
            }
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #6ba4fe;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    width: 30%;
    h1 {
      margin-bottom: 20px;
    }
    .el-button {
      display: block;
      width: 100%;
      background-color: #407ffe;
    }
  }
}
</style>
