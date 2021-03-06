import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from "@/layout/tabContainer/HomeContainer"
import MemberContainer from "@/layout/tabContainer/MemberContainer"
import CartContainer from "@/layout/tabContainer/CartContainer"
import SearchContainer from "@/layout/tabContainer/SearchContainer"

import NewsList from "@/views/news/NewsList"
import NewsDetail from "@/views/news/NewsDetail"
import PicShare from "@/views/picShare/PicShare"
import GoodsList from "@/views/goods/GoodsList"
import GoodsDetail from "@/views/goods/GoodsDetail"
import GoodsComment from "@/views/goods/GoodsComment"

Vue.use(Router)

export default new Router({
  routes: [
    /* tab栏相关的路由 */
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: HomeContainer
    },
    {
      path: "/member",
      name: "member",
      component: MemberContainer
    },
    {
      path: "/cart",
      name: "cart",
      component: CartContainer
    },
    {
      path: "/search",
      name: "search",
      component: SearchContainer
    },
    /* tab栏相关的路由 */

    /* 新闻资讯相关的路由 */
    {
      path: "/home/newslist",
      component: NewsList
    },
    {
      path: "/home/newsDetail/:id",
      component: NewsDetail
    },
    /* 新闻资讯相关的路由 */

    /* 图片分享页面 */
    {
      path: "/home/picShare/:cateid?",
      component: PicShare
    },
    /* 图片分享页面 */

    /* 商品购买页面 */
    {
      path: "/home/goodsList",
      component: GoodsList
    },
    {
      path: "/home/goodsDetail/:goodsid",
      component: GoodsDetail
    },
    {
      path: "/home/goodsComment/:goodsid",
      component: GoodsComment
    }
    /* 商品购买页面 */
  ]
})
