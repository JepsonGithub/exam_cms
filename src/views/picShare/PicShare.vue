<template>
  <div class="'picshare'">
    <div class="tit" ref="tit">
      <ul class="tit_content" ref="tit_content">
        <li :class="{ tit_item: true, active_item: item.id == $route.params.cateid}" ref="tit_item" v-for='(item, index) in itemList' :key="index">
          <router-link :to="'/home/picShare/'+item.id">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="picinfo">
      <div class="info-item" v-for="(item, index) in infoList" :key="index">
        <img v-lazy="item.img_url" alt="">
        <div class="info">
          <h4>{{ item.title }}</h4>
          <p>{{ item.zhaiyao }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import axios from "axios";
import { host } from "@/common/config";

export default {
  data() {
    return {
      itemList: [],
      infoList: []
    };
  },
  created() {
    // 调用 axios 请求列表数据
    axios.get(`${host}/api/getimgcategory`).then(res => {
      this.itemList = res.data.message;
      this.itemList.unshift({ id: 0, title: "全部" });

      // 下次 dom 更新后延迟执行回调函数
      this.$nextTick(() => {
        this.InitTitScroll();
      });
    });

    console.log(this.$route.params.cateid);

    // 渲染对应列表数据
    this.renderInfo(this.$route.params.cateid || 0);
  },
  methods: {
    InitTitScroll() {
      let width = 0;
      for (let i = 0; i < this.itemList.length; i++) {
        //getBoundingClientRect() 返回元素的大小及其相对于视口的位置, 这里拿宽度
        width += this.$refs.tit_item[0].getBoundingClientRect().width;
      }
      this.$refs.tit_content.style.width = width + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.tit, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    renderInfo(cateid) {
      axios.get(`${host}/api/getimages/${cateid}`).then(res => {
        this.infoList = res.data.message;
      });
    }
  },
  watch: {
    $route() {
      this.renderInfo(this.$route.params.cateid || 0);
    }
  }
};
</script>

<style lang="less" scoped>
.tit {
  width: 100vw;
  overflow: hidden;
  padding: 5px;
  .tit_content {
    line-height: 2rem;
    display: flex;
    .tit_item {
      flex: 0 0 80px;
      width: 80px;
      text-align: center;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }

      &.active_item {
        a {
          color: #4da2f8;
        }
      }
    }
  }
}

.picinfo {
  .info-item {
    margin: 0 15px 20px 15px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 1px 1px #ccc;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }

    .info {
      position: absolute;
      bottom: 0;
      line-height: 20px;
      padding: 5px;
      color: white;
      background-color: rgba(0, 0, 0, 0.4);

      h4 {
        font-size: 14px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}

img[lazy="loading"] {
  width: 100%;
  height: 300px;
}
</style>

