import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Blog from './blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {...Home},
    {...Blog}
  ]
})
