<template>
  <div class="loading-bar" :class="{loading}"><span></span></div>
</template>

<script>
export default {
  name: 'loading-bar',
  props: ['loading']
}
</script>

<style lang="stylus" scoped>
.loading-bar
  height 10px
  width 100%

  span
    height 10px
    background-color #4b8
    margin 0
    width 0%
    display block
    transition all .5s

  &.loading span
    animation loading 1s ease-in-out infinite

@keyframes loading
  from
    width 0
    margin-left 0
  50%
    width 100%
    margin-left 0
  to
    width 0
    margin-left 100%
</style>
