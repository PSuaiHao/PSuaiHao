<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="登录账户设置" name="first">
        <employlogin ref="employlogin"></employlogin>
      </el-tab-pane>
      <el-tab-pane label="个人详情" name="second">
        <gerenxq ref="gerenxq"></gerenxq>
      </el-tab-pane>
      <el-tab-pane label="岗位信息" name="third">
				<ganweixinxi ref="ganweixinxi"></ganweixinxi>
			</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import employlogin from "../../components/employchildren/employlogin.vue"
import gerenxq from "../../components/employchildren/gerenxq.vue"
import ganweixinxi from "@/components/employchildren/ganweixinxi.vue"
import { queryemplgr } from "../../utils/http"
export default {
  data() {
    return {
      activeName: "first",
      id: this.$route.query.id
    }
  },
  components: { employlogin, gerenxq,ganweixinxi },
  methods: {
    getemplgr() {
      queryemplgr(this.$route.query.id).then((res) => {
        console.log(res,'个人');
        this.$refs.employlogin.ruleForm = res.data
      })
    },

  },
  created() {
    this.getemplgr()
  },
  mounted() {
    this.$refs.gerenxq.id = this.id
    this.$refs.ganweixinxi.id = this.id
  }
}
</script>

<style lang="scss" scoped></style>
