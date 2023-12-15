<template>
  <div>
    <div class="top hzyy">
      <img src="../../assets/微信图片_20220922141811.gif" alt="" />
      <div class="right">
        <h3>早安，{{username}}，祝你开心每一天!</h3>
        <p>{{ userInfo.username }} | {{ userInfo.company }} - {{ userInfo.departmentName }}</p>
      </div>
    </div>
    <div class="bottom">
      <div class="bt-left">
        <div class="left-top hzyy">
          <p class="h3 p gg">工作日历</p>
          <calendar></calendar>
        </div>
        <!-- 公告 -->
        <div class="left-bot hzyy">
          <h3 class="h3">公告</h3>
          <ul>
            <li>
              <div class="o">
                <img src="../../assets/Snipaste_2023-12-03_21-50-44.png" alt="" />
                <span>朱继柳</span>
                发布了第1期"传智大讲堂"互动讨论获奖名单公布
              </div>
              <div class="t">2018-07-21 15:21:38</div>
            </li>
            <li>
              <div class="o">
                <img src="../../assets/Snipaste_2023-12-03_21-50-44.png" alt="" />
                <span>朱继柳</span>
                发布了第1期"传智大讲堂"互动讨论获奖名单公布
              </div>
              <div class="t">2018-07-21 15:21:38</div>
            </li>
            <li>
              <div class="o">
                <img src="../../assets/Snipaste_2023-12-03_21-50-44.png" alt="" />
                <span>朱继柳</span>
                发布了第1期"传智大讲堂"互动讨论获奖名单公布
              </div>
              <div class="t">2018-07-21 15:21:38</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bt-right">
        <!-- 申请流程 -->
        <div class="right-top hzyy">
          <span>流程申请</span>
          <div class="nav">
            <div>加班离职</div>
            <div>请假调休</div>
            <div>审批列表</div>
            <div>我的信息</div>
          </div>
        </div>
        <!-- 绩效指数 -->
        <div class="right-middle hzyy">
          <p class="h3 p">绩效指数</p>
          <radar></radar>
        </div>
        <!-- 帮助链接 -->
        <div class="right-bot hzyy">
          <span>帮助链接</span>
          <div class="bott">
            <img src="../../assets/common/icon.png" alt="" />
          </div>

          <div class="uname">
            <div class="name">入门指南</div>
            <div class="name">在线帮助手册</div>
            <div class="name">联系技术支持</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import calendar from "@/components/calendar.vue"
import radar from "@/components/radar.vue"
import { mapActions, mapGetters } from "vuex"
import depart from '@/style/depart.css'
export default {
  data() {
    return {
      calendart: new Date()
    }
  },
  methods: {
		...mapActions("users", ["getUserInfo"])
	},
	computed:{
		...mapGetters(["username", "staffPhoto", "userInfo"])
	},
  created() {
		this.getUserInfo()
	},
  components: { calendar, radar }
}
</script>
<style lang="scss" scoped>

</style>
