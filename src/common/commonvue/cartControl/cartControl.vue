<template>
  <div class="cart-control">
    <transition name="num-mode">
      <div class="reduce" v-show="food.count" @click="reduceNum">
        <i class="reduce icon-remove_circle_outline"></i>
      </div>
    </transition>
    <span class="num" v-show="food.count">{{food.count}}</span>
    <i class="add icon-add_circle" @click="addFoodNum"></i>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Vue from "vue"
  export default {
    props:{
      food:{
        type:Object
      }
    },
    data () {
      return {
        count:0
      }
    },
    methods:{
      addFoodNum(){
        if(!this.food.count){
          Vue.set(this.food,'count')
          this.food.count=1;
        }else{
          this.food.count++;
        }
        console.log(this.food)
      },
      reduceNum(){
        this.food.count--;
      }
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../lesscss/style.less";
.cart-control{
  font-size: 0;
  line-height:48px;
  .fade-enter-active{
    transition: all 12s ease;
    // i{
    //   transition: all 1s;
    // }
  }
  .fade-leave-active{
    transition: all 12s ease;
    // i{
    //   transition: all 1s;
    // }
  }
  .num-mode-enter{
    opacity: 0;
    transform:translate3D(40px,0,0);
    // i{
    //   transform:rorate(180deg);
    // }
  }
  .num-mode-enter{
    opacity: 0;
    transform:translate3D(40px,0,0);
    // i{
    //   transform:rorate(180deg);
    // }
  }
  // .fade-leave-active{
  //   transition: opacity .5s;
  // }
  .reduce{
    display: inline-block;
    i{
      display: inline-block;
      font-size:48px;
      color: rgb(0, 160, 220);
      padding:4px;
    }
  }
  .num{
    width:48px;
    font-size:20px;
    display: inline-block;
    color: rgb(147, 153, 159);
    padding: 4px 0;
    text-align: center;
    vertical-align: top;
  }
  .add{
    display: inline-block;
    font-size:48px;
    color: rgb(0, 160, 220);
    padding:4px;
  }
}
</style>
