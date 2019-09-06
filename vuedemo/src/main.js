// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// 引入自己的组件
import roteComponent from './components/rote.vue'

import myScoket from './components/mySocket.vue'
Vue.config.productionTip = false
Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
// 创建一个路由器实例
// 并且配置路由规则
const routers = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: roteComponent
    },
    {
      path: '/third',
      component: myScoket
    }
  ]
})
new Vue({
  el: '#app',
  router: routers,
  components: { App },
  template: '<App/>'
})
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
/*
new Vue({
  router: routers,
  render: h => h(App)
}).$mount('#app')
*/


