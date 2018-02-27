<template>
  <div class="goodsdetail">
    <!-- 轮播图 -->
    <div class="slider">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200046589514.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 商品介绍 -->
    <div class="card">
      <div class="card-head"> 华为（HUAWEI）荣耀6Plus 16G双4G版 </div>
      <div class="card-item"> 
        <div class="price">
          <span>市场价: <i class="last">&yen;2499</i></span>
          <span>销售: <i class="now">&yen;2195</i></span>
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
        <p>商品货号：SD9102356032</p>
        <p>库存情况：60件</p>
        <p>上架时间：2015-04-20 00:51:03</p>
      </div>
      <div class="card-item probtns">
        <mt-button type="primary" plain size="large">商品描述</mt-button>
        <mt-button type="danger" plain size="large">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import numberbox from "@/components/numberBox/NumberBox"

export default {
  data() {
    return {
      
    }
  },
  components: {
    numberbox
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