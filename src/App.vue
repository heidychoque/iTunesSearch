<template>
  <v-app  id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-content>
      <Search/>
    </v-content>
  </v-app>
</template>

<script>
import Search from './components/Search'

export default {
  name: 'App',
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  components: {
    Search
  },

  data: () => ({
    //
  })
}
</script>
