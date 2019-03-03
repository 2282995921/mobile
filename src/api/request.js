import * as url from './urlConfig'
import { getRequest, postRequest} from './index'
// import axios from 'axios'

//获取轮播图
export const bannerApi = {
	list() {
		return axios.get(url.banner).then((response) => {
			return response.data
		})
	}
}

// 推广
export const promoteApi = {
	promote() {
		return axios.get(url.promote).then((response) => {
			return response.data
		})
	}
}

// 直播
export const liveApi = {
	live() {
		return axios.get(url.live).then((response) => {
			return response.data
		})
	}
}

// 具体内容
export const contentApi = {
	content() {
		return axios.get(url.contet).then((response) => {
			return response.data
		})
	}
}

// 具体内容的三日排行榜信息
export const contentrankApi = {
	contentrank(param) {
		return axios.post(url.contentrank, param).then((response) => {
			return response.data
		})
	},
	contentrankweek(param) {
		return axios.post(url.contentrankweek, param).then((response) => {
			return response.data
		})
	}
}

// 用户信息
export const rankApi = {
	ranking3() {
		return getRequest(url.ranking3).then((response) => {
			return response.data
		})
	}
}

// 首页天气信息
export const weatherApi = {
	weather() {
		return getRequest(url.weather).then((response) => {
			return response.data
		})
	}
}

// 首页栏目信息
export const gridslistApi = {
	gridslist() {
		return getRequest(url.gridslist).then((response) => {
			return response.data
		})
	}
}

// 首页实时新闻
export const newslistApi = {
	newslist() {
		return getRequest(url.newslist).then((response) => {
			return response.data
		})
	}
}

// 登录
export const loginApi = {
	login(param) {
		return postRequest(url.login, param).then((response) => {
			return response.data
		})
	}
}

// 注册
export const registerApi = {
	register(param) {
		return postRequest(url.register, param).then((response) => {
			return response.data
		})
	}
}

// 订单
export const orderApi = {
	order(param) {
		return getRequest(url.order, param).then((response) => {
			return response.data
		})
	}
}