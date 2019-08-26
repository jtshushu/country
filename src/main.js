// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/lazy'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import Viser from 'viser-vue'
import axios from 'axios'
//import './public/polyfill.min.js'
//自定义图标
import './assets/iconfont/iconfont.css'

Vue.prototype.$axios = axios
Vue.prototype.HOST = '/sosoapi';//跨域请求地址，在config下index.js里面设置
Vue.prototype.url = 'http://www.baidu.com/';// 服务器配置接口地址
Vue.prototype.timeout='5000';//请求超时时间
Vue.config.productionTip = false
Vue.use(Viser)
Vue.use(Antd)
//公用方法
import utils from './utils/utils.js';
Vue.prototype.utils = utils;
//地区插件
import province from './plugin/Index.js';
Vue.use(province);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  components: { App },
  template: '<App/>',   
})
//点击跳转页面时，让页面出现在顶部
router.beforeEach((to, from, next) => {    
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})
