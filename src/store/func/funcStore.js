import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const funcStore = {
    namespaced: true,
    state: {
      drawerVisible: false,
    },
    getters: {

    },
    mutations: {
      setDrawerVisible(state, payload){
        this.state.drawerVisible = payload.drawerVisible;
      },
    }
}
export default funcStore;