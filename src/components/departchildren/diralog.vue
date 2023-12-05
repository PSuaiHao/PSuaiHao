<template>
  <div>
    <el-dialog :title="title" :visible="dialogFormVisible" :before-close="handleClose">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="部门名称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="1-50个字符"></el-input>
        </el-form-item>

        <el-form-item label="部门编码" prop="code" :label-width="formLabelWidth">
          <el-input v-model="form.code" autocomplete="off" placeholder="1-50个字符"></el-input>
        </el-form-item>

        <el-form-item label="部门负责人" prop="manager" :label-width="formLabelWidth">
          <el-select v-model="form.manager" placeholder="请选择">
            <el-option
              v-for="(item,index) in arr"
              :label="item.username"
              :value="item.username"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="部门介绍" prop="introduce" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.introduce" placeholder="1-300个字符"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handlertrue">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { queryfzr, queryadddep, queryeditdep } from "@/utils/http.js"
export default {
  props: ["pid", "title"],
  data() {
    return {
      dialogFormVisible: true,
      form: {
        code: "",
        introduce: "",
        manager: "",
        name: "",
        pid: "",
        id: ""
      },
      arr: [],
      formLabelWidth: "120px",
      rules: {
        name: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
        manager: [{ required: true, message: "请选择部门负责人", trigger: "change" }],
        code: [{ required: true, message: "请输入部门编码", trigger: "blur" }],
        introduce: [{ required: true, message: "请输入部门介绍", trigger: "blur" }]
      }
    }
  },
  methods: {
    // 确认框
    handlertrue() {
      if (this.title == "添加") {
        queryadddep(this.form).then((res) => {
          console.log(res, "添加成功")
          this.$emit("add")
        })
      } else {
        queryeditdep(
          this.form
          // 	{
          // 	id:this.form.id,
          // 	introduce:this.form.introduce,
          // 	code:this.form.code,
          // 	manager:this.form.manager,
          // 	name:this.form.name,
          // 	pid:this.form.pid
          // }
        ).then((res) => {
          console.log(res, "修改成功")
          this.$emit("edit")
        })
      }

      // this.dialogFormVisible=false
    },
    //
    handleClose() {
      this.$emit("closedialog")
    },
    // 添加框
    getadddep() {}
  },
  created() {
    queryfzr().then((res) => {
      this.arr = res.data
    }),
      (this.form.pid = this.pid)
  }
}
</script>

<style lang="scss" scoped></style>
