<template>
	<div>
		<el-dialog
  title="提示"
  :visible="dialogVisible"
  width="30%"
  :before-close="handleClose">

	<el-tree
      ref="mytree"
       :data="data"
       show-checkbox
       node-key="id"
       :default-expand-all="true"
			 :props="defaultProps"
			 :default-checked-keys="checkeddata"
       @check="onNodeCheck">
      </el-tree>
  <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose">取 消</el-button>
    <el-button type="primary" @click="handleadd">确 定</el-button>
  </span>
</el-dialog>
	</div>
</template>

<script>
import {queryperm,queryroleht,queryrolesqx} from '@/utils/http'
export default {
	props:['id'],
 data() {
	 return {
		dialogVisible:true,
		data:[],
		checkeddata:[],
		defaultProps: {
          label: 'name',
        },
	 };
 },
 methods: {
	//
	onNodeCheck(ii){
	},
	handleadd(){
		queryrolesqx({id:this.id,permIds:this.$refs.mytree.getCheckedKeys()}).then(res=>{
   console.log(res,'xxxxxxxxx');
  })
	this.handleClose()
	},

	// 关闭弹窗
	handleClose(){
		this.$emit('close1')
	},
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
 mounted(){
	this.$nextTick(() => {
        queryroleht(this.id).then((res) => {
						this.checkeddata = res.data.permIds
        })
      })
 },
 created(){
	queryperm().then(res=>{
		this.data=this.getdepart(res.data,'0')
		console.log(this.data);
		})
 }
};
</script>

<style lang="scss" scoped>

</style>