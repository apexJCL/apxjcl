<template>
  <div id="index">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img
            src="https://avatars3.githubusercontent.com/u/4037632?v=4&u=f87c45caf248e548c11ffcb3253337f17c93ae3d&s=400"
            alt="">
          <h1 class="title is-1">apxjcl</h1>
          <p class="subtitle is-6">it's me again</p>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight is-black">
      <div class="hero-body">
        <div class="columns is-multiline">
          <div class="column is-4-desktop">
            <div class="has-text-centered">
              <p class="title is-3">I'm a {{age}} years old developer.</p>
              <p class="subtitle is-6">I really like to do stuff</p>
            </div>
          </div>
          <div class="column">
            <div class="columns is-mobile is-multiline">
              <div class="column is-3-mobile is-1-desktop">
                <img src="./../../assets/img/nodejs.png" alt="" class="responsive">
              </div>
              <div class="column is-3-mobile is-1-desktop">
                <img src="./../../assets/img/vue.png" alt="" class="responsive">
              </div>
              <div class="column is-3-mobile is-1-desktop">
                <img src="./../../assets/img/php.png" alt="" class="responsive">
              </div>
              <div class="column is-3-mobile is-1-desktop">
                <img src="./../../assets/img/js.png" alt="" class="responsive">
              </div>
              <div class="column is-3-mobile is-1-desktop">
                <img src="./../../assets/img/python.png" alt="" class="responsive">
              </div>
              <div class="column is-3-mobile is-1-desktop">
                <img src="./../../assets/img/postgresql.png" alt="" class="responsive">
              </div>
              <div class="column is-3-mobile is-1-desktop">
                <img src="./../../assets/img/java.png" alt="" class="responsive">
              </div>
              <div class="column is-3-mobile is-1-desktop">
                <img src="./../../assets/img/android.png" alt="" class="responsive">
              </div>
              <div class="column is-3-mobile is-1-desktop">
                <img src="./../../assets/img/linux.png" alt="" class="responsive">
              </div>
              <div class="column is-3-mobile is-1-desktop">
                <img src="../../assets/img/git.png" alt="" class="responsive">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import * as moment from 'moment'

  export default {
    computed: {
      age: () => moment(moment.now()).diff(moment([1994, 3, 29]), 'years')
    }
  }
</script>

<style scoped>
  .avatar {
    display: block;
    width: 100%;
  }

  .justified {
    text-align: justify;
  }

  .responsive {
    display: block;
    width: 100%;
  }
</style>
