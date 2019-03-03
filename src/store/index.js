import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

import userInfo from './modules/userInfo'
import indexInfo from './modules/indexInfo'
import login from './modules/login'
import orderStore from './modules/orderStore'

const state = {
	requesting: false,
	error: {}
}

const getters = {
	requesting: state => state.requesting,
	error: state => state.error
}

export default new Vuex.Store({
	state,
	getters,
	modules: {
		userInfo,
		indexInfo,
		login,
		orderStore,
	},
	plugins:[createPersistedState()]
})