<template>
    <div id="index">
        <index-head></index-head>
          <div class="content">
            <m-swipe swipeid="swipe01" :loop="false" :autoplay="0" paginationDirection="center" bottom="0" class="swipe">
              <index-grid gridImgSize="small" :gridColumn="3" slot="swiper-con"></index-grid>
            </m-swipe>
            <!-- <index-grid gridImgSize="small" :gridColumn="4"></index-grid> -->
            <index-news></index-news>
            <index-programme></index-programme>
            <index-contact></index-contact>
          </div>
        <demo-footer></demo-footer>
    </div>
</template>
<script>
import mSwipe from '../find/swipe'
import IndexHead from './IndexHead'
import IndexGrid from './IndexGrid'
import IndexNews from './IndexNews.vue'
import IndexProgramme from './IndexProgramme'
import IndexContact from './IndexContact'
import DemoFooter from '../Footer/DemoFooter'

export default {
  components: {
    IndexHead,
    IndexGrid,
    IndexNews,
    IndexProgramme,
    IndexContact,
    DemoFooter,
    mSwipe
  }
}

</script>
<style scoped>
#index .content {
  padding: 10px;
  padding-bottom: 5rem;
}

</style>
