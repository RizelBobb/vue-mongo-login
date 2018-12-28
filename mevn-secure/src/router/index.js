import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Nav from '@/components/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/booklist',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav
  }
  ]
})
