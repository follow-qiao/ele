<template>
  <div class="header">
      <div class="header-content">
          <div class="avatar">
            <img src="../../common/image/seller_avatar.jpg" alt="">
        </div>
        <div class="right-content">
            <div class="brand-info">
                <span class="brand">品牌</span>
                <h3 class="brand-name">粥品香(大运村)</h3>
            </div>
            <div class="delivery-type">蜂鸟专送/38分钟送达</div>
            <div class="activity clearfix">
                <span class="icon">减</span>
                <span class="active-desc">在线支付满28减5，满50减10</span>
                <span class="more-active">
                  <span class="active-num">5个</span>
                  <span>></span>
                </span>
            </div>
        </div>
      </div>
      <div class="bg-filter"></div>
      <div class="notice">
        <span class="notice-icon">公告</span>
        <span class="notice-desc">粥品香坊其烹饪的粥料源于中国千年古法，在融于现代制作工艺...</span>
        <span class="enter-notice">></span>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "header"
};
</script>
<style lang="less">
@import "../../common/lesscss/mixin.less";
.header {
    position: relative;
    font-size: 12px;
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
                    background-color:red;
                    color:#fff;
                    text-align: center;
                    margin-right:12px;
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
                  background-color: rgba(77, 80, 85, 0.3);
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
        background: url("../../common/image/seller_avatar.jpg") no-repeat center;
        background-size: cover;
        filter: blur(10px);
        z-index: -1;
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
       background-color: rgb(255, 255, 255);
       line-height: 24px;
       margin-right: 8px;
       text-align: center;
       white-space: nowrap;
       color: rgb(57, 65, 73)
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
}
</style>

