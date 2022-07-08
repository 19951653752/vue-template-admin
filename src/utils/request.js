import Vue from "vue";
import {
  Message
} from 'element-ui'
import store from '@/store/'
import Axios from 'axios'
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// NProgress 配置
NProgress.configure({
  showSpinner: false
})
//创建实例
let v = new Vue()
// 超时时间
const baseUrl = process.env.VUE_APP_REQUEST_URL;
const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 10000000,
  headers: {
    "X-Custom-Header": "foobar"
  }
});
// 设置请求拦截器 
axios.interceptors.request.use(config => {
  const settings = {
    ...config
  };
  // 设置公共请求头 
  // settings.headers.common["X-Access-Token"] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTQ2OTk2NDEsInVzZXJuYW1lIjoiYWRtaW4ifQ.dIi3uyinljOARmNG7SIhOYUqykg-HQqrQ5EoCNESQfs'
  NProgress.start()
  settings.headers.common["accessToken"] = sessionStorage.getItem('token')
  return settings;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});
// 设置响应拦截器及异常处理 
axios.interceptors.response.use(response => {
  // Do something before response is sent
  NProgress.done()
  //获取状态码
  const status = response.data.code || response.status
  const message = response.data.message || response.data.error_description || '未知错误'
  //如果是401则跳转到登录页面
  if (status === 401) store.dispatch('user/FedLogOut').then(() => router.push({ path: '/login' }))
  // 如果请求为非200否者默认统一处理
  if (status !== '200') {
    Message({
      message: message,
      type: 'error'
    })
    return Promise.reject(new Error(message))
  }
  return response.data;
}, err => {
  // Do something with response error
  if (err && err.response) {
    let data = err.response.data
    switch (err.response.status) {
      case 400:
        break;
      case 401:
        break;
      case 403:
        break;
      case 404:
        break;
      case 405:
        break;
      case 408:
        break;
      case 500:
        if (data.message == "Token 失效，请重新登录") {
          window.location.reload();
          // token失效清除本地存储 并跳转回登陆页
          localStorage.clear()
          router.push('/login')
        }
        break;
      case 501:
        break;
      case 502:
        break;
      case 503:
        break;
      case 504:
        break;
      case 505:
        break;
      default:
    }
  }
  return Promise.resolve(err.response);
});

export default axios