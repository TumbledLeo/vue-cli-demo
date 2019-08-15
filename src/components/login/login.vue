<template>
  <div>
    <van-cell-group>
      <van-field v-model="formData.username" required clearable label="用户名" placeholder="请输入用户名" />

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
    >登 录</van-button>
    <router-link class="registerbtn" to="/register">注册</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "admin",
        userpwd: "admin"
      }
    };
  },
  methods: {
    sub() {
        this.$router.push({ name: "inde", params: { id: 1 } })
      // var formData=this.formData
     /*  this.$http({
        method: "post",
        url: "Public/CheckLogin",
        // qs.stringify()将对象 序列化成URL的形式，以&进行拼接
        data: this.$qs.stringify(this.formData)
      }).then(res => {
        console.log(res);
        const { code, msg, userId } = res.data;
        if (code == 200) {
          this.$toast.success(msg);
          this.$router.push({ name: "inde", params: { id: 1 } });
          sessionStorage.setItem("userId", userId);
        } else {
          this.$toast.fail(msg);
        }
      }); */
    }
  }
};
</script>

<style>
.registerbtn {
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
