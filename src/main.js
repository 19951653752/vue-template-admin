import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import '@/styles/index.scss'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
// import './styles/element-variables.scss'
// import '../src/utils/directive.js'
import '@/permission.js'

const { mockXHR } = require('../src/mock')
mockXHR()

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
