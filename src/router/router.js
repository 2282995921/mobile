import Vue from 'vue'
import router from '../router'
import { Spin, Message, Loading } from 'iView';

// 全局路由守卫
router.beforeEach((to, from, next) => {
  Vue.prototype.$Spin.show();
  if (to.matched.some(m => m.meta.auth)) {
      Vue.prototype.$post('NewFiles/server/php/session.php',).then((data) => {
        console.log(data.data)
        if (data.data.code == 0) {
          // m.meta.auth = false;
          next()
        } else if (to.path !== '/') {
          next({path: '/login'})
          Vue.prototype.$Message.warning('检测到您还未登录,请登录后操作！')
        }
      }).catch((error) => {
        Vue.prototype.$Spin.hide();
      })

  } else {
    next()
  }
});

router.afterEach((to, from, next) => {
    // setTimeout(() => {
      Vue.prototype.$Spin.hide();
      Vue.prototype.$Loading.finish()
      window.scrollTo(0, 0);
    // }, 1000);

});