<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: {Navbar},
    name: 'app'
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0
  }
</style>
