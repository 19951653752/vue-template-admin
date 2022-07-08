import { asyncRoutes, constantRoutes } from '@/router'

const state = {
  routes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    // state.routes = constantRoutes.concat(routes)
  }
}
function getJsonTree(menus) {
  menus.forEach(item => {
    item.component = loadView(item.component)
    if (item.children) {
      getJsonTree(item.children)
    }
  })
}
function loadView(uri) {
  if (uri === 'layout') {
    return (resolve) => require([`@/layout`], resolve)
  }
  return (resolve) => require([`@/views/${uri}`], resolve)
}

const actions = {
  generateRoutes({ commit }, menus) {
    return new Promise(resolve => {
      getJsonTree(menus)
      resolve(menus)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
