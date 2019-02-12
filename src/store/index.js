import Vue from 'vue'
import Vuex from 'vuex'
import api from './api-request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    users: [],
    comments: []
  },
  getters: {
    userById (state) {
      return function (id) {
        return state.users.find(user => user.id === id)
      }
    },
    commentsForPostId (state) {
      return function (id) {
        return state.comments.filter(comment => comment.postId === id)
      }
    },
    postById (state) {
      return function (id) {
        return state.posts.find(post => post.id === id)
      }
    },
    postsByUserId (state) {
      return function (id) {
        return state.posts.filter(post => post.userId === id)
      }
    }
  },
  mutations: {

  },
  actions: {
    async getPosts ({ state }) {
      let data = await api('GET', 'posts')
      state.posts = data
      return data
    },
    async getUsers ({ state }) {
      let data = await api('GET', 'users')
      state.users = data
      return data
    },
    async getComments ({ state }) {
      let data = await api('GET', 'comments')
      state.comments = data
      return data
    }
  }
})
