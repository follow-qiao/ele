<template>
  <div class="header" v-if="seller">
      <div class="header-content">
          <div class="avatar">
            <img :src="seller.avatar" alt="">
        </div>
        <div class="right-content">
            <div class="brand-info">
                <span class="brand"></span>
                <h3 class="brand-name">{{seller.name}}</h3>
            </div>
            <div class="delivery-type">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
            <div class="activity clearfix">
                <span class="icon" :class="classList[seller.supports[0].type]"></span>
                <span class="active-desc">{{seller.supports[0].description}}</span>
                <span class="more-active" @click="showTip">
                  <span class="active-num">{{seller.supports.length}}个</span>
                  <span class="icon-keyboard_arrow_right"></span>
                </span>
            </div>
        </div>
      </div>
      <div class="bg-filter">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="notice">
        <span class="notice-icon"></span>
        <span class="notice-desc">{{seller.bulletin}}</span>
        <span class="enter-notice icon-keyboard_arrow_right"></span>
      </div>
      <transition name="slide">
        <div class="mask" v-show="isShow">
          <div class="stick-wraper clearfix">
            <div class="stick-contain">
              <h3 class="mask-name">{{seller.name}}</h3>
              <div  class="star">
                <Star :size="48" :store="seller.foodScore"></Star>
              </div>
              <div class="discount-wrap">
                <LineName :lineName="discountName"></LineName>
                <ul class="active-wrap">
                  <li v-for="(item, index) in seller.supports" :key="index">
                    <i class="active-icon" :class="classList[index]"></i>
                    <span class="active-info">{{item.description}}</span>
                  </li>
                </ul>
              </div>
              <div class="seller-tip">
                <LineName :lineName="tipName"></LineName>
                <p class="des-tip">无奈相思，一卷红尘，是谁的挂牵，人生的无缘，一个错过，一个生死不见，爱梦断，人回首，只是江湖冷三生，岁月无情。
                  一杯老酒，一段人生，沧海无奈，思念自己的孤独，伤害最后的生命。一段思念，一段无缘，守望人海的冷，憔悴自己的辜负。</p>
              </div>
            </div>
          </div>
          <div class="close">
            <i class="icon-close" @click="closeTip"></i>
          </div>
        </div>
      </transition>


  </div>
