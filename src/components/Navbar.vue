<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">apxjcl</router-link>
      <div class="navbar-burger burger" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-end">
        <router-link to="/blog" class="navbar-item">Blog</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>
