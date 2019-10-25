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
                    autoplay: 2000,
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
                }, {
                    id: '0003',
                    alt: "0003",
                    href: "https://touch.piao.qunar.com/touch/detail.htm?id=31147&cat=from_index%3D3%26dist_city%3D%E5%8C%97%E4%BA%AC%26from_value%3DPOI-31147%26from_area%3Dts_topic",
                    imageURL: "http://img1.qunarzz.com/piao/fusion/1709/39/b98fdb3ee7478e02.jpg_750x200_be64b756.jpg"
                }, {
                    id: '0004',
                    alt: "0004",
                    href: "https://touch.piao.qunar.com/touch/detail.htm?id=198749&cat=from_index%3D5%26dist_city%3D%E5%8C%97%E4%BA%AC%26from_value%3DPOI-198749%26from_area%3Dts_topic",
                    imageURL: "http://img1.qunarzz.com/piao/fusion/1809/3e/52e1824f1ace7202.jpg_750x200_ac90db3f.jpg"
                }, {
                    id: '0005',
                    alt: "0005",
                    href: "https://touch.piao.qunar.com/touch/detail.htm?id=7677&cat=from_index%3D6%26dist_city%3D%E5%8C%97%E4%BA%AC%26from_value%3DPOI-7677%26from_area%3Dts_topic",
                    imageURL: "http://img1.qunarzz.com/piao/fusion/1803/98/0a2e0bd8eb0c0802.png_750x200_0a34d4a8.png"
                }, {
                    id: '0006',
                    alt: "0006",
                    href: "https://touch.piao.qunar.com/touch/detail.htm?id=16172&cat=from_index%3D8%26dist_city%3D%E5%8C%97%E4%BA%AC%26from_value%3DPOI-16172%26from_area%3Dts_topic",
                    imageURL: "http://img1.qunarzz.com/piao/fusion/1803/98/0a2e0bd8eb0c0802.png_750x200_0a34d4a8.png"
                }, {
                    id: '0007',
                    alt: "0007",
                    href: "https://sale.piao.qunar.com/touch/topic/mk/t_4214.htm?cat=from_index%3D7%26dist_city%3D%E5%8C%97%E4%BA%AC%26from_value%3DTOPIC-%E5%85%B4%E5%AE%89%E7%9B%9F%E4%B8%93%E9%A2%98%26from_area%3Dts_topic",
                    imageURL: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/33d3df12507f1786fde6b72917af38cc.jpg_750x200_c8cc2871.jpg"
                }, {
                    id: '0008',
                    alt: "0008",
                    href: "https://touch.piao.qunar.com/touch/detail.htm?id=194609&cat=from_index%3D9%26dist_city%3D%E5%8C%97%E4%BA%AC%26from_value%3DPOI-194609%26from_area%3Dts_topic",
                    imageURL: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/c8f999e73909c2b03e22f793fd29108c.jpg_750x200_63793e6c.jpg"
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
    padding-bottom 26.67%

  /*  以上方法是实现长宽比一定比例的最好的方法，
      直接写 width 100%，height 26.67% 无法实现 , 因为它是相对父级元素的比例
      或者可以写作 width 100%  height 26.67vw , 但是可能存在浏览器兼容问题
  */

  .swiper-image
    width 100%
</style>
