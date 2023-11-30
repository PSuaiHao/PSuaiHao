<template>
	<div>

	</div>
</template>

<script>
import axios from 'axios'
export default {
 data() {
	 return {};
 },
 methods: {},
 created(){
	axios
      .post(process.env.VUE_APP_IDENT + "/sys/login", {
        mobile: "17764049967",
        password: 123456
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

 }
};
</script>

<style lang="scss" scoped>

</style>
