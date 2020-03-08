import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E040FB',
        secondary: '#F3E5F5',
        accent: '#8c9eff',
        error: '#b71c1c',
        background: '#F48FB1'
      }
    }
  }
})
