<template>
  <div id="app">
    <div id="header" class="inverted">
      <div class="content-width">
        <router-link to="/" class="header-logo"><img alt="Vue logo" src="./assets/logo.png" width=50 height=50></router-link>
        <h1>Delta Defense Placeholder Blog</h1>
      </div>
    </div>
    <div id="main" class="content-width">
      <div v-if="isLoading" class="main-loading-bar"><loading-bar :loading="true"></loading-bar></div>
      <router-view v-else/>
    </div>
  </div>
</template>

<script>
import LoadingBar from '@/components/loading-bar'

export default {
  name: 'app',
  components: { LoadingBar },
  data () {
    return {
      isLoading: false
    }
  },
  async created () {
    this.isLoading = true
    await Promise.all([this.$store.dispatch('getPosts'), this.$store.dispatch('getUsers'), this.$store.dispatch('getComments')])
    this.isLoading = false
  }
}
</script>

<style lang="stylus">
html
  font-family "Roboto Slab", serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #234
  background #eff4f8
  margin 0
  padding 0
  box-sizing border-box
  font-size 18px

*
  box-sizing inherit

body
  margin 0
  overflow-y scroll

a
a:link
a:visited
  color #4b8

a:hover
  color #5c9

#header
  padding 15px 0

  .header-logo
    margin-right 25px
    font-size 0

  h1
    display inline
    line-height 50px
    vertical-align top
    margin 0
    font-weight 300

@media (max-width: 600px)
  #header
    text-align center

    .header-logo
      display block
      margin-right 0

    h1
      display block
      text-align center
      font-size 20px
      line-height 25px

#main
  padding-top 20px
  padding-bottom 20px

.main-loading-bar
  margin-top calc(50vh - 60px)

.content-width
  width 100%
  max-width 1000px
  margin 0 auto
  padding 0 10px

.inverted
  background #234
  color #eff4f8
</style>
