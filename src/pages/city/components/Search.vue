<template>
  <div class="search">
    <label>
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </label>
  </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style lang='stylus' scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor

  .search-input
    box-sizing border-box
    height .62rem
    line-height .62rem
    width 100%
    text-align center
    border-radius .1rem
    color #666666
</style>
