// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 整体导入 mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use( MintUI )


import moment from "moment"

Vue.filter("dateFormater", (value, str) => {
  return moment( value ).format( str || "YYYY-MM-DD HH:mm:SS");
})


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
