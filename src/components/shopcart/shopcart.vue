<template>
  <div class="shopcart">
    <div class="shop-left" @click="toggleFoodList">
      <span class="car-wrap">
        <!-- active控制购物车有商品是的样式 -->
        <i class="icon-car icon-shopping_cart" :class="{'active':totalNum>0}"></i>
        <span class="num" v-show="totalNum>0">{{totalNum}}</span>
      </span>
      <span :class="[totalNum>0?'hasPrice':'','all-price']">￥{{totalPrice}}</span>
      <span class="patching-fee">另需配送费￥ {{deliveryPrice}}元</span>
    </div>
    <div class="shop-right" :class="{'Settlement':payDes=='去结算'}" @click="payFun">
      <span>{{payDes}}</span>
    </div>
    <div class="box-wrap">
      <transition-group  name="drop"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter" >
        <div class="box" v-for="(item,index) in balls" :key="index" v-show="item.show">
          <div class="boxinner"></div>
        </div>
      </transition-group>
    </div>
    <transition name="select-slide">
      <div class="select-list" v-show="listShow">
        <div class="list-header">
          <h3 class="list-name">购物车</h3>
          <span class="empty" @click="emptyFun">清空</span>
        </div>
        <div class="show-list-wrap" ref="showListWrap">
          <ul class="food-list">
            <li class="item" v-for="(food, index) in selectFoods" :key="index">
              <div class="food-name">{{food.name}}</div>
              <div class="single-price">${{food.price}}</div>
              <div class="cart-control">
                <Cartcontrol class="add-num" :food="food" ></Cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="mask-animation">
      <div class="mask" v-show="listShow" @click="closeFoodList"></div>
    </transition>
  </div>
</template>

<script type='text/ecmascript-6'>
import Cartcontrol from "common/commonvue/cartControl/cartControl.vue"
import BScroll from "better-scroll";
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
        balls:[
          {show:false},
          {show:false},
          {show:false},
          {show:false},
          {show:false}
        ],
        selecballs:[],
        fold:true,
        scroll:''
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
      },
      listShow(){
        if(!this.totalNum){
          this.fold=true;
          return false
        }
        let show=!this.fold;
        this.$nextTick(() => {
          if(!this.scroll){
            this.scroll=new BScroll(this.$refs.showListWrap,{
              click:true
            })
          }else{
            this.scroll.refresh()
          }

        })
        return show
      }
    },
    methods:{
      _dropDown(el){
        for(let i=0;i<this.balls.length;i++){
          let ball=this.balls[i]
          if(!ball.show){
            ball.show=true;
            ball.el=el;
            this.selecballs.push(ball);
            return;
          }
        }
      },
      toggleFoodList(){ //是否显示已选食物的LIST
        if(!this.totalNum){
          return
        }
        this.fold=!this.fold;
      },
      emptyFun(){
        this.selectFoods.forEach((food) => {
          food.count=0;
        })
      },
      closeFoodList(){
        this.fold=true;
      },
      payFun(){
        if(this.payDes=="去结算"){
          alert('去结算')
        }else{
          alert(this.payDes)
        }
      },
      beforeEnter: function (el) {
        let len=this.balls.length;
        while(len--){
          let ball=this.balls[len];
          if(ball.show){
            let rect=ball.el.getBoundingClientRect();
            let dx=rect.left-62;
            let dy=-(window.innerHeight-rect.top-46)
            el.style.transform=`translate3d(0, ${dy}px, 0)`;
            let inner=el.getElementsByClassName('boxinner')[0]
            inner.style.transform=`translate3d(${dx}px, 0, 0)`;
          }
        }

        // ...
      },
      // 此回调函数是可选项的设置
      // 与 CSS 结合时使用
      enter: function (el) {
       let rf=el.offsetHeight
       this.$nextTick(() => {
          el.style.transform='translate3d(0, 0, 0)';
          let inner=el.getElementsByClassName('boxinner')[0]
          inner.style.transform='translate3d(0, 0, 0)';
       })
      },
      afterEnter: function (el) {
        let ball=this.selecballs.shift()
        if(ball){
          ball.show=false;
          el.style.display="";
        }
      }
    },
    components:{
      Cartcontrol
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
  z-index:999;
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
        border-radius:24px;
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
  .box-wrap{
    position:fixed;
    left: 62px;
    bottom: 46px;
    width: 32px;
    height: 32px;
    z-index: 99;
    .drop-enter-active{
      transition: all 0.3s cubic-bezier(.23,-0.2,.57,.25);
      .boxinner{
        transition: all 0.3s;
      }
    }
    .box{
      .boxinner{
        width:32px;
        height:32px;
        border-radius:50%;
        background-color:rgb(0, 160, 220);
      }
    }
  }
  .select-list{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    // height:611px;
    background-color:#fff;
    z-index: -1;
    transition: all .5s;
    transform: translate3d(0, -100%, 0);
    .list-header{
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:80px;
      padding:0 36px;
      background-color: #f3f5f7;
      .border-bottom-1px(rgba(7, 17, 27, 0.1));
      .list-name{
        font-size: 28px;
        font-weight: 200;
        color:rgb(7, 17, 27);
      }
      .empty{
        font-size: 24px;
        color:rgb(0, 160, 220)
      }
    }
    .show-list-wrap{
      max-height:434px;
      padding-bottom:20px;
      overflow:hidden;
      .food-list{
        padding: 0 36px;
        .item{
          display: flex;
          height:96px;
          align-items: center;
          box-sizing: border-box;
          .border-bottom-1px(rgba(7, 17, 27, 0.1));
          .food-name{
            width:458px;
            font-size: 28px;
            color: rgb(7, 17, 27);
            line-height:48px
          }
          .single-price{
            font-size:28px;
            font-weight:700;
            color:rgb(240, 20, 20);
            line-height:48px;
            margin-right:36px;
          }
          .cart-control{
            width:180px;
          }
        }
      }
    }

  }
  // .select-slide-enter-active{
  //   transition: all .5s;
  //   transform: translate3d(0, -100%, 0);
  // }
  // .select-slide-leave-active{
  //   transition: all 0.5s;
  //   //  transform: translate3d(0, -100%, 0);
  // }
  .select-slide-enter{
    transform: translate3d(0, 0, 0);
  }
  .select-slide-leave-to{
    transform: translate3d(0, 0, 0);
  }
  .mask{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(7, 17, 27, 0.7);
    filter: blur(10px);
    opacity:1;
    z-index: -20;
  }
  .mask-animation-enter-active{
    transition: all 1s;
  }
  .mask-animation-leave-active{
    transition: all 1s;
  }
  .mask-animation-enter{
    opacity: 0;
    background-color:rgba(7, 17, 27, 0);
  }
  .mask-animation-leave{
    opacity: 0;
    background-color:rgba(7, 17, 27, 0);
  }
}

</style>
