import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import requset from './api/http'
import Cookies from 'js-cookie'
// import { Button, Select } from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.requset = requset
Vue.prototype.Cookies = Cookies


// Vue.use(Button)
// Vue.use(Select)

new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
