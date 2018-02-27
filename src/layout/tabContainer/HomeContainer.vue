<template>
  <div class="container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <ul class="nav">
      <li>
        <router-link to="/home/newslist">
          <img src="../../assets/images/menu1.png" alt="">
          <p>新闻资讯</p>
        </router-link>
      </li>
      <li>
        <router-link to="/home/picShare">
          <img src="../../assets/images/menu2.png" alt="">
          <p>图片分享</p>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../../assets/images/menu3.png" alt="">
          <p>商品购买</p>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../../assets/images/menu4.png" alt="">
          <p>留言反馈</p>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../../assets/images/menu5.png" alt="">
          <p>视频专区</p>
        </router-link>
      </li>
      <li>
        <router-link to="">
          <img src="../../assets/images/menu6.png" alt="">
          <p>联系我们</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import { host } from "@/common/config"

export default {
  data() {
    return {
      imgList: []
    }
  },
  created() {
    axios.get( `${host}/api/getlunbo` ).then( res => {
      if ( res.status === 200 ) {
        this.imgList = res.data.message
      }
    })
  }
}
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}


.nav {
  display: flex;
  flex-wrap: wrap;

  li {
    width: 33%;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 10px;
    }

    img {
      width: 64%;
    }
    p {
      padding: 4px 0;
    }
  }
}
</style>