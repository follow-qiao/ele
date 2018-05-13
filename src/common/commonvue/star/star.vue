<template>
<!-- 便于扩展星星数不能写死 -->
  <div class="star-wrap" :class="starType">
    <i class="star-item" :class="item" v-for="(item, index) in itemClasses" :key="index"></i>
  </div>
</template>

<script type='text/ecmascript-6'>
  const LEN=5;
  const CLS_ON='on';
  const CLS_HALF='half';
  const CLS_OFF='off';
  export default {
    props:{
      size:{
        type:Number
      },
      store:{
        type:Number
      }
    },
    data () {
      return {

      }
    },
    computed:{
      starType(){
          return "star-"+this.size
      },
      itemClasses(){
        let result=[];
        // 根据星数判断有几个全星、几个半星、无星
        let store=Math.floor(this.store*2)/2; //基数有半星；
        let integer=Math.floor(store)
        let hasDecimal=store%1!==0
        for(let i=0;i<integer;i++){
          result.push(CLS_ON)
        }
        if(hasDecimal){
           result.push(CLS_HALF)
        }
        while(result.length<LEN){
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../lesscss/mixin.less";
.star-wrap{
  font-size:0;
  i{
    display: inline-block;
  }
  &.star-48{
    .star-item{
      width: 40px;
      height: 40px;
      margin-right: 40px;
      background-size:40px 40px;
      &.on{
        .bg-image("star48_on")
      }
      &.half{
        .bg-image("star48_half")
      }
      &.off{
        .bg-image("star48_off")
      }
    }
  }
  &.star-36{
    .star-item{
      width: 30px;
      height: 30px;
      margin-right: 12px;
      background-size: 30px 30px;
      &.on{
        .bg-image("star36_on")
      }
      &.half{
        .bg-image("star36_half")
      }
      &.off{
        .bg-image("star36_off")
      }
    }
  }
  &.star-24{
    .star-item{
      width: 20px;
      height: 20px;
      margin-right: 6px;
      background-size: 20px 20px;
      &.on{
        .bg-image("star24_on")
      }
      &.half{
        .bg-image("star24_half")
      }
      &.off{
        .bg-image("star24_off")
      }
    }
  }
  &>i:last-child{
    margin-right: 0!important;
  }
}
</style>
