<template>
  <div>
    <van-cell-group>
      <van-field v-model="formData.username" required clearable label="手机号" placeholder="请输入手机号" />

      <van-field v-model="formData.picCode" label="图形验证码" placeholder="请输入图形验证码" required />
      <img
        id="picCode"
        src="http://www.test.com/index.php/Home/User/verify"
        onclick="this.src='http://www.test.com/index.php/Home/User/verify/'+Math.random()"
        alt
      />
      <van-cell-group>
        <van-field
          v-model="formData.yzmcode"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          required
        >
          <van-button
            slot="button"
            v-show="Verification"
            size="small"
            type="primary"
            @click="getYzmcode()"
          >发送验证码</van-button>
          <van-button
            slot="button"
            v-show="!Verification"
            size="small"
            type="primary"
            @click="getYzmcode()"
            :disabled="isDisabl"
          >
            <span>{{timer}}</span>秒后重新获取
          </van-button>
        </van-field>
      </van-cell-group>
      <van-field
        v-model="formData.userpwd"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button
      type="info"
      round
      @click="sub()"
      size="normal"
      loading-text="提交中"
      style="width:80%; display:block; margin: 0 auto; margin-top:30px"
    >注 册</van-button>

    <router-link class="loginbtn" to="/login">登录</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        picCode: "",
        yzmcode: "",
        userpwd: ""
      },
      Verification: true,
      timer: 60,
      isDisabl: false
    };
  },
  methods: {
    getYzmcode() {
      console.log(this.formData.username);

      this.$http({
        method: "post",
        url: "User/getYzmcode",
        data: this.$qs.stringify(this.formData)
      }).then(res => {
        const { code, msg } = res.data;

        if (code == 200) {
          this.$toast.success(msg);
          this.isDisabl = true;
          this.Verification = false; //点击button改变v-show的状态
          let auth_timer = setInterval(() => {
            //定时器设置每秒递减
            this.timer--; //递减时间
            if (this.timer <= 0) {
              this.Verification = true; //60s时间结束还原v-show状态并清除定时器
              clearInterval(auth_timer);
              this.timer = 60;
              this.isDisabl = false;
            }
          }, 1000);
        } else {
          this.$toast.fail(msg);
        }
      });
    },
    // 注册
    sub() {
      this.$http({
        method: "post",
        url: "User/register",
        data: this.$qs.stringify(this.formData)
      }).then(res => {
        const { code, msg } = res.data;

        if (code == 200) {
          this.$toast.success(msg);
          this.$router.push({ name: "login" });
        } else {
          this.$toast.fail(msg);
        }
      });
    }
  }
};
</script>

<style>
#picCode {
  position: absolute;
  top: 3em;
  right: 1em;
  z-index: 999;
  height: 2.2em;
}

.loginbtn {
  width: 80%;
  text-align: center;
  display: block;
  margin: 0 auto;
  line-height: 3rem;
  border: 1px solid #eee;
  margin-top: 1rem;
  border-radius: 50px;
}
</style>
