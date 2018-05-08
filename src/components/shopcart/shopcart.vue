<template>
  <div class="shopcart">
    <div class="shop-left">
      <span class="car-wrap">
        <!-- active控制购物车有商品是的样式 -->
        <i class="icon-car icon-shopping_cart" :class="{'active':totalNum>0}"></i>
        <span class="num" v-show="totalNum>0">{{totalNum}}</span>
      </span>
      <span :class="[totalNum>0?'hasPrice':'','all-price']">￥{{totalPrice}}</span>
      <span class="patching-fee">另需配送费￥ {{deliveryPrice}}元</span>
    </div>
    <div class="shop-right" :class="{'Settlement':payDes=='去结算'}">
      <span>{{payDes}}</span>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    props:{
      seller:{
        type:Number,
        default:null
      },
      deliveryPrice:{
        type:Number,
        default:0
      },
      minPrice:{
        type:Number,
        default:0
      },
      selectFoods:{
        type:Array,
        default:function(){
          return [
            {
              count:6,
              price:20
            }
          ]
        }
      }
    },
    data () {
      return {
      }
    },
    computed:{
      totalPrice(){
        let totalPrice=0
        this.selectFoods.forEach((item) => {
          totalPrice+=(item.price*item.count)
        })
        return totalPrice
      },
      totalNum(){
        let totalNum=0
        this.selectFoods.forEach((item) => {
          totalNum+=item.count
        })
        return totalNum
      },
      payDes(){//动态描述订单信息的3种状态
        if(this.totalPrice===0){
          return '￥'+this.minPrice+'起送'
        }else if(this.totalPrice<this.minPrice){
          let diff=this.minPrice-this.totalPrice
          return  '还差￥'+diff+' 元起送'
        }else{
          return '去结算'
        }
      }
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../common/lesscss/mixin.less";
@import "../../common/lesscss/style.less";
.shopcart{
  display:flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height:90px;
  width: 100%;
  .shop-left{
    flex: 1;
    display:flex;
    align-items: center;
    background-color: #141247;
    font-size: 32px;
    font-weight: 700;
    color:rgba(255, 255, 255, 0.4);
    .car-wrap{
      position: relative;
      width:112px;
      height:112px;
      border-radius:112px;
      top:-20px;
      left: 24px;
      margin-right:24px;
      background-color: #141247;
      .icon-car{
        position: absolute;
        width:88px;
        height:88px;
        top: 12px;
        left:12px;
        border-radius: 92px;
        font-size:48px;
        line-height: 88px;
        text-align: center;
        color:rgba(255, 255, 255, 0.4);
        background-color: rgb(43, 52, 60)
      }
      .active{
        background-color:rgb(0, 160, 220);
        color:rgb(255, 255, 255)
      }
      .num{
        position: absolute;
        top:0;
        right:0;
        width:48px;
        height:32px;
        text-align: center;
        font-size: 18px;
        font-weight:700;
        line-height:32px;
        color:rgb(255, 255, 255);
        border-radius:12px;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4);
        background-color: rgb(240, 20, 20)
      }
    }
    .all-price{
      line-height:48px;
      padding-right: 24px;
      &.hasPrice{
        color:rgb(255, 255, 255)
      }
    }
    .patching-fee{
      line-height:48px;
      font-size:28px;
      padding: 0 24px;
      .border-left-1px(rgba(255, 255, 255, 0.1))
    }
  }
  .shop-right{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    padding:0 16px;
    font-size:24px;
    font-weight: 700;
    line-height: 48px;
    color: rgba(255, 255, 255, 0.4);
    background-color: rgb(41, 53, 59);
    &.Settlement{
      background-color:#4cd964;
      color:#fff;
      font-size:30px;
      line-height:32px;
      font-weight:700;
    }
  }
}

</style>
