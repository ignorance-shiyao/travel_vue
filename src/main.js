// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // ES6 中如果键和值相同可以省略一部分内容  如 router: router 可以写作router
  router,
  components: {App},
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容给用户
