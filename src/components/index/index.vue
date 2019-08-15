<template>
  <div>
    <van-nav-bar title="报告查询" />
    <div>
      <form action="http://dlkcard.zengjunpeng.net/index.php/Home/Pay/pay" method="post">
        <van-cell-group>
          <van-field name="name" required clearable label="姓名" placeholder="请输入姓名" />

          <van-field name="idNo" label="身份证号" placeholder="请输入身份证号码" required />
          <van-field name="phone" label="手机号" placeholder="请输入手机号" required />
          <input type="hidden" name="verId" id="verId" v-model="verId" />
          <input type="hidden" name="  payVer" id="payVer" v-model="payVer" />
        </van-cell-group>
        <van-button
          type="submit"
          round
          size="normal"
          loading-text="提交中"
          style="width:80%; display:block; margin: 0 auto; margin-top:30px; background:#1989fa;   outline: none;   border: none; color:#fff"
        >立即查询</van-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      verId: "",
      payVer: "1"
    };
  },
  created() {
    //   console.log()
    this.verId = this.$route.params.id;

    var wx = (function() {
      return navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1;
    })();
    if (wx) {
      this.payVer = "2";
    } else {
      this.payVer = "1";
    }
  }
};
</script>

<style>
a {
}
</style>
