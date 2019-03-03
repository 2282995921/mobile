import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueWechatTitle from 'vue-wechat-title';  
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css';
import './assets/font-awesome/css/font-awesome.min.css'
import './assets/style/animate.css'
import VueAMap from 'vue-amap';
import VueScroller from 'vue-scroller'
import Vuex from 'vuex'
import store from './store'
import echarts from 'echarts'
import './router/router.js'

//配置axios
// axios.defaults.withCredentials=true //携带cookie
import './api/index.js'
import { getRequest, postRequest } from './api/index.js'

Vue.prototype.$get = getRequest
Vue.prototype.$post = postRequest
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(VueWechatTitle)
Vue.use(iView)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAMap);
Vue.use(VueScroller)
Vue.use(Vuex)

//初始化VueAMap
VueAMap.initAMapApiLoader({
  key: 'e1dedc6bdd765d46693986ff7ff969f4',
  plugin: ['AMap.Geolocation','AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
