import { gridslistApi, newslistApi, weatherApi } from '../../api/request.js'

export default ({
  state: {
    gridslist: [],
    newslist: [],
    weather: [],
    position: []
  },
  getters: {
    gridslist: state => state.gridslist,
    newslist: state => state.newslist,
    weather: state => state.weather,
    position: state => state.postion,
  },
  mutations: {
    gridslist(state, status) {
      state.gridslist = status;
    },
    news_list(state, status) {
      state.newslist = status;
    },
    weather_info(state, status) {
      state.weather = status;
    },
    position(state, status) {
      state.position = status;
    }
  },
  actions: {
    gridslist({ commit, state, rootState }) {
      gridslistApi.gridslist().then((response) => {
        commit('gridslist', response.data)
      }, (error) => {
        console.log(error)
      })
    },
    newslist({ commit, state, rootState }) {
      newslistApi.newslist().then((response) => {
        commit('news_list', response.data)
      }, (error) => {
        console.log(error)
      })
    },
    weather({ commit, state, rootState }) {
      weatherApi.weather().then((response) => {
        commit('weather_info', response.data)
      }, (error) => {
        console.log(error)
      })
    },
  }
})
