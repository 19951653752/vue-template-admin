import request from '@/utils/request'
// 登录
export function session(params) {
  return request({
    url: '/kgd-web/user/session',
    method: 'get',
    params
  })
}
// 获取当前登录用户信息
export function loginInfo(params) {
  return request({
    url: '/kgd-web/user/loginInfo',
    method: 'get',
    params
  })
}