</template>
<script type="text/ecmascript-6">
import LineName from "common/commonvue/lineName/lineName.vue"
import Star from "common/commonvue/star/star.vue"
export default {
  name: "header",
  props:{
    seller:{
      type: Object,
    }
  },
  components:{
    LineName,
    Star
  },
  created(){
    this.classList=['decrease','discount','guarantee','invoice','special']
  },
  data(){
    return {
      discountName:"商家公告",
      tipName:"优惠信息",
      isShow:false
    }
  },
  methods:{
    showTip(){
      this.isShow=true
    },
    closeTip(){
      this.isShow=false
    }
  }
};
</script>
<style lang="less" scoped type='text/css'>
@import "../../common/lesscss/mixin.less";
@import "../../common/lesscss/style.less";
.header {
    position: relative;
    overflow: hidden;
    font-size: 12px;
    background-color:rgba(7, 17, 27, 0.5);
    .header-content{
        position: relative;
        display: flex;
        padding: 48px 24px 36px 48px;
       .avatar {
           margin-right: 32px;
            img {
                width: 128px;
                height: 128px;
                border-radius: 4px;
            }
        }
        .right-content{
            padding-top:4px;
            width:100%;
            .brand-info{
                display: flex;
                margin-bottom: 16px;
                .brand{
                    width: 60px;
                    height: 36px;
                    margin-right:12px;
                    background-size: 60px 36px;
                    .bg-image('brand')
                }
                .brand-name{
                    font:bold 16px/18px;
                    color: rgb(255, 255, 255);
                }
            }
            .delivery-type{
                font-size: 12px;
                color: rgb(255, 255, 255);
                line-height: 24px;
                font-weight: 200;
                margin-bottom:20px;
            }
            .activity{
              display:flex;
              position: relative;
                .icon{
                    width: 24px;
                    height: 24px;
                    margin-right:8px;
                    line-height:24px;
                    background-size: 24px 24px;
                }
                .decrease{
                  .bg-image('decrease_1')
                }
                .discount{
                  .bg-image('discount_1')
                }
                .guarantee{
                  .bg-image('guarantee_1')
                }
                .invoice{
                  .bg-image('invoice_1')
                }
                .special{
                  .bg-image('special_1')
                }
                .active-desc{
                    font-size: 10px;
                    color:rgb(255, 255, 255);
                    font-weight: 200;
                    line-height: 24px;
                    height:24px;
                }
                .more-active{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: absolute;
                  bottom: -6px;
                  right: 0;
                  width: 86px;
                  height: 48px;
                  border-radius: 16px;
                  background-color: rgba(77, 80, 85, 0.5);
                  span{
                    color:rgb(255, 255, 255)
                  }
                  .active-num{
                    margin-right:4px;
                  }
                }
            }
        }
    }
    .bg-filter{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        // background: url("../../common/image/seller_avatar.jpg") no-repeat center;
        // background-size: cover;
        // filter: blur(10px);
        z-index: -1;
        img{
          width: 100%;
          height: 100%;
          filter: blur(10px);
        }
   }
   .notice{
     display: flex;
     align-items: center;
     height: 56px;
     padding: 0 24px;
     background-color: rgba(7,17,27,0.2);
     .notice-icon{
       width: 44px;
       height: 24px;
       background-size: 44px 24px;
       line-height: 24px;
       margin-right: 8px;
       .bg-image('bulletin')
     }
     .notice-desc{
       font-size: 20px;
       width:622px;
       overflow:hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       font-weight: 200;
       color: rgb(255, 255, 255);
     }
     .enter-notice{
       color: rgb(255, 255, 255)
     }
   }
   .slide-enter-active {
      transition: all .6s ease;
    }
    .slide-leave-active {
      transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-enter, .slide-leave-to {
      opacity: 0;
    }
    .mask{
      position: fixed;
      z-index: 99;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      background-color: rgba(7, 17, 27, 0.8);
      overflow:auto;
      .stick-wraper{
        width:100%;
        min-height:100%;
        .stick-contain{
          float:left;
          width: 100%;
          margin-top:128px;
          padding-bottom: 128px;
          .mask-name{
            font-size: 32px;
            font-weight: 700;
            color: rgb(255, 255, 255);
            line-height: 32px;
            text-align: center;
          }
          .star{
              height:136px;
              display: flex;
              justify-content: center;
              align-items: center;
          }
          .active-wrap{
            width:80%;
            margin: 0 auto;
            padding: 48px 0 56px 0;
            li{
              margin-bottom:24px;
              .active-icon{
                display: inline-block;
                vertical-align: middle;
                width: 32px;
                height: 32px;
                background-size: 32px 32px;
                &.decrease{
                  .bg-image('decrease_2')
                }
                &.discount{
                  .bg-image('discount_2')
                }
                &.guarantee{
                  .bg-image('guarantee_2')
                }
                &.invoice{
                  .bg-image('invoice_2')
                }
                &.special{
                  .bg-image('special_2')
                }
              }
              .active-info{
                display: inline-block;
                vertical-align: middle;
                font-size: 24px;
                font-weight: 200;
                color: rgb(255, 255, 255);
                line-height: 24px;
                text-indent: 12px;
              }
            }
            &>li:last-child{
              margin-bottom: 0;
            }
          }
        }
      }
      .seller-tip{
        .des-tip{
          width:80%;
          margin:48px auto 0;
          padding:0 24px;
          font-size: 24px;
          font-weight: 200;
          color:rgb(255, 255, 255);
          line-height: 48px;
        }
      }
      .close{
        position: relative;
        height:64px;
        margin-top: -128px;
        text-align: center;
        padding-bottom:64px;
        font-size: 64px;
        line-height: 64px;
        color: rgba(255, 255, 255,1)
      }
   }
}
</style>

