<template>
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <div class="icon-image">
        <img class="icon-image-content" :src="item.imageUrl" alt="">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data() {
            return {
                iconList: [
                    {
                        id: '0001',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                        desc: '景点门票'
                    }, {
                        id: '0002',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
                        desc: '故宫'
                    }, {
                        id: '0003',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                        desc: '北京必游',
                    }, {
                        id: '0004',
                        imageUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
                        desc: '香山公园'
                    }, {
                        id: '0005',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                        desc: '一日游'
                    }, {
                        id: '0006',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
                        desc: '古北水镇'
                    }, {
                        id: '0007',
                        imageUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png",
                        desc: '欢乐谷万圣节'
                    }, {
                        id: '0008',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                        desc: '赏红叶'
                    },
                ]
            }
        }
    }
</script>

<style lang='stylus' scoped>

  @import "~styles/varibles.styl"

  .icons
    overflow hidden
    height 0
    padding-bottom 50%

  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%


  .icon-image
    position absolute
    top 0
    left 0
    right 0
    bottom .44rem
    box-sizing border-box
    padding .1rem

  .icon-image-content
    display block
    margin 0 auto
    height 100%

  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    text-align center
    height .44rem
    line-height .44rem
    color $darkTextColor
</style>
