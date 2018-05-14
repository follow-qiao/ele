<template>
  <div class="rating-wrap" ref="ratingWrap">
    <div class="rating">
      <div class="shop-score">
        <div class="score">
          <span>{{seller.score}}</span>
          <span>综合评分</span>
          <span>高于周边商家{{seller.rankRate}}%</span>
        </div>
        <div class="sever-score">
          <div class="serve">
            <span class="serve-text">服务态度</span>
            <span>
              <Star :size="36" :store="seller.foodScore"></Star>
            </span>
            <span class="score-num">{{seller.foodScore}}</span>
          </div>
          <div class="serve">
            <span class="serve-text">服务态度</span>
            <span>
              <Star :size="36" :store="seller.serviceScore"></Star>
            </span>
            <span class="score-num">{{seller.serviceScore}}</span>
          </div>
          <div class="serve">
            <span class="serve-text">送达时间</span>
            <span class="minute">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="user-comment">
        <RatingSelect :selectType="selectType" :ratings="ratings" :onlyContent="onlyContent" :des="des" @ratingType="ratingTypeFun"></RatingSelect>
      </div>
      <ul class="rating-content" v-show="ratings.length">
        <li class="item" v-for="(item, index) in ratings" :key="index" v-show="isShow(item.rateType,item.text)">
          <img class="user-pic" :src="item.avatar" alt="">
          <div class="rating-content">
            <div class="rating-info">
              <div class="saller">
                <span>{{item.username}}</span>
              </div>
              <div class="time">
                <span>{{item.rateTime| formatDate}}</span>
              </div>
            </div>
            <div class="rating-star">
              <Star :size="36" :store="item.score"></star>
              <span class="arrive-time">{{item.deliveryTime}}分钟</span>
            </div>
            <p class="food-des">{{item.text}}</p>
            <div class="desc-info">
              <i  :class="item.rateType===1?'icon-thumb_down':'icon-thumb_up'"></i>
              <div class="food-detail">
                <span v-for="(rete,index) in item.recommend" :key="index">{{rete}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Star from "common/commonvue/star/star.vue";
  import BScroll from "better-scroll";
  import {formatDate} from "common/js/date.js"
  import RatingSelect from "common/commonvue/ratingSelect/ratingSelect.vue"
  const ERR_OK=0;
  const POSITION=0;
  const NEGATIVE=1;
  const ALL=2;
  export default {
    created(){
      this.$http.get('/api/ratings', {
        params: {}
      })
      .then((response) => {
        let dataList=response.data
        if(ERR_OK===dataList.erro) {
          this.ratings=dataList.data;
          console.log(this.ratings)
        }
      })
      .catch((error) => {
        console.log(error);
      });
    },
    mounted(){
      if(!this.scroll){
        this.scroll=new BScroll(this.$refs.ratingWrap,{
          click:true
        })
      }else{
        this.scroll.refresh()
      }
    },
    props:{
      seller:{
        type:Object
      }
    },
    data () {
      return {
        ratings:[],
        selectType:ALL,
        onlyContent:false,
        des:{
          all:'全部',
          psositive:'推荐',
          negative:'吐槽'
        },
        scroll:""
      }
    },
    filters:{
      formatDate(time){
        let date=new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    methods:{
      ratingTypeFun(num,flag){
        this.selectType=num
        this.onlyContent=flag
      },
      isShow(type,text){
        if(this.onlyContent&&!text){
          return false
        }
        if(this.selectType===ALL){
          return true
        }else{
          return type==this.selectType
        }
      }
    },
    components:{
      Star,
      RatingSelect
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../common/lesscss/mixin.less";
@import "../../common/lesscss/style.less";
.rating-wrap{
  position:absolute;
  top:354px;
  left:0;
  bottom:0;
  width:100%;
  overflow:hidden;
}
.rating{
  background-color:#f3f5f7;
  .shop-score{
    display:flex;
    padding:36px 24px;
    background-color: #fff;
    .border-bottom-1px(rgba(7, 17, 27, 0.1));
    margin-bottom:36px;
    .score{
      box-sizing: border-box;
      width:275px;
      padding-right:24px;
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
      .border-none();
      .serve{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        font-size: 24px;
        margin-bottom: 16px;
        padding-left:24px;
        .serve-text{
          color:rgb(7, 17, 27);
          line-height: 32px;
          margin-right:24px;
        }
        .score-num{
          color:rgb(255, 153, 0);
          line-height: 36px;
          margin-left:24px;
        }
        .minute{
          color:rgb(147, 153, 159)
        }
      }

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
        background-size: 56px 56px;
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
        .rating-star{
          display: flex;
          align-items: center;
          margin-bottom:12px;
          .arrive-time{
            margin-left:12px;
            font-size: 20px;
            font-weight: 200;
            color:rgb(147, 153, 159);
          }
        }
        .food-des{
          font-size: 24px;
          color:rgb(7, 17, 27);
          line-height: 36px;
          margin:0;
          padding:0 0 16px;
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
          .icon-thumb_up{
            color:#00a0dc;
          }
          .food-detail{
            flex: 1;
            font-size: 0;
            span{
              display: inline-block;
              box-sizing: border-box;
              max-width:146px;
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
