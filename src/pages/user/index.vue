<template>
  <div class="user">
    <user-summary :id="user.id" :full-details="true" :link-to-profile="false" />

    <h2>Posts Written By {{ user.name }}</h2>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import UserSummary from '@/components/user-summary'
import PostList from '@/components/post-list'

export default {
  name: 'user',
  components: { UserSummary, PostList },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    posts () {
      return this.$store.getters.postsByUserId(this.id)
    },
    user () {
      return this.$store.getters.userById(this.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
