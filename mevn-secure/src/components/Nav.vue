<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      <b-link @click="logout()">(Logout)</b-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 1,
          text: 'About',
          page:'/About'
        },
        {
          id: 2,
          text: 'Contact',
          page:'/Contact'
        },
        {
          id: 3,
          text: 'BookList',
          page:'/booklist'
        }
      ]
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('jwtToken')
      this.$router.push({
        name: 'Login'
      })
    }
  }

}
</script>
