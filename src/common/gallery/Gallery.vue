<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of images"
                      :key="index">
          <img class="gallery-image"
               :src="item"
               alt="gallery">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CommonGallery",
        props: {
            images: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observeParents: true,
                    observer: true
                }
            }
        },
        methods: {
            handleGalleryClick: function () {
                this.$emit('close')
            }
        }
    }
</script>

<style lang='stylus' scoped>
  .container >>> .swiper-container
    overflow inherit

  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000000

  .wrapper
    overflow hidden
    height 0
    width 100%
    padding-bottom 100%

  .gallery-image
    width 100%

  .swiper-pagination
    color #ffffff
</style>
