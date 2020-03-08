<template>
<v-contairner >
  <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="Search" v-model="artistToSearch" single-line></v-text-field>
          </v-col>
          <v-col>
            <v-btn icon @click="search(artistToSearch)" class="primary">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mb-10 second-font">
      <v-col  v-for="result in getData.results" :key="result" cols="12" sm="4" md="4">
        <v-row align="center" justify="center" class="mb-5">
          <h3 align="center">{{ result.artistName }}</h3>
        </v-row>
        <v-img
          :src="result.artworkUrl100"
          class="justify-center"
          contain
          height="180px"
          width="250px"
        ></v-img>
        <v-row align="center" justify="center" class="mb-5">
          <h3 align="center">{{ result.collectionName }}</h3>
        </v-row>
         <v-row align="center" justify="center" class="mb-5">
          <h3 align="center">{{ result.trackPrice }}</h3>
        </v-row>
      </v-col>
    </v-row>
      </v-container>
  </v-form>
</v-contairner>
</template>

<script>
import Urls from '@/config.js'
export default {
  mounted () {},
  computed: {
    getData: function () {
      return this.$store.getters.getSearches
    }
  },
  data: () => ({
    artistToSearch: '',
    currentSearches: []
  }),
  methods: {
    search (artistName) {
      this.$store.dispatch('requestData', Urls.api + 'term=' + artistName + '&limit=50')
    }
  }

}
</script>

<style>
 #lol {
   background: aqua;
 }
</style>
