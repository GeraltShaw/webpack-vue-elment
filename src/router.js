import Vue from 'vue'
import Router from 'vue-router'

import App from "./container/App.vue";
import TopMenu from "./components/common/TopMenu.vue";
import Index from "./container/index/Index.vue";
import User from "./container/user/User.vue";
import Func from "./container/func/Func.vue";

Vue.component("App", App);
Vue.component("TopMenu", TopMenu);
Vue.component("Index", Index);
Vue.component("User", User);
Vue.component("Func", Func);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      children: [{
          path: 'index',
          component: Index
        },
        {
          path: 'user',
          component: User
        },
        {
          path: "func",
          component: Func,
        },
      ]
    }
  ]
})
