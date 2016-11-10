// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import vueRouter from 'vue-router'

// Semantic-UI css librairy
import '../semantic/dist/semantic.css'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(vueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
