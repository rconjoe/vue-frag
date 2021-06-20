import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    setAlert(show, message, color, icon) {
      this.$store.commit('SET_ALERT', {
        show: show,
        message: message,
        color: color,
        icon: icon
      })
    },
  },
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
