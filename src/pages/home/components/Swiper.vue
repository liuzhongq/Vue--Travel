<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"  :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/a0/980b19eda13bb202.jpg_890x330_d0cc76d2.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/62/c4377b2e1540d202.jpg_890x330_9f2fcdfb.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/d0/0f5f1844045c0102.jpg_890x330_68cb5860.jpg'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1901/ad/67da41581c879402.jpg_890x330_e23bdca1.jpg'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
                background: #fff
  .wrapper >>> .swiper-pagination-bullets
                bottom: .44rem
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    background: #eee
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
