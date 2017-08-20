// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Store from './store/main'
import './assets/style.sass'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store(Store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store
})

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        const target = $el.dataset.target
        const $target = document.getElementById(target)
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
