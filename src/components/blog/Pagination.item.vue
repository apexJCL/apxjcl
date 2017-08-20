<!--TODO: implement smart short navigation render-->
<template>
  <nav class="pagination">
    <a href="#" class="pagination-previous">Previous</a>
    <a href="#" class="pagination-next">Next</a>
    <ul class="pagination-list">
      <li v-for="n in pages">
        <a href="#" class="pagination-link" :class="{'is-current': n === activeItem}">{{n}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'blog-pagination',
    props: ['pages', 'activeItem']
  }
</script>
