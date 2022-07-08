// 导入路由文件 
import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'
import { constantRoutes } from '@/router'
const whiteList = ["/404"]
// 挂载路由守卫
router.beforeEach(async (to, from, next) => {
  if (to.path === '/login' || to.path === '/register') {
    // 清除用户登录信息
    store.dispatch('user/FedLogOut')
    next()
  } else if (!getToken()) {
    return next('/login')
  } else {
    const username = store.getters.username
    if (username) {
      next()
    } else {
      const { menu } = await store.dispatch('user/getInfo')
      generateMenu(menu)
      console.log(router)
      // next({ path: menu[0].redirect })
      console.log(to)
      console.log(from)
      next({ ...to, replace: true })
    }
  }
})

async function generateMenu(menu) {
  const accessRoutes = await store.dispatch('permission/generateRoutes', menu)
  router.options.routes = constantRoutes.concat(accessRoutes)
  router.addRoutes(accessRoutes)
}
