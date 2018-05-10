<template>
  <div class="food-detail">
    <div class="food-des">
      <img src="" alt="">
      <div class="food-info">
        <h3 class="food-name">皮蛋廋肉粥</h3>
        <div class="sale-num">
          <span>月售1132份</span><span>好评率100%</span>
        </div>
        <div class="car-info">
          <div class="price-wrap">
            <span class="price">￥24</span><span class="originPrice">￥28</span>
          </div>
          <div class="shop-car">
            加入购物车
          </div>
        </div>
      </div>
    </div>
    <div class="shop-des">
      <h3>商品介绍</h3>
      <p> 粥公粥婆养生粥坊由北京嘉禾美佳餐饮管理有限公司运营，多年来始终致力于中式食品终端原料、设备、技术研究、推广于一体的专业食品加盟企业。</p>
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
      <li class="item">
        <div class="rating-info">
          <div class="time">
            <span>2016-07-09</span><span>12:34</span>
          </div>
          <div class="saller">
            <span>3********2</span><span></span>
          </div>
        </div>
        <div class="desc-info">
          <i class="icon-thumb_down"></i>
          <span>太少了不够一个人吃;太少了不够一个人吃;太少了不够一个人吃太少了不够一个人吃太少了不够一个人吃</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../common/lesscss/mixin.less";
@import "../../common/lesscss/style.less";
.food-detail{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color:#f3f5f7;
  .food-des{
    background-color:#fff;
    margin-bottom:32px;
    .border-bottom-1px(rgba(7, 17, 27, 0.1));
    img{
      height:750px;
      width:100%;
    }
    .food-info{
      padding:36px;
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
        justify-content: space-between;
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
        .shop-car{
          box-sizing: border-box;
          width:148px;
          font-size: 20px;
          text-align: center;
          color: rgb(255, 255, 255);
          line-height:48px;
          background-color: rgb(0, 160,220);
          border-radius: 24px;
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
          &>span:last-child{
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
