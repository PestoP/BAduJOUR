import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [ 
    { 
      path: '/', 
      name: '', 
      redirect: {name: 'ba'} 
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
      path: '/a-propos', 
      name: 'about', 
      component: require('./components/About.vue') 
    }, { 
      path: '*', 
      redirect: '/' 
    } 
  ]
})
