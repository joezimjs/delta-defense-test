<template>
  <div class="post-list">
    <post-summary v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostSummary from '@/components/post-summary'

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: { PostSummary }
}
</script>
