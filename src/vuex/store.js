import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index'
Vue.use(Vuex);
 
const store = new Vuex.Store({
 
  state: {
    // 存储token
    Authorization: localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '',
    username: '',
    userRole: ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, _user) {console.log(_user)
      localStorage.setItem('access_token',_user.data);
      localStorage.setItem('username',_user.status.data[0].username);
      localStorage.setItem('userRole',_user.status.data[0].userRole);
      state.Authorization = _user.data;
      state.username = _user.status.data[0].username;
      // state.userRole = _user.status.data[0].userRole;
      if(_user.status.data[0].userRole == '0' || _user.status.data[0].userRole == '1'){
        state.userRole = false;
      } else{
        state.userRole = true;
      }
    },
    signOut (state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('username');
      localStorage.removeItem('userRole');
      state.Authorization = '';
      state.username = '';
      state.userRole = '';
    }
  },
  
  // getters 只会依赖 state 中的成员去更新
  getters : {
    username(state) {
      if (!state.username) {
        let token = localStorage.getItem('access_token');
        if (token) {
          let userInfo = localStorage.getItem('username');
          state.username = userInfo;
        }
      }
      return state.username
    },
    userRole(state) {
      if (!state.userRole) {
        let token = localStorage.getItem('access_token');
        if (token) {
          let userInfo = localStorage.getItem('userRole');
          if(userInfo == '0' || userInfo == '1'){
            state.userRole = false;
          } else{
            state.userRole = true;
          }
        }
      }
      return state.userRole
    },
  }
});
 
export default store;