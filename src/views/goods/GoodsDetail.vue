<template>
  <div class="goodsdetail">
    <!-- 轮播图 -->
    <div class="slider">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in picList" :key="index">
          <img :src="item.src" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 商品介绍 -->
    <div class="card">
      <div class="card-head"> {{ info.title }} </div>
      <div class="card-item"> 
        <div class="price">
          <span>市场价: <i class="last">&yen;{{ info.market_price }}</i></span>
          <span>销售: <i class="now">&yen;{{ info.sell_price }}</i></span>
        </div>
        <div class="num">
          购买数量: 
          <numberbox></numberbox>
        </div>
        <div class="btns">
          <mt-button type="primary" class="buy">立即购买</mt-button>
          <mt-button type="danger" class="addcart">加入购物车</mt-button>
        </div>
      </div>
    </div>

    <div class="card pro">
      <div class="card-head"> 商品参数 </div>
      <div class="card-item proinfo"> 
        <p>商品货号：{{ info.goods_no }}</p>
        <p>库存情况：{{ info.stock_quantity }}件</p>
        <p>上架时间：{{ info.add_time | dateFormat }}</p>
      </div>
      <div class="card-item probtns">
        <mt-button type="primary" plain size="large">商品描述</mt-button>
        <mt-button @click="$router.push({ path: '/home/goodsComment/' + $route.params.goodsid })" type="danger" plain size="large">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { host } from "@/common/config"
import numberbox from "@/components/numberBox/NumberBox"
import dateFormat from "@/filters/dateFormat"

export default {
  data() {
    return {
      picList: [],
      info: {}
    }
  },
  created() {
    // 请求 banner 图片
    axios
      .get(`${host}/api/getthumimages/${this.$route.params.goodsid}`)
      .then( res => {
        this.picList = res.data.message
      })
    // 请求商品参数
    axios
      .get(`${host}/api/goods/getinfo/${this.$route.params.goodsid}`)
      .then( res => {
        console.log( res ) 
        this.info = res.data.message[ 0 ]
      })
  },
  components: {
    numberbox
  },
  filters: {
    dateFormat
  }
}
</script>

<style scoped lang="less">

.goodsdetail {
  padding: 10px;
}
.mint-swipe {
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  img {
    height: 100%;
    display: block;
    margin: 0 auto;
  }
}

.card {
  margin: 10px 0;
  min-height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-bottom: 10px;

  .card-head {
    padding: 0 10px;
    height: 44px;
    line-height: 44px;;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
  }

  .card-item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    line-height: 20px;

    &:last-child {
      border: none;
    }

    .price {
      padding: 10px 0;
      .last {
        text-decoration: line-through;
        margin-right: 5px;
      }
      .now {
        font-style: normal;
        color: red;
        font-size: 16px;
      }
    }

    .num {
      line-height: 30px;
    }

    .btns {
      margin-top: 10px;
    }
  }
}

.pro {
  .proinfo{
    font-size: 14px;
    color: #919195;
    line-height: 30px;
  }

  .probtns {
    button {
      margin-top: 10px;
    }
  }
}

</style>