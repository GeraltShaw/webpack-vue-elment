import Vue from 'vue'
import Vuex from 'vuex'
import {
  Message
} from 'element-ui';
import {
  requestGet
} from '../../utils/utils';

Vue.use(Vuex)

const userStore = {
  namespaced: true,
  state: {
    userList: [],
  },
  mutations: {
    getUserList(state, payload) {
      Object.assign(state.userList, payload);
    },
  },
  actions: {
    async getUserListAsync(context) {
      const res = await requestGet('/getUserList.json', context);
      if(res && res.data && res.data.success && res.data.data) {
        context.commit("getUserList", res.data.data)
      } else {
        Message.error('网络异常,请稍后再试!');
      }
    },
  }
}
export default userStore;
