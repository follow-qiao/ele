<template>
  <div class="line-wrap">
    <span class="line"></span>
    <h4 class="line-name">{{lineName}}</h4>
    <span class="line"></span>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    props:{
      lineName:{
        type: String
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../lesscss/mixin.less";
.line-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  .line-name{
    font-size: 24px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    line-height:24px;
    margin: 0 24px;
  }
  .line{
    width: 224px;
    .border-top-1px(rgba(255, 255, 255, 0.2))
  }
}
</style>
