import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);

// 这是一个vuex的插件
const syncStorage = (store) => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    // console.log(mutation, state)
    window.localStorage.setItem('cart', JSON.stringify(state.count))
  })
 }
 
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins:[syncStorage]
});
console.log(store)

export default store
