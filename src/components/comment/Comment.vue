<template>
  <div class="comment">
    <div class="comment-send">
      <h3 class="tit">发表评论</h3>
      <textarea v-model="commentValue" class="msg" name="" id="" cols="30" rows="5" placeholder="请输入评论内容"></textarea>
      <mt-button type="primary" size="large" @click="sendComment">发表评论</mt-button>
    </div>
    <div class="comment-list" v-if="commentlist.toString() !== ''">
      <ul>
        <li class="item" v-for="(item,index) in commentlist" :key="index">
          <p class="item-title">
            <span class="rank">第{{ index + 1 }}楼</span> 
            <span class="time">发表时间：{{ item.add_time | dateFormat }}</span>
            <span class="uname">{{ item.user_name }}</span>
          </p>
          <div class="item-body">
            <p class="info">{{ item.content }}</p>
            <img class="logo" :src='"../../assets/images/menu" + Math.ceil(Math.random()*6) + ".png"' alt="">
          </div>
        </li>
      </ul>
      <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
  </div>
</template>

<script>
import { host } from "@/common/config"
import axios from "axios"

import dateFormat from "@/filters/dateFormat"

export default {
  data() {
    return {
      commentValue: "",
      pageIndex: 0,
      commentlist: []
    }
  },
  created() {
    this.getMore()
  },
  methods: {
    // 加载更多页
    getMore() {
      this.pageIndex++;
      axios
        .get( `${host}/api/getcomments/${this.newsid}?pageindex=${this.pageIndex}` )
        .then( res => this.commentlist = this.commentlist.concat( res.data.message ) )
    },
    // 发表评论
    sendComment() {
      axios({
        url: `${host}/api/postcomment/${this.newsid}`,
        method: "post",
        data: `content=${this.commentValue}`
      }).then(info=>{
        if( info.status === 200 ) {
          this.pageIndex = 0;
          this.commentlist = [];
          this.commentValue = "";
          this.getMore();
        }
      })
    }
  },
  filters: {
    dateFormat
  },
  props: [ "newsid" ]
}
</script>

<style scoped lang="less">
.comment {
  .comment-send {
    .tit {
      line-height: 40px;
      border-bottom: 2px solid #BCBCBC;
      font-weight: bold;
    }
    .msg {
      width: 100%;
      border: 1px solid #E4E4E4;
      border-radius: 5px;
      font-size: 16px;
      line-height: 25px;
      padding: 5px;
      margin: 10px 0;
    }
  }

  .comment-list {
    color: #959599;
    font-size: 14px;
    padding: 10px;
    .item {
      border-bottom: 1px solid #E7E7E9;
      padding: 10px 0;
      &:last-child {
        border: none;
      }
    }
    .item-title {
      .uname {
        float: right;
      }
    }
    .item-body {
      display: flex;
      .info {
        flex: 1;
        padding: 10px 10px 0 0;
      }
      .logo {
        width: 50px;
        height: 50px;
        margin: 10px 0;
      }
    }
  }
}
</style>