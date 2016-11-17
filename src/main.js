// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

// Semantic-UI css librairy
import '../semantic/dist/semantic.css'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

// configuration du router
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: ''
    }, {
      path: '/histoire',
      name: 'story',
      component: require('./components/Story.vue')
    }, {
      path: '/proposer',
      name: 'propose',
      component: require('./components/Propose.vue')
    }, {
      path: '/ba',
      name: 'ba',
      component: require('./components/Ba.vue')
    }, {
      path: '/about',
      name: 'about',
      component: require('./components/About.vue')
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue'))
})
