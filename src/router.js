import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "host" */ './pages/home')
    },
    {
      path: '/post/:id',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (post.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "post" */ './pages/post'),
      props: (route) => ({ id: parseInt(route.params.id, 10) })
    },
    {
      path: '/user/:id',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (post.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "user" */ './pages/user'),
      props: (route) => ({ id: parseInt(route.params.id, 10) })
    }
  ]
})
