import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index'
Vue.use(Vuex);
 
const store = new Vuex.Store({
 
  state: {
    // 存储token
    Authorization: localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '',
    user: {
      username: ''
    }
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, _user) {
      state.Authorization = _user.data;
      state.user.username = _user.message;
      this.$router.push('/home')
      console.log(this.$router)
    }
  }
});
 
export default store;