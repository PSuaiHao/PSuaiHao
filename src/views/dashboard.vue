<template>
  <div>
    <div class="top hzyy">
      <img src="../assets/微信图片_20220922141811.gif" alt="" />
      <div class="right">
        <h3>早安，管理员，祝你开心每一天!</h3>
        <p>{{ username }} | {{ company }}</p>
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
                <img src="../assets/Snipaste_2023-12-03_21-50-44.png" alt="" />
                <span>朱继柳</span>
                发布了第1期"传智大讲堂"互动讨论获奖名单公布
              </div>
              <div class="t">2018-07-21 15:21:38</div>
            </li>
            <li>
              <div class="o">
                <img src="../assets/Snipaste_2023-12-03_21-50-44.png" alt="" />
                <span>朱继柳</span>
                发布了第1期"传智大讲堂"互动讨论获奖名单公布
              </div>
              <div class="t">2018-07-21 15:21:38</div>
            </li>
            <li>
              <div class="o">
                <img src="../assets/Snipaste_2023-12-03_21-50-44.png" alt="" />
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
            <img src="../assets/Snipaste_2023-12-03_21-50-44.png" alt="" />
            <img src="../assets/Snipaste_2023-12-03_21-50-44.png" alt="" />
            <img src="../assets/Snipaste_2023-12-03_21-50-44.png" alt="" />
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
export default {
  data() {
    return {
      username: localStorage.getItem("username") || "",
      company: localStorage.getItem("company") || "",
      calendart: new Date()
    }
  },
  methods: {},
  created() {},
  components: { calendar, radar }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    margin-top: 8px;
  }
}
.bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .bt-left,
  .bt-right {
    width: 49%;
  }
  .bt-left {
    .gg {
      margin-bottom: 15px;
    }
    .left-bot {
      margin-top: 15px;
      width: 100%;

      ul {
        padding: 15px;
        li {
          width: 100%;
          border-bottom: 1px solid #ccc;
          img {
            vertical-align: middle;
          }
          .t {
            padding-left: 70px;
          }
        }
      }
    }
  }
  .bt-right {
    .right-middle > h3 {
      margin: 10px;
    }
    span {
      font-size: 26px;
      border-bottom: 5px solid #8a97f8;
      padding-bottom: 15px;
    }
    .right-top {
      margin-bottom: 15px;
      .nav {
        margin-top: 30px;
        width: 100%;
        display: flex;
        div {
          margin-right: 10px;
          border: 1px solid #ccc;
          padding: 10px 20px;
          border-radius: 3px;
        }
        div:hover {
          margin-right: 10px;
          padding: 10px 20px;
          border-radius: 3px;
          border: 1px solid #c6e2ff;
          background-color: #ecf5ff;
          color: #0095ff;
        }
      }
    }

    .right-bot {
      margin-top: 20px;
      img {
        margin-top: 15px;
        margin-left: 80px;
      }
      .uname {
        width: 89%;
        margin-top: 15px;
        margin-left: 80px;
        display: flex;
        justify-content: space-between;
        .name {
          margin-right: 100px;
        }
      }
    }
  }
}
</style>
