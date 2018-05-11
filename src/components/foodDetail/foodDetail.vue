<template>
  <transition name="single-food">
    <div class="food-detail" v-show="showFlag" ref="scrollFood">
      <div v-if="food">
        <div class="food-des">
          <img :src="food.image" alt="">
          <span class="go-back" @click="goBack">
            <i class="icon-arrow_lift"></i>
          </span>
          <div class="food-info">
            <h3 class="food-name">{{food.name}}</h3>
            <div class="sale-num">
              <span>月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
            </div>
            <div class="car-info">
              <div class="price-wrap">
                <span class="price">￥{{food.price}}</span><span class="originPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
              <transition name="shop-fade">
                <div class="shop-car shop-location" v-show="!food.count" @click.stop.prevent="addShopCar($event)">
                  加入购物车
                </div>
              </transition>
              <div class="shop-location" v-show="food.count">
                <Cartcontrol :food="food" @adddom="addDom"></Cartcontrol>
              </div>
            </div>
          </div>
        </div>
        <div class="shop-des">
          <h3>商品介绍</h3>
          <p> {{food.info}}</p>
        </div>
        <div class="user-comment">
          <h3>商品评价</h3>
          <ul class="rating-type">
            <li>
              <span class="type">全部</span><span class="rating-num">57</span>
            </li>
            <li>
              <span class="type">推荐</span><span class="rating-num">47</span>
            </li>
            <li>
              <span class="type">吐槽</span><span class="rating-num">10</span>
            </li>
          </ul>
          <div class="filter-rating">
            <i class="icon-check_circle"></i>
            <span>只看有内容评价</span>
          </div>
        </div>
        <ul class="rating-content">
          <li class="item" v-for="(rate,index) in food.ratings" :key="index">
            <div class="rating-info">
              <div class="time">
                <span>{{rate.rateTime}}</span><span>12:34</span>
              </div>
              <div class="saller">
                <span>{{rate.username}}</span>
                <!-- <img :src="rate.avatar" alt=""> -->
              </div>
            </div>
            <div class="desc-info">
              <i class="icon-thumb_down"></i>
              <span>{{rate.text}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script type='text/ecmascript-6'>
import Vue from "vue";
import BScroll from "better-scroll";
 import Cartcontrol from "common/commonvue/cartControl/cartControl.vue"
  export default {
    props:{
      food:{
        type:Object
      }
    },
    data () {
      return {
        showFlag:false,
        scroll:''
      }
    },
    methods:{
      show(){
        this.showFlag= true;
        this.$nextTick(() => {
          if(!this.scroll){
            this.scroll=new BScroll(this.$refs.scrollFood,{
              click:true
            })
          }else{
            this.scroll.refresh();
          }

        })
      },
      addShopCar(event){
        console.log(121312312)
        if(!event._constructed){  //防止Pc多次点击
          return;
        }
        Vue.set(this.food,'count',1);
        console.log(this.food)
        this.$emit('adddom',event.target)
      },
      addDom(el){
        console.log(this)
        this.$parent.$refs.carDom._dropDown(el)
      },
      goBack(){
        this.showFlag= false;
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
.single-food-enter{
  transform: translate3d(100%,0, 0);
}
.single-food-leave-to{
  transform: translate3d(100%,0, 0);
}
.single-food-enter-active{
  transition: all 0.3s;
}
.single-food-leave-active{
  transition: all 0.3s;
}
.food-detail{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 201;
  background-color:#f3f5f7;
  .food-des{
    position:relative;
    background-color:#fff;
    margin-bottom:32px;
    .border-bottom-1px(rgba(7, 17, 27, 0.1));
    img{
      height:750px;
      width:100%;
    }
    .go-back{
      position:absolute;
      top:10px;
      left:0;
      i{
        display:block;
        padding:20px;
        font-size: 20px;
        color:rgb(255, 255, 255)
      }
    }
    .food-info{
      padding:36px;
      position: relative;
      .food-name{
        font-size: 28px;
        font-weight: 700;
        line-height: 28px;
        color:rgb(7, 17, 27);
        margin-bottom:16px;
      }
      .sale-num{
        font-size: 0;
        margin-bottom: 36px;
        span{
          display: inline-block;
          font-size: 20px;
          line-height: 20px;
          color:rgb(147,153,159)
        }
        &>span:first-child{
          margin-right:24px;
        }
      }
      .car-info{
        height:48px;
        display: flex;
        align-items: center;
        .price-wrap{
          .price{
            font-size: 28px;
            font-weight: 700;
            color:rgb(240,20,20);
            margin-right: 24px;
          }
          .originPrice{
            font-size: 20px;
            font-weight: 700;
            color:rgb(147,153,159)
          }
        }
        .shop-location{
          position:absolute;
          right:36px;
          bottom:30px;
        }
        .shop-car{
          position:absolute;
          right:36px;
          bottom:30px;
          box-sizing: border-box;
          width:148px;
          font-size: 20px;
          text-align: center;
          color: rgb(255, 255, 255);
          line-height:48px;
          background-color: rgb(0, 160,220);
          border-radius: 24px;
        }
        .shop-fade-enter{
          opacity:0
        }
        .shop-fade-leave-to{
          opacity:0
        }
        .shop-fade-enter-active{
          transition: all 0.4s;
        }
        .shop-fade-leave-active{
          transition: all 0.4s;
        }
      }
    }
  }
  .shop-des{
    padding:36px;
    margin-bottom: 36px;
    background-color: #fff;
    .border-top-1px(rgba(7, 17, 27, 0.1));
    .border-bottom-1px(rgba(7, 17, 27, 0.1));
    h3{
      font-size: 28px;
      font-weight: 300;
      line-height: 28px;
      color:rgb(7, 17, 27);
      margin-bottom:12px;
    }
    p{
      padding:0 16px;
      font-size: 24px;
      font-weight: 200;
      color:rgb(77, 85, 93);
      line-height: 48px;
    }
  }
  .user-comment{
    padding:36px;
    background-color: #fff;
    padding-bottom:0;
    .border-bottom-1px(rgba(7, 17, 27, 0.1));
    h3{
      font-size: 28px;
      font-weight: 300;
      line-height: 28px;
      color:rgb(7, 17, 27);
      margin-bottom:36px;
    }
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
        background-color: rgb(0, 160,220);
        font-size: 0;
        color:rgb(255, 255, 255);
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
      &>li:nth-child(2){
        color:rgb(77, 85, 93);
        background-color: rgba(0, 160,220,0.2);
      }
      &>li:nth-child(3){
        color:rgb(77, 85, 93);
        background-color: rgba(77, 85, 93,0.2);
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
      span{
        font-size: 24px;
      }
    }
  }
  .rating-content{
    padding:0 36px;
    background-color: #fff;
    .item{
      .border-bottom-1px(rgba(7, 17, 27, 0.1));
      padding:32px 0;
      .rating-info{
        padding-bottom: 12px;
        line-height: 24px;
        color:rgb(147, 153, 159);
        display: flex;
        justify-content: space-between;
        .time{
          font-size: 0;
          span{
            display: inline-block;
            font-size: 20px;
          }
          &>span:first-child{
            margin-right:14px;
          }
        }
        .saller{
          span{
            display: inline-block;
            font-size: 20px;
          }
          img{
            margin-left:12px;
            width:24px;
            height:24px;
            border-radius: 50%;
            background-color: red;
          }
        }
      }
      .desc-info{
        font-size: 0;
        // display: flex;
        // align-items: center;
        i{
          font-size: 20px;
          color:rgb(147, 153, 159);
          line-height: 48px;
          margin-right: 8px;
        }
        span{
          font-size: 20px;
          line-height: 32px;
          color:rgb(7, 17, 27);
        }
      }
    }
  }
}
</style>
