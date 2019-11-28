import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import store from './store/index'
import url from './network/damainName'
import qs from 'qs'
import requestObj from './network/request';

Vue.use(ElementUI);
Vue.prototype.$Qs = qs;
Vue.prototype.$URL = url;
Vue.prototype.$requestObj = requestObj;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
