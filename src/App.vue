<template>
  <div id="app">
    <mt-header fixed title="黑马程序员-CMS管理系统"></mt-header>
    <router-view/>
    
    <div class="ms-footer">
      <ul @click="navClick">
        <li>
          <router-link to="/home">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="selactive==='home'?'#icon-home':'#icon-home-normal'"></use>
            </svg>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/member" >
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="selactive==='member'?'#icon-member':'#icon-member-normal'"></use>
            </svg>
            <p>会员</p>
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="selactive==='cart'?'#icon-cart':'#icon-cart-normal'"></use>
            </svg>
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link to="/search">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="selactive==='search'?'#icon-search':'#icon-search-normal'"></use>
            </svg>
            <p>搜索</p>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      selactive: "home"
    }
  },
  created() {
    this.selactive = this.$route.name
  },
  methods: {
    navClick() {
      this.selactive = this.$route.name
    }
  }
};
</script>



<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: #666;
}

.container {
  margin-top: 40px;
}

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.ms-footer{
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color:#F7F7F7;

  ul {
    display: flex;
    width: 100%;
    height: 100%;

    li {
      flex: 1;
    }
    
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      color: #666;
      font-size: 14px;
      &.router-link-active {
        color: red;
      }

      svg {
        font-size: 25px;
      }
    }
  }
}

</style>
