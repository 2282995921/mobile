import axios from 'axios'
import qs from 'qs';
import { Message } from 'iView';

// 配置Api接口地址
const baseUrl = process.env.NODE_ENV === 'development' ? '/' : 'http://192.168.43.107'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  return config
}, err => {
  Message.error('请求超时!' )
  return Promise.resolve(err)
})

// 添加响应拦截器
axios.interceptors.response.use(data => {
  if (data.status && data.status === 200 && data.data.status === 'error') {
      if (data.data.code == 0) {
          Message.success(data.data.message);
      }else{
          Message.error(data.data.message);
      }
  }
  return data             
}, err => {
  if (err.response.status === 504 || err.response.status === 404) {
    Message.error('服务器被吃了⊙﹏⊙∥')
  } else if (err.response.status === 403) {
    Message.error('权限不足,请联系管理员!')
  } else {
    Message.error('未知错误!')
  }
  return Promise.resolve(err)
})

// get请求封装
export const getRequest = function (url, params) {
  return axios({
    method: 'get',
    url: url,
    params: params,
    baseURL: baseUrl,
    // withCredentials: true
  })
}

// post请求封装
export const postRequest = function (url, params) {
  return axios({
    method: 'POST',
    url: url,
    data: qs.stringify(params),
    baseURL: baseUrl,
    withCredentials: true,
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
