<template>
  <div class="comment-list">
    <h2>{{ comments.length }} Comments</h2>

    <comment v-for="comment in comments" :key="comment.id" :comment="comment" class="comment" />
  </div>
</template>

<script>
import Comment from './comment'

export default {
  components: { Comment },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
