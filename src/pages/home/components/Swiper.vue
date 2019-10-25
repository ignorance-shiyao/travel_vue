<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-image" :href="item.href" :src="item.imageURL" :alt="item.alt">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {
                    autoplay: 2000,
                    pagination: '.swiper-pagination',
                    loop: true
                }
            }
        }
    }
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff !important

  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.67%

  /*  以上方法是实现长宽比一定比例的最好的方法，
      直接写 width 100%，height 26.67% 无法实现 , 因为它是相对父级元素的比例
      或者可以写作 width 100%  height 26.67vw , 但是可能存在浏览器兼容问题
  */

  .swiper-image
    width 100%
</style>
