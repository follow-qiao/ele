<template>
  <div class="cart-control">
    <transition name="num-mode">
      <div class="reduce" v-show="food.count" @click="reduceNum">
        <i class="reduce icon-remove_circle_outline"></i>
      </div>
    </transition>
    <span class="num" v-show="food.count">{{food.count}}</span>
    <i class="add icon-add_circle" @click="addFoodNum($event)"></i>
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
      addFoodNum(event){
        if(!this.food.count){
          Vue.set(this.food,'count')
          this.food.count=1;
        }else{
          this.food.count++;
        }
        console.log(event.target)
        this.$emit('adddom',event.target)
      },
      reduceNum(){
        if(this.food.count>0){
          this.food.count--;
        }
      }
    }
  }
</script>

<style lang='less' scoped type='text/css'>
@import "../../lesscss/style.less";
.cart-control{
  font-size: 0;
  line-height:48px;
  .num-mode-enter-active{
    transition: all 0.3s ease;
    i{
      transition: all 0.3s linear;
    }
  }
  .num-mode-leave-active{
    transition: all 0.3s ease;
    i{
      transition: all 0.3s linear;
    }
  }
  .num-mode-enter{
    opacity: 0;
    transform:translate3d(40px,0,0);
    i{
      transform:rorate(180deg);
    }
  }
  .num-mode-leave-to{
    opacity: 0;
    transform:translate3d(40px,0,0);
    i{
      transform:rorate(180deg);
    }
  }
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
    font-size: 48px;
    color: rgb(0, 160, 220);
    padding:4px;
  }
}
</style>
