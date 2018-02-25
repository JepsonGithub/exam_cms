import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from "@/layout/tabContainer/HomeContainer"
import MemberContainer from "@/layout/tabContainer/MemberContainer"
import CartContainer from "@/layout/tabContainer/CartContainer"
import SearchContainer from "@/layout/tabContainer/SearchContainer"

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
