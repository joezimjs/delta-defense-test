<template>
  <div class="user inverted">
    <h2>
      <router-link :to="'/user/' + this.id" v-if="linkToProfile">{{ user.name }}</router-link>
      <span v-else>{{ user.name }}</span>
    </h2>

    <div class="details">
      <div><span class="label">Email:</span><a :href="'mailto:' + user.email">{{ user.email }}</a></div>
      <div><span class="label">Username:</span>{{ user.username }}</div>
      <div><span class="label">Phone:</span>{{ user.phone }}</div>
      <div><span class="label">Site:</span><a :href="'http://' + user.website">{{ user.website }}</a></div>
    </div>

    <div class="details" v-if="fullDetails">
      <div>
        <span class="label">Address</span><br>
        {{user.address.street}}, {{user.address.suite}}<br>
        {{user.address.city}}, {{user.address.zipcode}}<br>
        Geo Latitude: {{user.address.geo.lat}}, Geo Longitude: {{user.address.geo.lng}}
      </div>
      <div>
        <span class="label">Company</span><br>
        {{user.company.name}}<br>
        "{{user.company.catchPhrase}}"<br>
        BS: {{user.company.bs}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    fullDetails: {
      type: Boolean,
      default: true
    },
    linkToProfile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    user () {
      return this.$store.getters.userById(this.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.user
  padding 20px

h2
  margin 0
  line-height 23px
  font-size 23px

  a
    text-decoration none

.details
  display flex
  justify-content space-between
  flex-flow row wrap
  margin-top 20px

.label
  font-weight bold
  padding-right 5px

@media (min-width: 600px)
  h2
    line-height 30px
    font-size 30px
</style>
