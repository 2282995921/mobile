<template>
  <div id="find">
    <m-swipe swipeid="swipe01" :autoplay="4000" paginationDirection="center" bottom="" class="swipe">
      <m-swiper-slide slot="swiper-con"></m-swiper-slide>
    </m-swipe>
    <m-list></m-list>
    <demo-footer></demo-footer>
  </div>
</template>
<script>
import mSwipe from './swipe'
import mList from './findList'
import mSwiperSlide from './swiperSlide'
import DemoFooter from '../Footer/DemoFooter'
export default {
  data() {
    return {
      swiperOption: {
        list: [],
        notNextTick: true,
        autoplay: 3000
      }
    }
  },
  components: {
    DemoFooter,
    mSwipe,
    mList,
    mSwiperSlide
  },
  computed: {
    swiper() {
      // return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}

</script>
<style>


</style>
