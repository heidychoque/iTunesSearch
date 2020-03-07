<template>
<v-form>
    <v-container>
      <v-img>
      </v-img>
      <v-row>
    <v-col cols="12" sm="6">
          <v-text-field
          label="Search"
          single-line
        ></v-text-field>
    </v-col>
    <v-col>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    </v-col>
      </v-row>
    </v-container>
</v-form>
</template>

<script>
import searchData from '../searchData.js'
export default {
  data: () => ({
    currentSearches: searchData.searchData
  })
}
</script>
