import { rankApi } from '../../api/request.js'

export default({
  // 在state中去声明全局变量，可以通过 this.$store.state 访问
  state: {
    userInfo: []
  },
  // 在getters中声明state中变量的计算函数，缓存计算后的数据， 通过 this.$store.getters 调用
  getters: {
    // 接受state作为参数，每次 count发生变化时 ， 都会被调用

    userInfo: state => state.userInfo
  },
  // 只能执行同步方法，不要去执行异步方法 通过 this.$store.commit 方法去调用
  mutations: {
    userInfo(state, status) {
      state.userInfo = status;
    }
  },
  // 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch 的方式调用
  // 可以用来执行异步操作，可以跟踪异步数据状态变化
  actions: {
    userInfo({ commit, state, rootState }) {
      rankApi.ranking3().then((response) => {
        console.log(response)
          commit('userInfo', response)
        }, (error) => {
          console.log(error)
        })
    }
  }
})

