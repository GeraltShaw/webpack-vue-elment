import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const commonStore = {
  namespaced: true,
  state: {
    drawerVisible: false,
  },
  getters: {

  },
  mutations: {
    setDrawerVisible(state, payload){
      state.drawerVisible = payload.drawerVisible;
    },
  }
}
export default commonStore;