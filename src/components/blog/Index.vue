<template>
  <div id="index">
    <div class="hero is-medium">
      <div class="hero-body">
        <h1 class="title is-3">Blog</h1>
        <p class="subtitle is-6">read me sometimes</p>
      </div>
    </div>
    <section class="hero is-black" :class="{'is-large': entries.length > 0, 'is-fullheight': entries.length == 0}">
      <div class="hero-body">
        <template v-if="entries.length > 0 && !fetching">
          <div class="columns is-multiline">
            <blog-entry
              v-for="entry in entries"
              v-bind:key="entry._id"
              v-bind:entry="entry"
            ></blog-entry>
          </div>
          <blog-pagination :pages="pages" :activeItem="actualPage" v-if="pages > 1"></blog-pagination>
        </template>
        <template v-else-if="!fetching">
          <div class="container has-text-centered">
            <p class="subtitle is-6">sorry, there's nothing yet</p>
          </div>
        </template>
        <template v-else>
          <div class="container has-text-centered">
            <loader-light></loader-light>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import BlogEntry from './Entry.vue'
  import LoaderLight from '../LoaderLight.vue'
  import BlogPagination from './Pagination.item.vue'

  export default {
    components: {
      BlogPagination,
      LoaderLight,
      BlogEntry
    },
    mounted () {
      this.$store.dispatch('blog/fetchEntries')
    },
    computed: {
      ...mapState({
        entries: state => state.blog.entries,
        fetching: state => state.blog.fetching,
        pages: state => state.blog.pages,
        actualPage: state => state.blog.actualPage
      })
    }
  }
</script>
