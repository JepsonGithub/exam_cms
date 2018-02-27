<template>
  <div>
    <ul class="goodslist">
      <li class="item" v-for="(item,index) in goodsList" :key="index">
        <router-link :to="'/home/goodsDetail/' + item.id ">
          <img :src="item.img_url" alt="">
          <h4>{{ item.title }}</h4>
          <div class="info">
            <span class="price">¥{{ item.sell_price }}</span>
            <span class="oldprice">¥{{ item.market_price }}</span>
            <span class="last">剩 {{ item.stock_quantity }}件</span>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="btnmore" v-if="ifmore">
      <mt-button  @click="getMore" class="more" type="danger" size="large" plain>加载更多内容</mt-button>
    </div>
  </div>
</template>

<script>

import axios from "axios"
import { Toast } from 'mint-ui';
import { host } from "@/common/config"

export default {
  data() {
    return {
      pageindex: 1,
      goodsList: [],
      ifmore: true
    };
  },
  // 结构还没有渲染, 发送 ajax 请求
  created() {
    // 一进页面请求到第一页的数据, 渲染到页面中
    this.getGoods(1).then( res => {
      console.log( res )
      this.goodsList = res.data.message;
    })
  },
  methods: {
    // 加载更多的商品数据
    getMore() {
      // 没有更多啥也不用做
      if ( !this.ifmore ) return

      this.getGoods( this.pageindex++ ).then( res => {
        // 如果有数据, 按钮就显示, 没有数据, 加载更多按钮就消失
        if ( res.data.message && res.data.message.length === 0 ) {
          this.goodList = this.goodsList.concat( res.data.message )
        } else {
          this.ifmore = false;
          Toast( "没有更多商品数据了哦" )
        }
      })
    },
    // 请求对应 pageindex 的数据
    getGoods( pageindex ) {
      return axios({
        url: `${host}/api/getgoods?pageindex=${this.pageindex}`,
      })
    }
  }
};
</script>

<style lang="less">
.goodslist {
  display: flex;
  flex-wrap: wrap;

  .item {
    width: 50%;
    padding: 5px;

    a {
      display: block;
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 14px;
    }

    img {
      display: block;
      width: 90%;
      margin: 0 auto;
      min-height: 150px;
    }

    h4 {
      height: 60px;
      overflow: hidden;
      line-height: 20px;
      padding: 0 10px;
    }

    .info {
      padding: 10px;
      background-color: #EEEEEE;
      line-height: 30px;

      .price {
        font-size: 16px;
        color: #EB3C2D;
      }

      .oldprice {
        color: #A3A3A6;
        text-decoration: line-through;
      }

      .last {
        float: right;
      }

    }
  }
}

.btnmore {
  padding: 10px;
}


</style>