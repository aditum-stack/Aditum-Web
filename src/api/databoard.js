import request from '@/utils/request'

// 获取社区列表
export function getCommunityList() {
  return request({
    url: '/community/all',
    method: 'get'
  })
}

// 获取设备列表
export function getDeviceList() {
  return request({
    url: '/device/all',
    method: 'get'
  })
}

// 获取访问列表
export function getRecordList() {
  return request({
    url: '/record/all',
    method: 'get'
  })
}

// 获取user列表
export function getUserList() {
  return request({
    url: '/user/property/all',
    method: 'get'
  })
}

// 获取message列表
export function getMessageList() {
  return request({
    url: '/messages',
    method: 'get'
  })
}

// 获取image列表
export function getImageList() {
  return request({
    url: '/images',
    method: 'get'
  })
}

// 获取dynamic列表
export function getDynamicList() {
  return request({
    url: '/records',
    method: 'get'
  })
}
