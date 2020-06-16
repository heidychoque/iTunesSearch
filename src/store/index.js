import Vue from 'vue'
import Vuex from 'vuex'
import searchServices from '@/services/SearchService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searches: {}
  },
  mutations: {
    setSearch (state, searches) {
      state.searches = searches
    }
  },
  actions: {
    requestData (state, artisName) {
      searchServices.getRequest(artisName)
        .then(response => {
          state.commit('setSearch', response.data)
        })
        .catch(error => {
          alert(error)
        })
    }
  },
  getters: {
    getSearches (state) {
      return state.searches
    }
  }
})
