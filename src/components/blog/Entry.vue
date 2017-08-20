<template>
  <div class="column is-12-mobile is-4-tablet is-3-desktop is-2-fullhd">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">{{entry.title}}</p>
      </div>
      <div class="card-content">
        <div class="content">
          {{entry.subtitle}}
        </div>
      </div>
      <footer class="card-footer">
        <router-link to="#" class="card-footer-item">See more</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog-entry',
    props: ['entry']
  }
</script>

<style scoped lang="sass">
  .card
    border-radius: 0
    color: white
    background-color: black
    .card-header
      background-color: black
      .card-header-title
        color: white
    .card-footer
      background-color: black
</style>
