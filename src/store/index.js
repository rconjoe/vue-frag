import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    alert: {
      show: false,
      message: '',
      color: '',
      icon: ''
    }
  }),
  mutations: {
    SET_ALERT(state, data) {
      state.alert.show = data.show
      state.alert.message = data.message
      state.alert.color = data.color
      state.alert.icon = data.icon
    },
  },
  actions: {
  },
  modules: {
  }
})
