import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggined_in: false,
    username: "",
    accesstoken: "",
  },
  getters: {
    get_login(state) {
      return state.loggined_in
    },
    get_username (state) {
      return state.username
    },
    get_accesstoken(state) {
      return state.accesstoken
    }
  },
  mutations: {
    login_mut(state, payload) {
      state.loggined_in = payload.ulog
      state.username = payload.uname
      console.log(state.loggined_in)
    },
    accesstoken_mut (state, newaccesstoken) {
      state.accesstoken = newaccesstoken
    }
  },
  actions: {
    login_act (context, payload) {
      console.log(payload.ulog)
      context.commit("login_mut", payload)
    },
    accesstoken_act (context, newaccesstoken) {
      context.commit("accesstoken_mut", newaccesstoken)
    }
  },
  modules: {
  }
})
