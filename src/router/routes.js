import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.config.productionTip = false

//引入创建的四个页面
import Home from '../pages/Home.vue'
import Category from '../pages/Explorer.vue'
import ShoppingCart from '../pages/Cart.vue'
import Me from '../pages/Me.vue'

//使用路由实例插件
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      //将页面组件与path指定的路由关联
      {name: 'Home',path: '/', component: Home},
      {name: 'Categories', path: '/categories', component: Category},
      {name: 'ShoppingCart' ,path: '/shopping-cart', component: ShoppingCart},
      {name: 'Me', path: '/me', component: Me}
    ]
  })
