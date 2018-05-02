<template>
  <div id="app">
    <Header></Header>
    <div class="banner-tap border-bottom-1px">
      <router-link to="/goods">商品</router-link>
      <router-link to="/evaluate">评价</router-link>
      <router-link to="/business">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "components/header/header.vue";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>
<style lang="less">
@import "common/lesscss/mixin.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.border-bottom-1px{
  .border-bottom-1px(rgba(7, 17, 27, 0.1));
}
.banner-tap{
  display: flex;
  height: 80px;
  a{
    width: 250px;
    text-align: center;
    line-height: 80px;
    font-size:28px;
    color: rgb(77, 85,93);
  }
  .router-link-active{
    color: rgb(240, 20, 20)
  }
}
</style>
