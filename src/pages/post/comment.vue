<template>
  <div class="comment">
    <p class="comment-by">{{ comment.email }} writes:</p>
    <p class="comment-name">{{comment.name}}</p>
    <p class="comment-body">{{comment.body}}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.comment
  background #fff
  padding 20px
  margin 20px 0

.comment-by
  margin-top 0

.comment-name
  font-size 20px
  font-weight bold
  text-transform capitalize

.comment-body
  font-size 20px
  margin-bottom 0
</style>
