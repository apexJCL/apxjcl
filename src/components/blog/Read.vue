<template>
  <div id="read" class="hero is-fullheight is-black">
    <div class="hero-body">
      <router-link to="/blog" class="button is-awesome">Go back</router-link>
      <div class="container">
        <template v-if="fetching">
          <loader-light></loader-light>
        </template>
        <template v-else>
          <h1 class="title is-2">{{entry.title}}<p class="subtitle is-4">{{entry.subtitle}}</p></h1>
          <p class="subtitle is-6">{{niceDate}}</p>
          <p v-html="parsedEntry"></p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import LoaderLight from '../LoaderLight.vue'
  import * as marked from 'marked'
  import * as moment from 'moment-timezone'

  export default {
    components: {LoaderLight},
    beforeMount () {
      this.$store.dispatch('blog/fetchEntry', {entryId: this.$route.params.entryId})
    },
    computed: {
      ...mapState({
        fetching: state => state.blog.fetching,
        entry: state => state.blog.entry
      }),
      parsedEntry: function () {
        return marked(this.entry.content)
      },
      niceDate: function () {
        return moment(this.entry.createdAt).tz('America/Peru').format('ddd D, MMM YYYY | ha z')
      }
    }
  }
</script>

<style scoped lang="sass">
  .is-awesome
    border-radius: 0
    background-color: black
    color: white
    &:hover
      border-color: #0077e7
</style>
