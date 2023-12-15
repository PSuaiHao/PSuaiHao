<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
	data(){
		return {

		}
	},
	methods:{
		...mapMutations('theme',['changeThemeColor']),
		changeThemeColor(){

		},
	},
	computed:{
		...mapState('theme',['themeColor']),
	},
	watch:{
		themeColor(val){
			document.getElementById('list').style.setProperty('fashe',val)
			console.log(val,'22222222222222222222222211111');
		}
	}
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  color: inherit; /* 继承父元素的颜色 */
  text-decoration: none; /* 去除下划线 */
}

#app {
  --themeColor: #008cff;
}
.z-header-container {
  width: 100%;
  height: 66px;
  //background: #fff;
  text-align: center;
  background: var(--themeColor);
}
</style>
