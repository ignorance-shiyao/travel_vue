<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of recommendList " :key="index">
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
        data() {
            return {
                recommendList: [{
                    id: '0001',
                    imageURL: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title: '京城周末撒欢',
                    desc: '在帝都过周末，不仅仅是城中游！'
                }, {
                    id: '0002',
                    imageURL: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title: '京城周末撒欢',
                    desc: '在帝都过周末，不仅仅是城中游！'
                }, {
                    id: '0003',
                    imageURL: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title: '京城周末撒欢',
                    desc: '在帝都过周末，不仅仅是城中游！'
                }]
            }
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
      padding-bottom 26.67%

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
