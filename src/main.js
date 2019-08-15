// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import axios from 'axios'


import Vant from 'vant';
import qs from 'qs';

import 'vant/lib/index.css';

Vue.use(Vant);
// Vue.use(axios);
Vue.prototype.$qs = qs;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = (process.env.NODE_ENV == 'development' ? 'http://www.baidu.com' : 'http://www.baidu.com') //(根据开发环境和生产环境使用不同的请求地址)
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.create({
  // 创建实例时设置配置的默认值
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }]
})

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,

  },
  template: '<App/>'
})
