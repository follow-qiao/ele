<template>
  <div class="rating">
    <div class="shop-score">
      <div class="score">
        <span>3.9</span>
        <span>综合评分</span>
        <span>高于周边商家69.2%</span>
      </div>
      <div class="sever-score">
        <div class="serve">
          <span>服务态度</span>
          <span>
            <Star></Star>
          </span>
          <span>4.0</span>
        </div>
        <div>
          <span>服务态度</span>
          <span>
            <Star></Star>
          </span>
          <span>3.9</span>
        </div>
        <div>
          <span>送达时间</span>
        </div>
      </div>
    </div>
    <div class="user-comment">
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
        <div class="user-pic"></div>
        <div class="rating-content">
          <div class="rating-info">
            <div class="saller">
              <span>3********2</span>
            </div>
            <div class="time">
              <span>2016-07-09</span><span>12:34</span>
            </div>
          </div>
          <div class="desc-info">
            <i class="icon-thumb_down"></i>
            <div class="food-detail">
              <span>大王香菇酱www</span>
              <span>大王香菇酱ww</span>
              <span>大王香菇酱w</span>
              <span>大王香菇酱ww</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Star from "../../common/commonvue/star/star.vue"
  export default {
    data () {
      return {
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
.rating{
  background-color:#f3f5f7;
  .shop-score{
    display:flex;
    padding:36px 48px;
    background-color: #fff;
    .border-bottom-1px(rgba(7, 17, 27, 0.1));
    margin-bottom:36px;
    .score{
      width:275px;
      padding-right:48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .border-right-1px(rgba(7, 17, 27, 0.1));
      &>span:nth-child(1){
        font-size: 48px;
        color:rgb(255, 153,0);
        line-height:56px;
        margin-bottom:12px;
      }
      &>span:nth-child(2){
        font-size: 24px;
        color:rgb(7, 17, 27);
        line-height:24px;
        margin-bottom:16px;
        font-weight: 600;
      }
      &>span:nth-child(3){
        font-size: 20px;
        color:rgb(7, 17, 27);
        line-height:20px;
        margin-bottom:12px;
      }
    }
    .sever-score{
      flex:1;
      padding-left:48px;
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
      display: flex;
      .border-bottom-1px(rgba(7, 17, 27, 0.1));
      padding:32px 0;
      .user-pic{
        width:56px;
        height:56px;
        border-radius: 50%;
        margin-right:24px;
        background-color: red;
      }
      .rating-content{
        flex:1;
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
          }
        }
        .desc-info{
          display: flex;
          i{
            width:38px;
            font-size: 20px;
            color:rgb(147, 153, 159);
            line-height: 48px;
            margin-right: 8px;
          }
          .food-detail{
            flex: 1;
            font-size: 0;
            span{
              display: inline-block;
              box-sizing: border-box;
              width:146px;
              padding:0 6px;
              font-size: 12px;
              line-height: 32px;
              margin-right:10px;
              color:rgb(7, 17, 27);
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin-bottom: 6px;
              border-radius: 2px;
              .border-1px(rgba(7, 17, 27, 0.1));
            }
          }

        }
      }

    }
  }
}
</style>
