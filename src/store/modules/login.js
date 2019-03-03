import { loginApi, registerApi } from '../../api/request.js'

const state = {
  name: ''
}

const getters = {
  name: state => state.name,
}

const actions = {
  login({ commit, state, rootState }, loginInfo) {
    return new Promise((resolve, reject) => {
      let param = {
        name: loginInfo.name,
        password: loginInfo.password
      }
      loginApi.login(param).then((response) => {
        if (response.code == 0) {
          commit('loginApi', loginInfo.name);
          resolve();
        } else {
          reject()
        }
      })
        .catch(function (error) {
          console.log(error);
          reject()
        });
    })
  },
  register({ commit, state, rootState }, loginInfo) {
    return new Promise((resolve, reject) => {
      let param = {
        name: loginInfo.name,
        password: loginInfo.password,
        mail: loginInfo.mail,
        phone: loginInfo.phone,
        interest: loginInfo.interest
      }
      registerApi.register(param).then((response) => {
        if (response.code == 0) {
          commit('loginApi', loginInfo.name);
          resolve();
        } else {
          reject()
        }
      })
        .catch(function (error) {
          console.log(error);
          reject()
        });
    })
  },
}

const mutations = {
  loginApi(state, status) {
    state.name = status;
    console.log(state)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
