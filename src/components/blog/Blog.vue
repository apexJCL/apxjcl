<template>
  <div id="blog">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {}
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
