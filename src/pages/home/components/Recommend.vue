<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of recommendList " :key="index">
        <img :src="item.imageURL" class="item-img" Alt="img"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        data() {
            return {
                recommendList: [{
                    id: '0001',
                    imageURL: 'http://img1.qunarzz.com/sight/p0/201403/07/a3231208ca4095bef77068c202d95bd2.jpg_200x200_0d7d4e22.jpg',
                    title: '香山公园',
                    desc: '香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园'
                }, {
                    id: '0002',
                    imageURL: 'http://img1.qunarzz.com/sight/p0/201403/07/a3231208ca4095bef77068c202d95bd2.jpg_200x200_0d7d4e22.jpg',
                    title: '香山公园',
                    desc: '香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园'
                }, {
                    id: '0003',
                    imageURL: 'http://img1.qunarzz.com/sight/p0/201403/07/a3231208ca4095bef77068c202d95bd2.jpg_200x200_0d7d4e22.jpg',
                    title: '香山公园',
                    desc: '香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园香山公园'
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

  .item
    overflow hidden
    display flex
    height 1.9rem

  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem

  .item-info
    flex 1
    padding .1rem
    min-width 0

  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()

  .item-desc
    height .4rem
    color gray
    ellipsis()

  .item-button
    line-height .44rem
    margin-top .14rem
    background #ff9300
    padding .1rem
    border-radius .06rem
    color #ffffff

</style>
