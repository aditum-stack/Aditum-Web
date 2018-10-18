// axios request

import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // base_url: config/dev.env.js
  baseURL: 'api',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(config => {
  if (store.getters.token) {
    // 让每个请求携带token-- ['X-Token']为自定义key
    config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  console.log('request error ' + error)
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // 0 => success
    if (res.code === 0) {
      return response.data
    } else {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      // login out
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      return Promise.reject('error')
    }
  },
  error => {
    console.log('response error' + error)
    // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
