<template>
  <v-app>
    <v-content>
      <Search/>
    </v-content>
  </v-app>
</template>

<script>
import Search from './components/Search'

export default {
  name: 'App',

  components: {
    Search
  },

  data: () => ({
    //
  })
}
</script>

<style scoped>
  .application {
    background-color: #a4508b;
    background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
  }
</style>
