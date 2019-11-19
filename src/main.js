import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routes from './router/index'
import App from './App.vue' 

Vue.config.productionTip = false 

Vue.use(VueRouter)
Vue.use(ElementUI);

//创建路由实例
const router=new VueRouter({
    routes
})

new Vue({
   router,
  render: h => h(App),
}).$mount('#app')
