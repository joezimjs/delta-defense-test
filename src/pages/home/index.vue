<template>
  <div class="home">
    <post-list :posts="shownPosts"></post-list>
    <div class="paginator" v-if="numToShow < posts.length"><button class="show-more" @click="numToShow += 10">Show More</button></div>
  </div>
</template>

<script>
import PostList from '@/components/post-list'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: { PostList },
  data () {
    return {
      numToShow: 10
    }
  },
  computed: {
    ...mapState(['posts', 'users', 'comments']),
    shownPosts () {
      return this.posts.slice(0, this.numToShow)
    }
  }
}
</script>

<style lang="stylus" scoped>
.paginator
  text-align center

.show-more
  background none
  border 0
  font-size 20px
  padding 10px 30px
  font-weight bold
  color #4b8
  cursor pointer

  &:hover
    background #4b8
    color #234

</style>
