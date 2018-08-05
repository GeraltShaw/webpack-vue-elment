import Vue from 'vue'
import store from "./store/store.js";
import router from './router.js'
import './utils/mock.js';

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view />'
})
