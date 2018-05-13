<template>
  <div class="rating-select">
    <ul class="rating-type">
      <li :class="{'active':selectType===2}" @click="selectTypeFun(2)">
        <span class="type">{{des.all}}</span><span class="rating-num">{{ratings.length}}</span>
      </li>
      <li class="psositive" :class="{'active':selectType===0}"  @click="selectTypeFun(0)">
        <span class="type">{{des.psositive}}</span><span class="rating-num">{{psositiveArr.length}}</span>
      </li>
      <li  class="negative" :class="{'active':selectType===1}"  @click="selectTypeFun(1)">
        <span class="type">{{des.negative}}</span><span class="rating-num">{{negativeArr.length}}</span>
      </li>
    </ul>
    <div class="filter-rating">
      <i class="icon-check_circle" :class="{'on':onlyContent}" @click="onlyContentFun"></i>
      <span>只看有内容评价</span>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
const POSITION=0;
const NEGATIVE=1;
const ALL=2;
  export default {
    props:{
      selectType:{
        tyep:Number,
        default:ALL
      },
      onlyContent:{
        type:Boolean,
        default:false
      },
      des:{
        type:Object,
        default:{
            all:'全部',
            psositive:'推荐',
            negative:'吐槽'
        }
      },
      ratings:{
        type:Array,
      }
    },
    data () {
      return {
      }
    },
    computed:{
      psositiveArr(){
        return this.ratings.filter((rating) => {
          return rating.rateType==POSITION
        })
      },
      negativeArr(){
        return this.ratings.filter((rating) => {
          return rating.rateType==NEGATIVE
        })
      }
    },
    methods:{
      onlyContentFun(){
        this.onlyContent=!this.onlyContent;
        this.$emit('ratingType',this.selectType,this.onlyContent)
      },
      selectTypeFun(num){
        this.selectType=num;
        this.$emit('ratingType',num,this.onlyContent)
      }
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../../common/lesscss/mixin.less";
@import "../../../common/lesscss/style.less";
   .rating-type{
      display: flex;
      justify-content: flex-start;
      padding-bottom: 36px;
      .border-bottom-1px(rgba(7, 17, 27, 0.1));
      li{
        width:120px;
        text-align: center;
        padding:16px 0;
        margin-right: 16px;
        border-radius: 24px;
        color:rgb(77, 85, 93);
        background-color: rgba(0, 160,220,0.2);
        font-size: 0;
        .type{
          display: inline-block;
          font-size: 24px;
          line-height: 32px;
          margin-right:8px;
        }
        .rating-num{
          display: inline-block;
          font-size: 24px;
          line-height: 32px;
        }
      }
      .psositive{
        color:rgb(77, 85, 93);
        background-color: rgba(0, 160,220,0.2);
      }
      .negative{
        color:rgb(77, 85, 93);
        background-color: rgba(77, 85, 93,0.2);
      }
      .active{
        color:rgb(255, 255, 255);
        background-color: rgb(0, 160,220);
      }
    }
    .filter-rating{
      display: flex;
      padding: 24px 0;
      align-items: center;
      color:rgb(147, 153, 159);
      i{
        font-size: 48px;
        margin-right: 8px;
      }
      .on{
          color:#00c850;
      }
      span{
        font-size: 24px;
      }
    }
</style>
