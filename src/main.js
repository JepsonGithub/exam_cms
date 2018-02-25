// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 整体导入 mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use( MintUI )

// ------------- 引入mint-ui ----------------
// 引入部分, 可以减小包体积, 但是 css 还是要单独导入的
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
Vue.component("mt-header", Header);

// ------------ 引入 字体图标 -------------
import "./assets/iconfonts/iconfont"
import "./assets/iconfonts/iconfont.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
