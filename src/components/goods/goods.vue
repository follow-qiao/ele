<template>
  <div class="goods">
    <ul class="goods-list">
      <li>
        <div class="border-bottom-1px clearfix list-item">
          <i></i>
          <span>热销榜</span>
        </div>
      </li>
      <li class="active">
        <div class="border-bottom-1px clearfix list-item">
          <i></i>
          <span>单人特色套餐</span>
        </div>
      </li>
      <li >
        <div class="border-bottom-1px clearfix list-item">
          <i></i>
          <span>单人特色套餐</span>
        </div>
      </li>
      <li >
        <div class="border-bottom-1px clearfix list-item">
          <i></i>
          <span>单人特色套餐</span>
        </div>
      </li>
      <li >
        <div class="border-bottom-1px clearfix list-item">
          <i></i>
          <span>单人特色套餐</span>
        </div>
      </li>
      <li >
        <div class="border-bottom-1px clearfix list-item">
          <i></i>
          <span>单人特色套餐</span>
        </div>
      </li>
      <li >
        <div class="border-bottom-1px clearfix list-item">
          <i></i>
          <span>单人特色套餐</span>
        </div>
      </li>
    </ul>
    <div class="goods-info">
      <ul class="type-item">
        <h3 class="type-name">单人特色套餐</h3>
        <li class="type-info">
          <div class="food-pic">
            <img src="../../common/image/single_pic.jpeg" alt="">
          </div>
          <div class="food-info">
            <h4 class="food-name">皮蛋廋肉粥包子套餐</h4>
            <div class="food-desc">咸粥</div>
            <div class="sale-info">
              <span>1132份</span>
              <span>好评率100%</span>
            </div>
            <div class="sale-price">
              <span class="price">￥24</span>
              <span class="origin-price">￥28</span>
            </div>
            <div class="add-num">+</div>
          </div>
        </li>
        <ul class="type-item">
          <h3 class="type-name">单人特色套餐</h3>
          <li class="type-info">
            <div class="food-pic">
              <img src="../../common/image/single_pic.jpeg" alt="">
            </div>
            <div class="food-info">
              <h4 class="food-name">皮蛋廋肉粥包子套餐</h4>
              <div class="food-desc">咸粥</div>
              <div class="sale-info">
                <span>1132份</span>
                <span>好评率100%</span>
              </div>
              <div class="sale-price">
                <span class="price">￥24</span>
                <span class="origin-price">￥28</span>
              </div>
              <div class="add-num">+</div>
            </div>
          </li>
          <li class="type-info">
            <div class="food-pic">
              <img src="../../common/image/single_pic.jpeg" alt="">
            </div>
            <div class="food-info">
              <h4 class="food-name">皮蛋廋肉粥包子套餐</h4>
              <div class="food-desc">咸粥</div>
              <div class="sale-info">
                <span>1132份</span>
                <span>好评率100%</span>
              </div>
              <div class="sale-price">
                <span class="price">￥24</span>
                <span class="origin-price">￥28</span>
              </div>
              <div class="add-num">+</div>
            </div>
          </li>
          <li class="type-info">
            <div class="food-pic">
              <img src="../../common/image/single_pic.jpeg" alt="">
            </div>
            <div class="food-info">
              <h4 class="food-name">皮蛋廋肉粥包子套餐</h4>
              <div class="food-desc">咸粥</div>
              <div class="sale-info">
                <span>1132份</span>
                <span>好评率100%</span>
              </div>
              <div class="sale-price">
                <span class="price">￥24</span>
                <span class="origin-price">￥28</span>
              </div>
              <div class="add-num">+</div>
            </div>
          </li>
        </ul>
      </ul>
    </div>
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
.goods{
  display: flex;
  .goods-list{
    box-sizing: border-box;
    width: 160px;
    .border-bottom-1px{
      .border-bottom-1px(rgba(7, 17, 27, 0.1))
    }
    li{
      box-sizing: border-box;
      padding: 0 24px;
      background-color: #f3f5f7;
      .list-item{
        display: flex;
        align-items: center;
         height:108px;
        i{
          float: left;
        }
        span{
          float: left;
          font-size: 24px;
          color: rgb(7, 17, 27);
          font-weight: 200;
          line-height: 28px;
        }
      }
    }
    .active{
      background-color:rgb(255, 255, 255);
      .list-item{
        &:after{
          display:none
        }
      }
    }
  }
  .goods-info{
    flex: 1;
    width: 100%;
    .type-name{
      border-left:4px solid #d9dde1;
      padding-left: 28px;
      font-size: 24px;
      color: rgb(147, 153, 159);
      height: 52px;
      line-height:52px;
      background-color:#f3f5f7;
    }
    .type-info{
      box-sizing: border-box;
      padding: 36px;
      width:100%;
      display: flex;
      .food-pic{
        margin-right:20px;
        img{
          width:114px;
          height:114px;
        }
      }
      .food-info{
        position:relative;
        padding-top:4px;
        width:100%;
        .food-name{
          height:20px;
          font-size: 28px;
          color:rgb(7, 17, 27);
          line-height:20px;
          margin-bottom:16px;
        }
        .food-desc{
          font-size:20px;
          color: rgb(147,153, 159);
          height:20px;
          line-height:20px;
          margin-bottom: 16px;
        }
        .sale-info{
          display: flex;
          align-items: center;
          span{
            font-size: 20px;
            color: rgb(147, 153,159);
            line-height: 20px;
          }
          &>span:first-child{
            margin-right: 24px;
          }
        }
        .sale-price{
          .price{
            font-size: 28px;
            color:rgb(240, 20, 20);
            line-height:48px;
            font-weight:700;
          }
          .origin-price{
            font-size:20px;
            color:rgb(147, 153, 159);
            line-height:48px;
            font-weight:normal;
            .border-bottom-1px(rgb(147, 153, 159));
            &::after{
              bottom:12px;
            }
          }
        }
        .add-num{
          position:absolute;
          bottom:4px;
          right:4px;
          width: 40px;
          height: 40px;
          background-color: rgb(0, 160, 220);
          color:rgb(255, 255, 255);
          text-align: center;
          line-height: 40px;
        }
      }
    }
  }
}
</style>

