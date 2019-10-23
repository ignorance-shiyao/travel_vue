<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
        data() {
            return {
                swiperOption: {
                    autoplay: 3000,
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [{
                    id: '0001',
                    alt: "0001",
                    imageURL: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/78b240572657a6da67e662540c846dd6.jpg_750x200_b75c8be9.jpg",
                    href: "https://touch.qunar.com/mis/FZjAbu?bd_source=zthd_814141&amp;cat=from_index%3D1%26dist_city%3D%E5%8C%97%E4%BA%AC%26from_value%3DTOPIC-0%E5%85%83%E7%9D%A1%E5%B9%BF%E5%B7%9E%26from_area%3Dts_topic"
                }, {
                    id: '0002',
                    alt: "0002",

                    href: "https://touch.qunar.com/mis/VF77be?bd_source=zthd_814155&amp;cat=from_index%3D2%26dist_city%3D%E5%8C%97%E4%BA%AC%26from_value%3DTOPIC-%E8%90%A7%E6%95%AC%E8%85%BE%E6%BC%94%E5%94%B1%E4%BC%9A%26from_area%3Dts_topic",
                    imageURL: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/fcc952d6b479db0e7e61922f3ee70f04.jpg_750x200_c5b67f70.jpg"
                }]
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
    padding-bottom 31.25%

  /*  以上方法是实现长宽比一定比例的最好的方法，
      直接写 width 100%，height 31.25%无法实现 , 因为它是相对父级元素的比例
      或者可以写作 width 100%  height 31.25vw , 但是可能存在浏览器兼容问题
  */

  .swiper-image
    width 100%


</style>
