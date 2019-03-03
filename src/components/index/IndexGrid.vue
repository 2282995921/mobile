<template>
  <div class="swiper-wrapper">
    <div class="swiper-slide">
    <div class="weui-grids slide-width">
      <router-link :to="{path:'/app_details',query: {name: item.column}}" class="weui-grid" v-for="(item, index) in gridslist" :key="index"  :class="gridColumnClassObject">
        <div class="weui-grid__icon" :class="classObject">
          <img :src="item.url" :alt="item.title">
        </div>
        <p class="weui-grid__label">{{item.title}}</p>
      </router-link>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="weui-grids slide-width">sdsd</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    gridImgSize: {
      type: String,
      default: 'small'
    },
    gridColumn: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      default: null
    }
  },
  mounted() {
    this.$store.dispatch('gridslist')
  },
  computed: {
    classObject: function() {
      return {
        grid__icon_size_middle: this.gridImgSize === 'middle' && !this.default,
        grid__icon_size_small: this.gridImgSize === 'small' && !this.default,
      }
    },
    gridColumnClassObject: function() {
      return {
        weui_grid_3: this.gridColumn === 3 && !this.default,
        weui_grid_4: this.gridColumn === 4 && !this.default,
      }
    },
    ...mapGetters([
      'requesting',
      'error',
      'gridslist'
    ])
  }
}

</script>
<style scoped>
.weui-grids {
  position: relative;
  /*overflow: hidden;*/
}

.weui-grids:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.weui-grids:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-left: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
}

.weui-grid {
  position: relative;
  float: left;
  padding: 20px 10px;
  width: 33.33333333%;
  box-sizing: border-box;
}

.weui-grid:before {
  content: " ";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-right: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
}

.weui-grid:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.weui-grid__icon {
  width: 28px;
  height: 28px;
  margin: 0 auto;
}

.weui-grid__icon img {
  display: block;
  width: 100%;
  height: 100%;
}

.weui-grid__label {
  display: block;
  text-align: center;
  color: #000000;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 5px;
}

.grid__icon_size_middle {
  width: 50px;
  height: 50px;
}

.weui_grid_4 {
  width: 25%;
}

.slide-width{
  width: 100%;
  height: 210px
}
</style>
