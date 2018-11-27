import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const Login = () => import('@/components/login')
const Users = () => import('@/components/Users')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'admin' },
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      meta: { layout: 'admin' },
      component: Users
    }
  ]
})
