import Vue from 'vue'
import Vuex from 'vuex'
import common from "./common/commonStore";
import index from "./index/indexStore";
import user from "./user/userStore";
import func from "./func/funcStore";
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    index,
    user,
    func
  }
})

export default store;
