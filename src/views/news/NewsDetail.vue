<template>
  <div class="news-container" v-if="detail">
    <div class="news-title">
      <h3 class="tit">{{ detail.title }}</h3>
      <p class="info">
        <span class="time">发表时间:{{ detail.add_time | dateFormat }}</span>
        <span class="click">点击: {{ detail.click }}次</span>
      </p>
    </div>
    <div class="news-content" v-html="detail.content"></div>
  </div>
</template>

<script>
import { host } from "@/common/config"
import axios from "axios"

import dateFormat from "@/filters/dateFormat"
console.log( dateFormat )

export default {
  data() {
    return {
      newsid: 13,
      detail: null
    }
  },
  created() {
    this.newsid = this.$route.params.id || 13
    axios.get( `${host}/api/getnew/${this.newsid}` ).then( res => {
      this.detail = res.data.message[0]
      console.log( this.detail )
    })
  },
  filters: {
    dateFormat
  }
}
</script>

<style lang="less">
.news-container {
  padding: 10px;
}

.news-title {
  border-bottom: 2px solid #ccc;

  .tit {
    font-size: 18px;
  }

  .info {
    padding: 8px 0;
    color: #8F8F93;
    font-size: 14px;
    overflow: hidden;

    .time {
      float: left;
    }
    .click {
      float: right;
    }
  }
}

.news-content {
  padding: 10px 0;
  font-size: 14px;
  color: #9A9A9E;
  line-height: 25px;

  p {
    margin-bottom: 5px; 
  }

  img {
    width: 100%;
  }
}

</style>