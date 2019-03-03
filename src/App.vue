<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <el-amap vid="amap" :plugin="plugin" class="amap-demo"></el-amap>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    let self = this;
    return {
      userName: sessionStorage.userName,
      transitionName: '', //slide-left页面切换效果
      positions: {
        lng: '',
        lat: '',
        address: '',
        loaded: false,
        city: ''
      },
      plugin: [{
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              console.log(result);
              if (result && result.position) {
                self.positions.address = result.formattedAddress;
                // self.positions.address = self.str.substring(self.str.indexOf('市') + 1);
                self.positions.lng = result.position.lng;
                self.positions.lat = result.position.lat;
                self.positions.loaded = true;
                self.$nextTick();
                self.positions.city = result.addressComponent.city;
                // 把获取的数据提交到 store 的数据中，以便其他单文件组件使用
                self.$store.commit('position', self.positions);
                // self.$store.dispatch('position',self.positions)
                console.log(self.positions);
                // sessionStorage.setItem('id', JSON.stringify(self.positions));
              }
            });
          }
        }
      }]
    }
  },
  methods: {

  }
}

</script>
<style lang="less">
@import "./assets/less/normaliz.less";
html,
body {
  -webkit-text-size-adjust: none;
  margin: 0 auto;
  font-size: 10px !important;
  height: 100%;
  position: relative;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%
}
.child-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.head {
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px
}

.head_left span {
  font-size: 1.8rem;
  padding-left: 15px;
}

.amap-demo {
  display: none;
}

</style>