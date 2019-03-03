import { orderApi } from '../../api/request.js'
import * as TYPE from '../actionType/bannerType'

const state = {
  orderlist: []
}

const getters = {
  orderlist: state => state.orderlist
}

const actions = {
  // orderlist({ commit, state, rootState }) {
  //   commit(TYPE.BANNER_LIST_REQUEST)
  //   orderApi.order().then((response) => {
  //     commit(TYPE.BANNER_LIST_SUCCESS, response)
  //   }, (error) => {
  //     commit(TYPE.BANNER_LIST_FAILURE)
  //   })
  // },
  orderlist({ commit, state, rootState }, orderInfo) {
    return new Promise((resolve, reject) => {
    commit(TYPE.BANNER_LIST_REQUEST)
      let param = {
        begNumber: orderInfo.offset,
        pageSize: orderInfo.limit,
        annouName:'新闻公告'
      }
      orderApi.order(param).then((response) => {
          if (response.code == 0) {
            commit(TYPE.BANNER_LIST_SUCCESS, response)
            resolve();
          } else {
            reject()
          }
        })
        .catch(function(error) {
          commit(TYPE.BANNER_LIST_FAILURE)
          reject()
        });
    })
  },
}

const mutations = {
  [TYPE.BANNER_LIST_REQUEST](state) {

  },
  [TYPE.BANNER_LIST_SUCCESS](state, orderlist) {
    state.orderlist = orderlist.data
  },
  [TYPE.BANNER_LIST_FAILURE](state) {

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
