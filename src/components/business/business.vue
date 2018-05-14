<template>
  <div class="business-wrap" ref="businessWrap">
    <div class="business">
      <div class="sale-wrap">
        <h4 class="business-name">{{seller.name}}</h4>
        <div class="sale-info">
          <div class="star-wrap">
            <Star :size="36" :store="seller.foodScore"></Star>
          </div>
          <span>(661)</span>
          <span class="sale-num">月售{{seller.sellCount}}单</span>
          <div class="collection">
            <i class="icon-favorite"></i>
            <span>已收藏</span>
          </div>
        </div>
        <ul class="sale-price">
          <li class="item">
            <span class="type">起送价</span>
            <span class="price">{{seller.minPrice}}元</span>
          </li>
          <li class="item">
            <span class="type">商家配送</span>
            <span class="price">{{seller.deliveryPrice}}元</span>
          </li>
          <li class="item">
            <span class="type">平均配送时间</span>
            <span class="price">{{seller.deliveryTime}}元</span>
          </li>
        </ul>
      </div>
      <div class="tip-active">
        <h4>公告与活动</h4>
        <p>{{seller.bulletin}}</p>
        <ul class="active-wrap">
          <li class="item" v-for="(item, index) in seller.supports" :key="index">
            <i :class="classList[item.type]"></i>
            <span>{{item.description}}</span>
          </li>
        </ul>
      </div>
      <div class="business-info">
        <h4>商家信息</h4>
        <ul class="info-wrap">
          <li v-for="(item, index) in seller.infos" :key="index">{{item}}</li>
          <!-- <li>
            <label></label>
            <span>该商家支持开发表</span>
          </li>
          <li>
            <label>品类 : </label>
            <span>其他菜系</span>
          </li>
          <li>
            <label>地址 : </label>
            <span>杭州市</span>
          </li>
          <li>
            <label>营业时间 : </label>
            <span>10:00 - 20:30</span>
          </li> -->
        </ul>
      </div>
    </div>
  </div>

</template>

<script type='text/ecmascript-6'>
import Star from "../../common/commonvue/star/star.vue";
import BScroll from "better-scroll";
// 切换路由DOM重新渲染，监听数据变化，组件初始化时，是否有滚动，无滚动创建，有滚动刷新
  export default {
    props:{
      seller:{
        type:Object
      }
    },
    created(){
      this.classList=['decrease','discount','guarantee','invoice','special']
    },
    mounted(){
      this._businessScroll()  //切换路由，dom会重新刷新
    },
    data () {
      return {
        scrollY:'',
        scrollX:''
      }
    },
    watch:{
      seller:function (){
        this._businessScroll()
      }
    },
    methods:{
      _businessScroll(){
        if(!this.scrollY){
          this.scrollY=new BScroll(this.$refs.businessWrap,{
            click:true
          })
        }else{
          this.scrollY.refresh()
        }
      }
    },
    components:{
      Star
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../common/lesscss/mixin.less";
@import "../../common/lesscss/style.less";
.business-wrap{
  position:absolute;
  top:354px;
  left:0;
  bottom:0;
  width:100%;
  overflow:hidden;
}
.business{
  font-size: 20px;
  background-color: #f3f5f7;
  h4{
    font-size: 28px;
    color:rgb(7, 17, 27);
    line-height: 28px;
    margin-bottom: 16px;
  }
  .sale-wrap{
    padding: 36px;
    margin-bottom:32px;
    background-color: #fff;
    .border-bottom-1px(rgba(7,17,27,0.1));
    .sale-info{
      position: relative;
      display: flex;
      align-items: center;
      padding-bottom: 36px;
      .border-bottom-1px(rgba(7,17,27,0.1));
      .star-wrap{
        height:36px;
        margin-right: 16px;
      }
      .sale-num{
        margin-left: 24px;
      }
      .collection{
        position: absolute;
        bottom:36px;
        right:0;
        display: flex;
        flex-direction: column;
        align-items: center;
        i{
          font-size: 48px;
          color: rgb(240, 20, 20);
          line-height: 48px;
          margin-bottom: 8px;
        }
        span{
          line-height: 20px;
          color:rgb(77, 65, 93);
        }
      }
    }
    .sale-price{
      display: flex;
      padding-top: 36px;
      .item{
        flex: 1;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        .border-right-1px(rgba(7,17,27,0.1));
        .type{
          color:rgb(157, 153, 159);
          line-height:20px;
          margin-bottom:8px;
        }
        .price{
          font-size: 28px;
          color: rgb(7, 17, 27);
          line-height: 48px;
        }
      }
      &>li:last-child{
        .border-none()
      }
    }
  }
  .tip-active{
    padding:36px 36px 0;
    margin-bottom:32px;
    background-color: #fff;
    .border-top-1px(rgba(7,17,27,0.1));
    p{
      font-size: 24px;
      font-weight: 200;
      line-height: 32px;
      color:rgb(77,85,93);
      padding:0 16px 36px;
      .border-bottom-1px(rgba(7,17,27,0.1));
    }
    .active-wrap{
      .item{
        font-size: 0;
        padding:32px 24px;
        .border-bottom-1px(rgba(7,17,27,0.1));
        i{
          display: inline-block;
          width:32px;
          height:32px;
          background-size: 32px 32px;
          margin-right:12px;
          &.decrease{
            .bg-image('decrease_4')
          }
          &.discount{
            .bg-image('discount_4')
          }
          &.guarantee{
            .bg-image('guarantee_4')
          }
          &.invoice{
            .bg-image('invoice_4')
          }
          &.special{
            .bg-image('special_4')
          }
        }
        span{
          display: inline-block;
          vertical-align: top;
          font-size: 24px;
          font-weight: 200;
          line-height: 32px;
          color:rgb(7,17, 27);
        }
      }
      &>li:last-child{
        .border-none();
      }
    }
  }
  .business-info{
    background-color: #fff;
    padding:36px;
    h4{
      padding-bottom:24px;
      .border-bottom-1px(rgba(7,17,27,0.1));
    }
    .info-wrap{
      li{
        padding:32px 24px;
        font-size: 24px;
        font-weight: 200;
        color: rgb(7, 17, 27);
        line-height: 32px;
        .border-bottom-1px(rgba(7,17,27,0.1));
      }
    }
  }
}
</style>
