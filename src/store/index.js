/* 
  VueX的使用store
  2020-2-14 田文杨
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  state: {
  },
  getters: {
    userData (state) {
      return state.user.user
    },
    token (state) {
      return state.user.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules
})
