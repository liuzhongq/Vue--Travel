import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import list from '@/pages/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
// 根据网址的不同，返回不同的内容给用户
