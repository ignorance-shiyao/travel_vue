<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe625;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont">&#xe6aa;</span></div>
  </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style lang="stylus" scoped>
  /*   1rem = html   font-size = 50px
       ~@/  样式引用根目录
       @/  内容引用根目录
    */
  @import "~styles/varibles.styl"

  .header
    display flex
    line-height .86rem
    background $bgColor
    color #ffffff

  .header-left
    width .64rem
    float left

  .back-icon
    text-align center
    font-size .4rem

  .header-input
    flex 1
    height .64rem
    line-height .64rem
    background #ffffff
    color #cccccc
    border-radius .1rem
    margin-top .12rem
    margin-left .1rem
    padding-left .2rem

  .header-right
    width 1.24rem
    float right
    text-align center

</style>
