<template>
  <div>
    <el-dialog title="分配角色" :visible="dialogFormVisible" :before-close="handleClose">
      <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="(item, index) in rolelist" :label="item.id">{{ item.name }}</el-checkbox>
      </el-checkbox-group>

      <div slot="footer" class="dialog-footer">
        <el-button @click="handlefalse">取 消</el-button>
        <el-button type="primary" @click="handletrue">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { queryrole, queryfenpei,queryemplgr } from "@/utils/http"
export default {
  data() {
    return {
      dialogFormVisible: true,
      rolelist: [],
      form: {
        pagesize: 10,
        page: 1
      },
      checkList: [],
      id: ""
    }
  },
  methods: {
    getperml(){
      queryemplgr(this.id).then((res) => {
				if(res.data.roleIds!=null){
					this.checkList = res.data.roleIds
				}

        console.log(res.data.roleIds, "444444444")
      })
    },
    // 确定弹窗
    handletrue() {
      if(this.checkList.length != null){
      	queryfenpei({id:this.id,roleIds:this.checkList}).then(res=>{
          this.$emit('colse')
      	console.log(res,'分配');
      })

      }
    },
    // 关闭弹窗
    handleClose() {
      this.$emit("colse")
    },
    // 取消
    handlefalse(){
      this.$emit("colse")
    },
    // 获取角色
    setrole() {
      queryrole(this.form).then((res) => {
        this.rolelist = res.data.rows
        console.log(res, "角色")
      })
    }
  },
  created() {
    this.setrole()
  },
  mounted() {
    this.$nextTick(() => {
			console.log(this.id,'999999999999');
      this.getperml()
    })
  }
}
</script>

<style lang="scss" scoped></style>
