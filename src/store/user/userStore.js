import Vue from 'vue'
import Vuex from 'vuex'
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
    getUserListAsync(context) {
      new Promise((resolve) => {
        requestGet('/getUserList.json', context)
          .then(res => {
            if (res && res.data && res.data.success && res.data.data) {
              resolve(res.data.data)
            } else {
              alert('网络异常,请稍后再试!');
            }
          })
      }).then((data) => {
        context.commit("getUserList", data);
      }).catch(error => {
        console.log(error);
        alert('网络异常,请稍后再试!');
      });
    },
  }
}
export default userStore;
