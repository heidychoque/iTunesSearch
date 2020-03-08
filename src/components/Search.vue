<template>
<v-container >
        <v-row >
          <v-col  cols="11" xs="11" sm="11" md="11">
            <v-text-field label="Search" v-model="artistToSearch" single-line max-width="210" outlined clearable v-on:keyup.enter="search(artistToSearch)"></v-text-field>
          </v-col>
          <v-col  cols="1" xs="1" sm="1" md="1">
            <v-btn icon @click="search(artistToSearch)" class="primary">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mb-10 second-font">
      <v-row  v-for="result in getData.results" :key="result.collectionName" cols="12" sm="4" md="4">
        <v-card class="ma-4" max-width="210" max-height="" color="#E040FB">
          <v-card-title class="mx-12 font-italic font-weight-bold">
      {{result.artistName}}
    </v-card-title>
        <v-img
          :src="result.artworkUrl100"
          height="190px"
          width="250px"
        ></v-img>
        <div class="mx-7 title">
        <blockquote>{{result.collectionName}}</blockquote>
      </div>
         <div class="my-4 mx-12 overline-2">
        $ • {{result.collectionPrice}}
      </div>
        </v-card>
      </v-row>
    </v-row>
</v-container>
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
      this.$store.dispatch('requestData', Urls.api + 'term=' + artistName + '&entity=album' + '&limit=50')
    }
  }
}
</script>
