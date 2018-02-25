<template>
  <div>
    <ul class="newslist">
      <li class="item" v-for="(item, index) in listArr" :key="index">
        <router-link :to="'/home/newsDetail/' + item.id">
          <div class="showImg">
            <img :src="item.img_url" width="24" height="24" alt="">
          </div>
          <div class="info">
            <div class="info-tit">
              {{ item.title }}
            </div>
            <div class="info-more">
              <span class="time">{{ item.add_time | dateFormat }}</span>
              <span class="click"><i class="iconfont icon-comments"></i> {{ item.click }}</span>
            </div>
          </div>
          <div class="right-icon">
            <span class="iconfont icon-more"></span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import { host } from "@/common/config"
import dateFormat from "@/filters/dateFormat"

export default {
  data() {
    return {
      listArr: []
    }
  },
  created() {
    // 发送请求, 请求数据
    axios.get( `${host}/api/getnewslist` ).then( res => {
      this.listArr = res.data.message
    })
  },
  filters: {
    dateFormat
  }
}
</script>

<style lang="less">

.newslist {
  display: flex;
  flex-direction: column;

  .item {
    height: 80px;
    border-bottom: 1px solid #E3E3E5;
    > a {
      display: flex;
      width: 100%;
      height: 100%;
    }

    .showImg {
      height: 80px;
      flex-basis: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
    }

    .info {
      flex: 1;
      overflow: hidden;
      padding-top: 10px;
      line-height: 30px;

      .info-tit {
        width: 100%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 16px;
        color: #000000;
      }

      .info-more {
        font-size: 14px;
        color: #8F8F93;
        overflow: hidden;

        .time {
          float: left;
        }

        .click {
          float: right;
        }
      }

    }

    .right-icon {
      flex-basis: 60px;
      height: 80px;
      font-size: 30px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }


  }
}
</style>