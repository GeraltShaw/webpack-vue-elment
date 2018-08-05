import Vue from 'vue'
import Vuex from 'vuex'
import index from "./index/indexStore";
import user from "./user/userStore";
import func from "./func/funcStore";
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        index,
        user,
        func
    }
})

export default store;