<template>
  <div id="app">
    <div class="tabs">
      <ul>
          <!-- 使用 router-link指向定义的path -->
          <router-link to="{name: 'Home'}" tag="li">
             <div>
               <img src="../assets/images/home.svg">
             </div>
             <div>首页</div>
          </router-link>

          <router-link to="{name: 'Categories'}" tag="li">
             <div>
               <img src="../assets/images/category.svg">
             </div>
             <div>分类</div>
          </router-link>

          <router-link to="{name: 'ShoppingCart'}" tag="li">
             <div>
               <img src="../assets/images/cart.svg">
             </div>
             <div>购物车</div>
          </router-link>
          
          <router-link to="{name: 'Me'}" tag="li">
             <div>
               <img src="../assets/images/me.svg">
             </div>
             <div>我</div>
          </router-link>
      </ul>
    </div>
    <div class="content">
      <!-- 用router-view渲染视图 -->
      <router-view></router-view>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
