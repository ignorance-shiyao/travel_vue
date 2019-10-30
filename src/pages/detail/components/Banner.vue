<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
           class="banner-img" alt="image">
      <div class="banner-info">
        <div class="banner-title">　故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont">&#xe64a;</span>
          39
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :images="images"
                      v-show="showGallery"
                      @close="handleGalleryClose"
      ></common-gallery>
    </fade-animation>

  </div>
</template>

<script>
    import CommonGallery from 'common/gallery/Gallery'
    import FadeAnimation from 'common/fade/FadeAnimation'

    export default {
        name: "DetailBanner",
        data() {
            return {
                showGallery: false,
                images: [
                    'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg',
                    'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg'
                ]
            }

        },
        methods: {
            handleBannerClick: function () {
                this.showGallery = true
            },
            handleGalleryClose: function () {
                this.showGallery = false
            }
        },
        components: {
            CommonGallery,
            FadeAnimation
        }
    }
</script>

<style lang='stylus' scoped>
  @import "~styles/varibles.styl"
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%

    .banner-img
      width 100%

    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

      .banner-tittle
        flex 1
        font-size .32rem
        padding 0 .2rem

      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem

        .banner-icon
          font-size .24rem
</style>
