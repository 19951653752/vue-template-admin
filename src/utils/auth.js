let keys = {
  Token: 'token',
  UserId: 'userId',
  ExpireTime: 'expireTime'
}
//存储token到session
export const setToken = (token) => {
  sessionStorage.setItem(keys.Token, token)
}
export const getToken = () => {
  return sessionStorage.getItem(keys.Token)
}
export const removeToken = () => {
  return sessionStorage.removeItem(keys.Token)
}
//存储userId到session
export const setUserId = (userId) => {
  sessionStorage.setItem(keys.UserId, userId)
}
export const getUserId = () => {
  return sessionStorage.getItem(keys.UserId)
}
export const removeUserId = () => {
  return sessionStorage.removeItem(keys.UserId)
}
//存储过期时间
export const setExpireTime = (time) => {
  sessionStorage.setItem(keys.ExpireTime, JSON.stringify(time))
}
export const getExpireTime = () => {
  return sessionStorage.getItem(keys.ExpireTime)
}
//session清空
export const cleanSession = () => {
  sessionStorage.clear()
}