<template>
  <div class="post-summary">
    <h2><router-link :to="'/post/' + post.id" class="post-title-link">{{ post.title }}</router-link></h2>
    <p>Author: <router-link :to="'/user/' + user.id">{{ user.name }}</router-link> | {{ comments.length }} Comments</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    user () {
      return this.$store.getters.userById(this.post.userId)
    },
    comments () {
      return this.$store.getters.commentsForPostId(this.post.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.post-summary
  margin-bottom 20px

  h2
    font-size 25px
    text-transform capitalize
    margin 0

  p
    margin 0
</style>
