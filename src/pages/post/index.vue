<template>
  <div class="post">
    <h1 class="post-title">{{ post.title }}</h1>

    <p class="by-line">By <router-link :to="'/user/' + user.id">{{ user.name }}</router-link> | {{ comments.length }} Comments</p>

    <p class="post-content">
      {{ post.body }}
    </p>

    <user-summary :id="user.id" :full-details="false" :link-to-profile="true" />

    <comment-list :comments="comments" />
  </div>
</template>

<script>
import UserSummary from '@/components/user-summary'
import CommentList from './comment-list'

export default {
  name: 'post',
  components: { UserSummary, CommentList },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    post () {
      return this.$store.getters.postById(this.id)
    },
    user () {
      return this.$store.getters.userById(this.post.userId)
    },
    comments () {
      return this.$store.getters.commentsForPostId(this.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.post-title
  text-transform capitalize
  font-size 30px

.by-line
  margin 0

.post-content
  font-size 18px
  margin 50px 0

@media (min-width: 600px)
  .post-title
    font-size 40px

  .post-content
    font-size 25px
</style>
