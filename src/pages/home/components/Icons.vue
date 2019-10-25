<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class='icon-img'>
            <img class='icon-img-content' :src='item.imageUrl' :Alt="item.alt"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {
                    autoplay: false
                },
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
                    }, {
                        id: '0009',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                        desc: '景点门票'
                    }, {
                        id: '0010',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
                        desc: '故宫'
                    }, {
                        id: '0011',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                        desc: '北京必游',
                    }, {
                        id: '0012',
                        imageUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
                        desc: '香山公园'
                    }, {
                        id: '0013',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                        desc: '一日游'
                    }, {
                        id: '0006',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
                        desc: '古北水镇'
                    }, {
                        id: '0014',
                        imageUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png",
                        desc: '欢乐谷万圣节'
                    }, {
                        id: '0015',
                        imageUrl: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                        desc: '赏红叶'
                    }
                ]
            }
        }
        , computed: {
            pages() {
                const pages = [];

                /* ES6中的箭头函数 (item, index) =>  等同于 function (item, index) */
                this.iconList.forEach(function (item, index) {
                    const page = Math.floor(index / 8);
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%

  .icons
    margin-top: .1rem

    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%

      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem

        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%

      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
