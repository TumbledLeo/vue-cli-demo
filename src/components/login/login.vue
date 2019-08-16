<template>
  <div>
    <van-cell-group>
      <van-field v-model="formData.userName" required clearable label="用户名" placeholder="请输入用户名" />

      <van-field
        v-model="formData.passWord"
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
        userName: "root",
        passWord: "root"
      }
    };
  },
  methods: {
    sub() {
        
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

      const self = this;
        this.$http.get('https://www.easy-mock.com/mock/5d5522f9e58881382c4cd93c/example/login').then(response=>{
          var res =response.data.data.data,
              len = res.length,
              userNameArr= [],
              passWordArr= [],
              ses= window.sessionStorage; 
          // 拿到所有的username
         
          for(var i=0; i<len; i++){
            userNameArr.push(res[i].username);
            passWordArr.push(res[i].password);
          }
          console.log(userNameArr, passWordArr);
          console.log(userNameArr.indexOf(self.formData.userName));
          if(userNameArr.indexOf(self.formData.userName) === -1){
              alert('账号不存在！');
          }else{
            var index = userNameArr.indexOf(self.formData.userName);
            if(passWordArr[index] === self.formData.passWord){
              // 把token放在sessionStorage中
            //  ses.setItem('data', res[index].token);
         //     self.$parent.$data.userTitle = res[index].usertitle;
              //验证成功进入首页
          //    self.startHacking ('登录成功！');
              //跳转到首页
             this.$router.push('/index')
              // console.log(this.$router);
            }else{
              alert('密码错误！')
            }

          }
        }).catch(err=>{
          console.log('连接数据库失败！')
        })
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
