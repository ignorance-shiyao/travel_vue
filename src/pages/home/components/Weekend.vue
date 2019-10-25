<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of list " :key="index">
        <div class="item-img-wrapper">
          <img :src="item.imageURL" class="item-img" Alt="img"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        props: {
            list: Array
        }
    }
</script>

<style lang='stylus' scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem

  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.21%

  .item-img
    width 100%

  .item-title
    line-height .44rem
    font-size .28rem
    ellipsis()

  .item-desc
    height .4rem
    line-height .25rem
    color gray
    ellipsis()

</style>
