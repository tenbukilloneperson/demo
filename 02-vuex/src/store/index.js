import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  // state状态(数据)
  state: {
    count: 1,
    count1: 2,
    name: 'lixiaoning'
  },
  // 类似于计算属性
  getters: {
    countSum (state) {
      return state.count + state.count1
    }
  },
  // 用来改变state中的数据
  mutations: {
    adad (state, num) {
      state.count += 1
    },
    print () {
      console.log('我是一个同步操作  但是需要假发昨晚执行')
    }
  },
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  //  只有mutations才能才操作state中的数据,Action是通过提交mutation来改变数据的
  actions: {
    adadAsync (context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('adad')
        }, 2000)
      })
    },
    actions2 (context) {
      context.dispatch('adadAsync').then((res) => {
        context.commit('print')
      })
    }
  },
  modules: {}
})
