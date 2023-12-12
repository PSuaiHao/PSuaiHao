<template>
  <div>
    <el-alert
      title="对公司名称、公司地址、营业执照、公司地址的更新，将使得公司资料被重新审核，请谨慎修改"
      type="info"
      show-icon
      :closable="false"
    >
    </el-alert>

    <el-form :model="form" label-width="150px" disabled>
      <el-form-item label="公司名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="公司地址">
        <el-input v-model="form.companyAddress"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.mailbox"></el-input>
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.remarks"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { querygsxx } from "@/utils/http"
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    getgsxx() {
      querygsxx().then((res) => {
        this.form = res.data[0]
        console.log(res, "公司")
      })
    }
  },
  created() {
    this.getgsxx()
  }
}
</script>

<style lang="scss" scoped>
.el-form{
	width: 60%;
	margin: 20px 30px;
}
</style>
