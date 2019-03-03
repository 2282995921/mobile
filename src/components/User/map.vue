<template>
  <div class="amap-wrapper">
    <el-amap class="amap-box" vid="map" :zoom="zoom" :center="center">
      <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.center" :events="marker.events" :vid="index"></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
import VueAMap from 'vue-amap';

export default {
  data() {
    return {
      center: [this.$store.state.indexInfo.position.lng, this.$store.state.indexInfo.position.lat],
      zoom: 18,
      markers: [{
        center: [this.$store.state.indexInfo.position.lng, this.$store.state.indexInfo.position.lat],
        radius: 5,
        fillOpacity: '1',
        fillColor: 'rgba(0,0,255,1)',
        events: {
          click: () => {
            alert('有误差要解决');
          }
        }
      }]
    }
  },
}

</script>
<style scoped>
.amap-wrapper {
  width: 100%;
  height: 100%;
}

</style>
