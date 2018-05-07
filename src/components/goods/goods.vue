<template>
  <div class="goods"> {{selecedIndex}}
    <div ref="menuWrap">
      <ul class="goods-list">
        <li class="flex-width" v-for="(item,index) in goods" :key="index" :class="{'active':selecedIndex===index}" @click="scrollFood(index)">
          <div class="border-bottom-1px clearfix list-item">
            <i :class="classList[item.type]" v-if="item.type!==-1"></i>{{item.name}}
            <span></span>
          </div>
        </li>
      </ul>
    </div>
    <div ref="foodsWrap">
      <ul class="goods-info">
        <li class="type-item" v-for="(item,index) in goods" :key="index">
          <h3 class="type-name">{{item.name}}}</h3>
          <ul class="item-wrap">
            <li class="type-info" v-for="(food,index) in item.foods" :key="index">
              <div class="food-pic">
                <img :src="food.image" alt="">
              </div>
              <div class="food-info">
                <h4 class="food-name">{{food.name}}</h4>
                <div class="food-desc">{{food.description}}</div>
                <div class="sale-info">
                  <span>{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="sale-price">
                  <span class="price">￥{{food.price}}</span>
                  <span class="origin-price" v-if="food.oldPrice">{{'￥'+food.oldPrice}}</span>
                </div>
                <div class="add-num">+</div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import BScroll from "better-scroll";
  let ERR_OK=0
  export default {
    created(){
      this.$http.get('/api/goods', {
        params: {}
      })
      .then((response) => {
        let dataList=response.data
        if(ERR_OK===dataList.erro) {
          this.goods=dataList.data;
          this.$nextTick(() => {
            this._initFun()
            this._calculate()
          })

        }
      })
      .catch((error) => {
        console.log(error);
      });
      this.classList=['decrease','discount','guarantee','invoice','special']
    },
    data () {
      return {
        goods:[],
        clientHeights:[],  //区间高度数组
        scrollY:0
      }
    },
    computed:{
      selecedIndex:function (){
        for(let i=0;i<this.clientHeights.length;i++){
          let starY1=this.clientHeights[i];
          let starY2=this.clientHeights[i+1];
          if(!starY2||this.scrollY>=starY1&&this.scrollY<starY2){
            return i
          }
        }
        return 0
      }
    },
    methods:{
      _initFun(){//初始化
        this.menuScroll=new BScroll(this.$refs.menuWrap,{
          click:true
        })
        this.foodsScroll=new BScroll(this.$refs.foodsWrap,{
          probeType:3
        })
      },
      _calculate(){//计算每一类商品的高度，存放数组中
        console.log(this.$refs.foodsWrap)
        let singleTypes=this.$refs.foodsWrap.getElementsByClassName('type-item')
        let height=0
        this.clientHeights.push(height)
        for(let i=0;i<singleTypes.length;i++){  //获取每种类型商品的(区间高度)
          height+=singleTypes[i].clientHeight
          this.clientHeights.push(height)
        }
        this.foodsScroll.on('scroll',(props) => { //监听Y轴滚动距离；
          this.scrollY=Math.abs(Math.round(props.y))
        })
      },
      scrollFood(index){
        console.log(index)
        // this.selecedIndex=index;
        this.foodsScroll.scrollTo(0, -this.clientHeights[index], 500)
      }
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../common/lesscss/mixin.less";
.goods{
  display: flex;
  position: absolute;
  top:354px;
  bottom:116px;
  left:0;
  width:100%;
  overflow:hidden;
  .goods-list{
    box-sizing: border-box;
    width: 80px;
    .border-bottom-1px{
      .border-bottom-1px(rgba(7, 17, 27, 0.1))
    }
    .flex-width{
      box-sizing: border-box;
      // width: 80px;
      padding: 0 12px;
      background-color: #f3f5f7;
      .list-item{
        display: table-cell;
        vertical-align: middle;
        font-size: 12px;
        color: rgb(7, 17, 27);
        font-weight: 200;
        line-height: 14px;
        width:56px;
        height:54px;
        i{
          float: left;
          width: 12px;
          height: 12px;
          margin-right:2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease{
            .bg-image('decrease_3')
          }
          &.discount{
            .bg-image('discount_3')
          }
          &.guarantee{
            .bg-image('guarantee_3')
          }
          &.invoice{
            .bg-image('invoice_3')
          }
          &.special{
            .bg-image('special_3')
          }
        }
      }
      &.active{
        background-color: rgb(255, 255, 255);
        .border-none()
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
    .item-wrap{
      .type-info{
        box-sizing: border-box;
        padding: 36px 0;
        margin: 0 36px;
        display: flex;
        .border-bottom-1px(rgba(7, 17, 27, 0.1));
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
            line-height:26px;
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
      &>li:last-child{
        .border-none()
      }
    }

  }
}
</style>

