<template>
  <div id="app">
    <mt-header fixed title="黑马程序员-CMS管理系统">
      <mt-button slot="left" @click="$router.go(-1)" v-if="$route.path != '/home'" icon="back">返回</mt-button>
      <!-- 组件定义的插槽, right 是对应 slot 的 name  -->
      <mt-button slot="right" icon="more" ></mt-button>
    </mt-header>
    <router-view/>    
    <ms-footer></ms-footer>
  </div>
</template>

<script>
import MsFooter from "@/layout/msFooter/MsFooter"

export default {
  name: "App",
  data() {
    return {

    }
  },
  components: {
    "ms-footer": MsFooter
  }
}
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #666;
}
html, body {
  width: 100%;
  height: 100%;
}

#app {
  padding-top: 40px;
  padding-bottom: 60px;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
